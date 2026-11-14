import Link from "next/link"
import ReportViewer from "./report-viewer"
import { ALL_TIME_GROUPS, COMBINED, PROGRAMS_2026, REPORT_2026, STATS_2026 } from "@/lib/report-data"

type Variant = "combined" | "2026"

const HERO_METRICS: Record<Variant, { value: string; label: string; sub?: string }[]> = {
  // The site root leads with the combined 2025 and 2026 totals.
  combined: [
    { value: COMBINED.youthImpactedShort, label: "Youth Impacted", sub: "2025: 160K+ | 2026: 229K+" },
    { value: COMBINED.countries, label: "Countries & Territories", sub: "2025: 106 | 2026: 129" },
    { value: COMBINED.executives, label: "Unique Executives", sub: "2025: 367 | 2026: 328" },
    { value: COMBINED.members, label: "Members", sub: "2025: 1,400 | 2026: 2,200" },
    { value: COMBINED.volunteers, label: "Volunteers", sub: "2025: 900 | 2026: 600" },
    { value: COMBINED.events, label: "Events", sub: "2025: 20+ | 2026: 25" },
    { value: COMBINED.impressionsShort, label: "Impressions (Reach)", sub: "2025: 3.7M | 2026: 7.3M" },
    { value: "$60.2K CAD", label: "Revenue & Funding", sub: "2025: $5.2K | 2026: $55.0K" },
  ],
  // /2026/annual leads with this year's figures alone.
  "2026": [
    { value: STATS_2026.youthImpactedShort, label: "Youth Impacted" },
    { value: STATS_2026.countries, label: "Countries & Territories" },
    { value: STATS_2026.executives, label: "Executives" },
    { value: STATS_2026.members, label: "Members" },
    { value: STATS_2026.volunteers, label: "Volunteers" },
    { value: STATS_2026.events, label: "Events" },
    { value: "7.3M+", label: "Impressions (Reach)" },
    { value: "$55.0K CAD", label: "Revenue & Funding" },
  ],
}

