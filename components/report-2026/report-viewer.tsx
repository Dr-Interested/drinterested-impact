"use client"

import { Download, ExternalLink, Share2 } from "lucide-react"
import { REPORT_2026 } from "@/lib/report-data"

export default function ReportViewer({ shareUrl }: { shareUrl: string }) {
  const share = async () => {
    const data = {
      title: `${REPORT_2026.title} (${REPORT_2026.edition})`,
      text: "Read the Advance Copy of Dr. Interested's 2026 Annual Impact Report: 229,000+ youth impacted across 129 countries and territories this year.",
      url: shareUrl,
    }
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        /* user cancelled */
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl)
    }
  }

  return (
    <div className="mx-auto max-w-6xl">
      {/* Interactive Canva embed */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "129.4118%",
          paddingBottom: 0,
          boxShadow: "0 4px 20px 0 rgba(63,69,81,0.15)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "12px",
          willChange: "transform",
          border: "1px solid #e5e7eb",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src={REPORT_2026.canvaEmbedUrl}
          allowFullScreen
          allow="fullscreen"
          title={`${REPORT_2026.title} (${REPORT_2026.edition})`}
          aria-label="Interactive 2026 Annual Impact Report showing 229,000+ youth impacted across 129 countries and territories"
        />
      </div>

      {/* Attribution and actions */}
      <div className="mt-6 rounded-lg bg-gray-50 p-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-1 font-semibold text-[#405862]">
              {REPORT_2026.title} ({REPORT_2026.edition})
            </h3>
            <p className="text-sm text-gray-600">
              Created by <span className="font-semibold">Adil Mukhi</span>, Founder and Executive Director
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <a
              href={REPORT_2026.canvaViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-[#405862] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#334852] hover:shadow-md"
            >
              <ExternalLink className="h-4 w-4" /> View on Canva
            </a>
            <a
              href="/2026.pdf"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-md border border-[#405862] px-4 py-2 text-sm font-medium text-[#405862] transition-all hover:bg-[#405862]/5"
            >
              <Download className="h-4 w-4" /> PDF
            </a>
            <button
              type="button"
              onClick={share}
              className="flex items-center gap-2 rounded-md bg-[#4ecdc4] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#3db8b8] hover:shadow-md"
            >
              <Share2 className="h-4 w-4" /> Share Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
