import type { Metadata } from "next"
import SeoSchema from "@/components/seo-schema"
import Report2026 from "@/components/report-2026/report-2026"
import { generateBreadcrumbSchema } from "@/lib/seo-utils"
import { REPORT_2026_CANONICAL, buildReport2026Metadata, buildReport2026WebPageSchema } from "./report-meta"

export const metadata: Metadata = buildReport2026Metadata(REPORT_2026_CANONICAL)

export default function Annual2026ReportPage() {
  return (
    <>
      <SeoSchema id="annual-2026-webpage-schema" schema={buildReport2026WebPageSchema(REPORT_2026_CANONICAL)} />
      <SeoSchema
        id="annual-2026-breadcrumb-schema"
        schema={generateBreadcrumbSchema([
          { name: "Dr. Interested", url: "https://www.drinterested.org" },
          { name: "Impact Reports", url: "https://impact.drinterested.org" },
          { name: "2026 Annual Impact Report", url: REPORT_2026_CANONICAL },
        ])}
      />
      <Report2026 variant="2026" shareUrl={REPORT_2026_CANONICAL} />
    </>
  )
}
