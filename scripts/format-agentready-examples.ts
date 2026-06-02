import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const repoRoot = new URL("../", import.meta.url).pathname;
const examplesRoot = join(repoRoot, "examples");
const checkMode = process.argv.includes("--check");

type FormatResult = {
  changed: number;
  checked: number;
  unchanged: number;
};

async function main() {
  const files = await collectFiles(examplesRoot);
  const result: FormatResult = { changed: 0, checked: 0, unchanged: 0 };
  const changedFiles: string[] = [];

  for (const file of files) {
    const formatted = await formatFile(file);

    if (formatted === null) {
      continue;
    }

    result.checked += 1;

    const original = await readFile(file, "utf8");

    if (original !== formatted) {
      changedFiles.push(relative(repoRoot, file));
      result.changed += 1;

      if (!checkMode) {
        await writeFile(file, formatted);
      }
    } else {
      result.unchanged += 1;
    }
  }

  if (checkMode && changedFiles.length > 0) {
    console.error("Example artifact formatting issues found:");

    for (const file of changedFiles) {
      console.error(`- ${file}`);
    }

    process.exitCode = 1;
  }

  console.log(
    `${checkMode ? "Checked" : "Formatted"} ${result.checked} raw example artifact(s): ${result.changed} changed, ${result.unchanged} unchanged.`,
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

  if (file.endsWith(".json")) {
    return formatJson(await readFile(file, "utf8"));
  }

  return null;
}

function formatJson(input: string) {
  try {
    return `${JSON.stringify(JSON.parse(input), null, 2)}\n`;
  } catch {
    return null;
  }
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
