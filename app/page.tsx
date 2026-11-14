import type { Metadata } from "next"
import SeoSchema from "@/components/seo-schema"
import Report2026 from "@/components/report-2026/report-2026"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import {
  REPORT_2026_CANONICAL,
  buildReport2026Metadata,
  buildReport2026WebPageSchema,
} from "./2026/annual/report-meta"

// `/` shows the latest report (the 2026 Advance Copy) and leads with the combined 2025 and 2026 totals.
// Its canonical points at the dated URL so the two don't compete in search, and so link equity
// survives when a future report takes over `/`.
export const metadata: Metadata = buildReport2026Metadata(REPORT_2026_CANONICAL)

export default function ImpactReportHomePage() {
  return (
    <>
      <SeoSchema id="home-webpage-schema" schema={buildReport2026WebPageSchema(REPORT_2026_CANONICAL)} />
      <SeoSchema
        id="home-breadcrumb-schema"
        schema={generateBreadcrumbSchema([
          { name: "Dr. Interested", url: "https://www.drinterested.org" },
          { name: "Impact Reports", url: "https://impact.drinterested.org" },
          { name: "2026 Annual Impact Report", url: REPORT_2026_CANONICAL },
        ])}
      />
      <Report2026 variant="combined" shareUrl="https://impact.drinterested.org" />
    </>
  )
}
