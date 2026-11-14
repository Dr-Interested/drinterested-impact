import type { Metadata } from "next"
import { COMBINED, REPORT_2026, STATS_2026 } from "@/lib/report-data"

// Shared between /2026/annual and / (the site root renders the latest report: the 2026 Advance Copy).

export const REPORT_2026_CANONICAL = REPORT_2026.canonical

export const report2026Description = `Read the Advance Copy of Dr. Interested's 2026 Annual Impact Report: ${STATS_2026.youthImpacted} youth impacted in 2026 across ${STATS_2026.countries} countries and territories, with ${STATS_2026.executives} executives, ${STATS_2026.members} members and ${STATS_2026.volunteers} volunteers. Since 2025: ${COMBINED.youthImpacted} youth impacted and ${COMBINED.executives} unique executives.`

export const report2026Keywords = [
  "Dr. Interested 2026 annual impact report",
  "Dr. Interested 2026 impact report advance copy",
  "youth led healthcare education impact 2026",
  "229000 youth impacted",
  "389000 youth impacted since 2025",
  "129 countries youth organization",
  "328 executives Dr. Interested",
  "2200 members Dr. Interested",
  "MedExplore 2026 conference",
  "Explore 3 case competition 2026",
  "research proposal competition 2026",
  "youth in policy career development community",
]

export function buildReport2026Metadata(canonical: string): Metadata {
  return {
    title: "Dr. Interested 2026 Annual Impact Report (Advance Copy)",
    description: report2026Description,
    alternates: { canonical },
    openGraph: {
      title: "Dr. Interested 2026 Annual Impact Report: Advance Copy",
      description: `${STATS_2026.youthImpacted} youth impacted in 2026 across ${STATS_2026.countries} countries and territories. ${COMBINED.youthImpacted} since 2025. Read the Advance Copy of our 2026 Annual Impact Report.`,
      url: canonical,
      siteName: "Dr. Interested Impact Report",
      images: [
        {
          url: REPORT_2026.ogImage,
          width: 1200,
          height: 1200,
          alt: "Cover of the Advance Copy of the Dr. Interested 2026 Annual Impact Report",
          type: "image/png",
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: REPORT_2026.published,
      modifiedTime: REPORT_2026.published,
      section: "Healthcare Education",
    },
    twitter: {
      card: "summary_large_image",
      title: "Dr. Interested 2026 Annual Impact Report (Advance Copy)",
      description: `${STATS_2026.youthImpacted} youth impacted | ${STATS_2026.countries} countries | ${STATS_2026.executives} executives | ${STATS_2026.members} members | ${COMBINED.youthImpacted} since 2025 #ImpactReport #YouthLed`,
      images: [REPORT_2026.ogImage],
    },
    keywords: report2026Keywords,
    other: {
      "article:published_time": REPORT_2026.published,
      "article:modified_time": REPORT_2026.published,
      "article:section": "Healthcare Education",
      "article:tag": "healthcare education, impact report, annual report, youth policy, career development, 2026",
    },
  }
}

export function buildReport2026WebPageSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: "Dr. Interested 2026 Annual Impact Report (Advance Copy)",
    description: report2026Description,
    isPartOf: { "@type": "WebSite", "@id": "https://impact.drinterested.org/#website" },
    about: { "@type": "Thing", name: "Youth led healthcare education, policy and community impact" },
    mainEntity: {
      "@type": "Report",
      name: "Dr. Interested 2026 Annual Impact Report",
      version: REPORT_2026.edition,
      url: REPORT_2026_CANONICAL,
      encoding: { "@type": "MediaObject", contentUrl: REPORT_2026.pdfUrl, encodingFormat: "application/pdf" },
    },
    primaryImageOfPage: { "@type": "ImageObject", url: REPORT_2026.ogImage },
    inLanguage: "en-US",
    datePublished: REPORT_2026.published,
    dateModified: REPORT_2026.published,
    publisher: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: "https://www.drinterested.org",
      logo: {
        "@type": "ImageObject",
        url: "https://www.drinterested.org/android-chrome-512x512.png",
      },
    },
  }
}
