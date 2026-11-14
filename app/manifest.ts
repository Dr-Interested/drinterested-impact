import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Interested Impact Reports",
    short_name: "Dr. Interested Impact",
    description:
      "Dr. Interested's 2026 Annual Impact Report (Advance Copy): 229,000+ youth impacted in 2026 and 389,000+ since 2025, across 129 countries and territories.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#405862",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-US",
    categories: ["education", "healthcare", "nonprofit"],
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
