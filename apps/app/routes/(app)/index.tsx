import { scoreBands, scorecardItems, sourceLinks } from "@/lib/scorecard";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpDown,
  ExternalLink,
  FileText,
  Network,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/(app)/")({
  component: ScorecardPage,
});

const allCategories = [
  "All",
  ...Array.from(new Set(scorecardItems.map((item) => item.category))),
];

function ScorecardPage() {
  const [category, setCategory] = useState("All");
  const [sortByScore, setSortByScore] = useState(true);

  const filteredItems = useMemo(() => {
    const items =
      category === "All"
        ? scorecardItems
        : scorecardItems.filter((item) => item.category === category);

    return [...items].sort((a, b) =>
      sortByScore
        ? b.scoreValue - a.scoreValue || a.check.localeCompare(b.check)
        : a.category.localeCompare(b.category) ||
          a.check.localeCompare(b.check),
    );
  }, [category, sortByScore]);

  const highValueCount = scorecardItems.filter(
    (item) => item.scoreValue >= 8,
  ).length;
  const siteDependentCount = scorecardItems.filter((item) =>
    item.scoreLabel.includes(","),
  ).length;

  return (
    <main className="min-h-svh bg-[#f6f7f4] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <ShieldCheck className="size-4 text-emerald-700" />
                Agent Ready scorecard
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
                  Readiness checks scored by practical expert value.
                </h1>
                <p className="max-w-3xl text-base leading-7 text-slate-600">
                  This is a working table for deciding which crawler, metadata,
                  documentation, API, and commerce signals are worth adding to a
                  real site. It separates universal baselines from scanner-only
                  or site-type-specific affordances.
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
              <Stat label="Checks" value={scorecardItems.length.toString()} />
              <Stat label="High value" value={highValueCount.toString()} />
              <Stat label="Conditional" value={siteDependentCount.toString()} />
            </dl>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                className={
                  category === item
                    ? "rounded-md border border-slate-950 bg-slate-950 px-3 py-2 text-sm font-medium text-white"
                    : "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-500"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              aria-pressed={sortByScore}
              className="ml-auto inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-500"
              onClick={() => setSortByScore((value) => !value)}
            >
              <ArrowUpDown className="size-4" />
              {sortByScore ? "Score sort" : "Category sort"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[1080px] border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-[0.12em] text-slate-500">
                <tr>
                  <th className="w-[150px] px-4 py-3 font-semibold">
                    Category
                  </th>
                  <th className="w-[220px] px-4 py-3 font-semibold">Check</th>
                  <th className="w-[150px] px-4 py-3 font-semibold">
                    Expert value
                  </th>
                  <th className="w-[240px] px-4 py-3 font-semibold">
                    Best fit
                  </th>
                  <th className="px-4 py-3 font-semibold">Why it helps</th>
                  <th className="w-[170px] px-4 py-3 font-semibold">
                    References
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-slate-200 align-top"
                  >
                    <td className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {item.category}
                    </td>
                    <td className="px-4 py-4 font-semibold text-slate-950">
                      {item.check}
                    </td>
                    <td className="px-4 py-4">
                      <ScoreBadge
                        scoreLabel={item.scoreLabel}
                        scoreValue={item.scoreValue}
                      />
                    </td>
                    <td className="px-4 py-4 leading-6 text-slate-700">
                      {item.appliesTo}
                    </td>
                    <td className="px-4 py-4 leading-6 text-slate-700">
                      {item.expertRead}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-2">
                        {item.references.slice(0, 3).map((reference) => (
                          <a
                            key={reference.url}
                            className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 underline decoration-emerald-500 decoration-2 underline-offset-4 hover:text-emerald-700"
                            href={reference.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {reference.label}
                            <ExternalLink className="size-3" />
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2">
              <FileText className="size-4 text-emerald-700" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                How to read scores
              </h2>
            </div>
            <div className="space-y-3">
              {scoreBands.map((band) => (
                <div
                  key={band.label}
                  className="grid grid-cols-[64px_1fr] gap-3 border-t border-slate-200 pt-3 first:border-t-0 first:pt-0"
                >
                  <div className="rounded-md bg-slate-950 px-2 py-1 text-center text-xs font-semibold text-white">
                    {band.label}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {band.title}
                    </p>
                    <p className="text-sm leading-6 text-slate-600">
                      {band.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2">
              <Network className="size-4 text-cyan-700" />
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Source stack
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {sourceLinks.map((source) => (
                <a
                  key={source.url}
                  className="inline-flex items-start gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-800"
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="mt-0.5 size-3 shrink-0" />
                  {source.label}
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white px-3 py-2">
      <dt className="text-xs font-medium text-slate-500">{label}</dt>
      <dd className="text-2xl font-semibold text-slate-950">{value}</dd>
    </div>
  );
}

function ScoreBadge({
  scoreLabel,
  scoreValue,
}: {
  scoreLabel: string;
  scoreValue: number;
}) {
  const tone =
    scoreValue >= 8
      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
      : scoreValue >= 6
        ? "border-cyan-200 bg-cyan-50 text-cyan-900"
        : scoreValue >= 5
          ? "border-amber-200 bg-amber-50 text-amber-900"
          : "border-slate-200 bg-slate-100 text-slate-700";

  return (
    <span
      className={`inline-flex min-h-9 max-w-[140px] items-center rounded-md border px-2.5 py-1 text-sm font-semibold leading-5 ${tone}`}
    >
      {scoreLabel}
    </span>
  );
}
