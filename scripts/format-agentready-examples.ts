import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const repoRoot = new URL("../", import.meta.url).pathname;
const examplesRoot = join(repoRoot, "examples");

type FormatResult = {
  changed: number;
  checked: number;
};

async function main() {
  const files = await collectFiles(examplesRoot);
  const result: FormatResult = { changed: 0, checked: 0 };

  for (const file of files) {
    const formatted = await formatFile(file);

    if (formatted === null) {
      continue;
    }

    result.checked += 1;

    const original = await readFile(file, "utf8");

    if (original !== formatted) {
      await writeFile(file, formatted);
      result.changed += 1;
    }
  }

  console.log(
    `Formatted ${result.changed} of ${result.checked} raw example artifact(s).`,
  );
}

async function collectFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(path)));
    } else if (entry.isFile()) {
      files.push(path);
    }
  }

  return files;
}

async function formatFile(file: string) {
  if (file.endsWith(".xml")) {
    return formatXml(await readFile(file, "utf8"));
  }

  return null;
}

function formatXml(input: string) {
  const normalized = input
    .replace(/\r\n?/g, "\n")
    .replace(/>\s+</g, ">\n<")
    .trim();
  const lines = normalized.split("\n");
  const formattedLines: string[] = [];
  let depth = 0;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      continue;
    }

    if (isClosingTag(line)) {
      depth = Math.max(depth - 1, 0);
    }

    formattedLines.push(`${"  ".repeat(depth)}${line}`);

    if (shouldIncreaseDepth(line)) {
      depth += 1;
    }
  }

  return `${formattedLines.join("\n")}\n`;
}

function isClosingTag(line: string) {
  return /^<\//.test(line);
}

function shouldIncreaseDepth(line: string) {
  return (
    /^<[^!?/][^>]*>$/.test(line) &&
    !line.endsWith("/>") &&
    !/<\/[^>]+>$/.test(line)
  );
}

await main();