export default function Report2026({ variant, shareUrl }: { variant: Variant; shareUrl: string }) {
  const metrics = HERO_METRICS[variant]
  const isCombined = variant === "combined"

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f5f1eb] via-white to-[#f0f9ff] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#4ecdc4]/10 px-4 py-2 text-sm font-medium text-[#405862]">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#4ecdc4]" />
              New: 2026 Annual Report • {REPORT_2026.edition} • {REPORT_2026.publishedLabel}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#405862] md:text-6xl">
              2026 Annual
              <span className="block text-[#4ecdc4]">Impact Report</span>
            </h1>

            <p className="mx-auto mb-4 max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {REPORT_2026.tagline} The Advance Copy of our 2026 Annual Impact Report shows how youth across{" "}
              {STATS_2026.countries} countries and territories explored careers in wellness, stepped into policy spaces
              and built a safe community together, reaching {STATS_2026.youthImpacted} young people this year.
            </p>

            {isCombined && (
              <p className="mx-auto mb-8 max-w-3xl text-base font-medium text-[#405862]">
                Our impact since 2025, with the 2025 and 2026 reports combined:
              </p>
            )}
            {!isCombined && (
              <p className="mx-auto mb-8 max-w-3xl text-base font-medium text-[#405862]">Our 2026 at a glance:</p>
            )}

            <div className="mx-auto mb-8 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`rounded-lg border-l-4 bg-white p-4 text-left shadow-md ${
                    i % 2 === 0 ? "border-[#4ecdc4]" : "border-[#405862]"
                  }`}
                >
                  <div className="text-2xl font-bold text-[#405862] md:text-3xl">{m.value}</div>
                  <div className="text-xs text-gray-600 md:text-sm">{m.label}</div>
                  {m.sub && <div className="mt-1 text-[11px] leading-tight text-gray-500">{m.sub}</div>}
                </div>
              ))}
            </div>

            <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#report"
                className="rounded-lg bg-[#405862] px-6 py-3 font-semibold text-white transition-all hover:bg-[#334852] hover:shadow-lg"
              >
                Read the 2026 Report
              </a>
              <a
                href="#all-time"
                className="rounded-lg border border-[#405862] px-6 py-3 font-semibold text-[#405862] transition-all hover:bg-[#405862]/5"
              >
                See All Time Impact
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 text-sm text-gray-600 sm:flex-row">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#4ecdc4]" />
                <span className="font-medium">Data as of:</span> {REPORT_2026.dataAsOf}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#405862]" />
                <span className="font-medium">Published:</span> {REPORT_2026.publishedLabel} ({REPORT_2026.edition})
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#4ecdc4]" />
                <span className="font-medium">Report Type:</span> Annual Assessment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report viewer */}
      <section id="report" className="scroll-mt-24 bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#405862] md:text-3xl">Read the Advance Copy</h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              All {REPORT_2026.pageCount} pages: who we are, our team and members, key initiatives, media features, how
              to support us, total reach, finances and our all time impact.
            </p>
          </div>
          <ReportViewer shareUrl={shareUrl} />
        </div>
      </section>

      {/* 2026 programs */}
      <section className="bg-gradient-to-br from-[#f5f1eb] to-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#405862] md:text-3xl">2026 Programs and Initiatives</h2>
            <p className="text-gray-600">
              {STATS_2026.executives} executives in {STATS_2026.executiveCountries} countries and {STATS_2026.volunteers}{" "}
              volunteers gave {STATS_2026.volunteerHours} hours this year, alongside {STATS_2026.mentorHours} mentorship
              hours. Here are the programs that made it count.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS_2026.map((p) => (
              <article key={p.name} className="flex flex-col rounded-xl bg-white p-5 shadow-md">
                <div className="mb-1 text-xs font-medium uppercase tracking-wide text-[#4ecdc4]">{p.when}</div>
                <h3 className="mb-2 text-lg font-semibold text-[#405862]">{p.name}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{p.summary}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.figures.map((f) => (
                    <li key={f} className="rounded-full bg-[#4ecdc4]/10 px-3 py-1 text-xs font-medium text-[#405862]">
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-center sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xl font-bold text-[#405862]">{STATS_2026.followers}</div>
              <div className="text-xs text-gray-600">followers in 2026</div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xl font-bold text-[#405862]">{STATS_2026.impressions}</div>
              <div className="text-xs text-gray-600">impressions in 2026</div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xl font-bold text-[#405862]">{STATS_2026.revenue}</div>
              <div className="text-xs text-gray-600">2026 revenue ({STATS_2026.netIncome.toLowerCase()})</div>
            </div>
          </div>
        </div>
      </section>

      {/* All time impact: 2025 and 2026 combined */}
      <section id="all-time" className="scroll-mt-24 bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#405862] md:text-3xl">All Time Impact: 2025 and 2026</h2>
            <p className="text-gray-600">
              Combined figures from our 2025 Annual Impact Report and the 2026 Advance Copy, with the year by year split
              under each number.
            </p>
          </div>
          <div className="mx-auto max-w-6xl space-y-10">
            {ALL_TIME_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 inline-block rounded-full bg-[#4ecdc4] px-4 py-1 text-sm font-semibold text-[#405862]">
                  {group.title}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-[#405862] p-5 text-white shadow-md">
                      <div className="text-sm text-gray-200">{s.label}</div>
                      <div className="my-1 break-words text-3xl font-bold text-[#4ecdc4]">{s.value}</div>
                      <div className="text-sm text-gray-200">{s.unit}</div>
                      {s.breakdown && (
                        <div className="mt-3 border-t border-white/20 pt-3 text-xs text-gray-300">{s.breakdown}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-600">
            Looking for last year on its own?{" "}
            <Link href="/2025/annual" className="font-medium text-[#405862] underline underline-offset-4 hover:text-[#4ecdc4]">
              Read the 2025 Annual Impact Report
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gradient-to-br from-[#405862] to-[#334852] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Help Us Open More Doors in 2027</h2>
            <p className="mb-8 text-lg leading-relaxed opacity-90 md:text-xl">
              Since 2025 we have impacted {COMBINED.youthImpacted} young people across {COMBINED.countries} countries and
              territories. Follow along, join the team, donate or bring your organization on board as a partner.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://www.drinterested.org/members/join"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#4ecdc4] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#3db8b8] hover:shadow-lg"
              >
                Join Our Team
              </a>
              <a
                href="https://www.drinterested.org/sponsorships"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[#405862] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
              >
                Sponsor or Partner
              </a>
              <a
                href="https://discord.gg/pzbGRgsGXY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/60 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
