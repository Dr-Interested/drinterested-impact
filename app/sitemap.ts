import type { MetadataRoute } from "next"

const baseUrl = "https://impact.drinterested.org"
const reportImage = `${baseUrl}/impact-report-preview.png`
const report2026Image = `${baseUrl}/impact-report-2026-preview.png`

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/2026/annual`,
      lastModified: new Date("2026-11-14T00:00:00.000Z"),
      // Advance Copy: the final edition will replace it, so ask crawlers to check back.
      changeFrequency: "monthly",
      priority: 1,
      images: [report2026Image],
    },
    {
      url: `${baseUrl}/2026.pdf`,
      lastModified: new Date("2026-11-14T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/2025/annual`,
      lastModified: new Date("2026-01-07T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.9,
      images: [reportImage],
    },
    {
      url: `${baseUrl}/2025/semi-annual`,
      lastModified: new Date("2025-07-01T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.8,
      images: [reportImage],
    },
    {
      url: `${baseUrl}/2025.pdf`,
      lastModified: new Date("2026-01-07T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ]
}
