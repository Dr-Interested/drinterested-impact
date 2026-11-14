"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Download, ExternalLink, Share2 } from "lucide-react"
import { REPORT_2026, reportPageImage, reportThumbImage } from "@/lib/report-data"

const PAGES = Array.from({ length: REPORT_2026.pageCount }, (_, i) => i + 1)

export default function ReportViewer({ shareUrl }: { shareUrl: string }) {
  const [page, setPage] = useState(1)
  const stripRef = useRef<HTMLDivElement>(null)

  const go = useCallback((n: number) => {
    setPage(Math.min(Math.max(n, 1), REPORT_2026.pageCount))
  }, [])

  // Keep the active thumbnail in view as the reader pages through.
  useEffect(() => {
    const el = stripRef.current?.querySelector<HTMLElement>(`[data-page="${page}"]`)
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" })
  }, [page])

  // Preload the next page so flipping forward feels instant.
  useEffect(() => {
    if (page < REPORT_2026.pageCount) {
      const img = new window.Image()
      img.src = reportPageImage(page + 1)
    }
  }, [page])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(page + 1)
    if (e.key === "ArrowLeft") go(page - 1)
  }

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
    <div>
      <div
        className="relative mx-auto max-w-3xl rounded-xl border border-gray-200 bg-[#e5ded6] shadow-[0_4px_20px_0_rgba(63,69,81,0.15)] outline-none focus-visible:ring-2 focus-visible:ring-[#4ecdc4]"
        tabIndex={0}
        onKeyDown={onKeyDown}
        role="region"
        aria-roledescription="report viewer"
        aria-label={`${REPORT_2026.title}, page ${page} of ${REPORT_2026.pageCount}. Use the left and right arrow keys to turn pages.`}
      >
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "612 / 792" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={page}
            src={reportPageImage(page)}
            alt={`${REPORT_2026.title}, ${REPORT_2026.edition}, page ${page}`}
            className="absolute inset-0 h-full w-full object-contain"
            loading={page === 1 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>

        <button
          type="button"
          onClick={() => go(page - 1)}
          disabled={page === 1}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#405862] shadow-md transition hover:bg-white disabled:opacity-30 md:-left-14"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => go(page + 1)}
          disabled={page === REPORT_2026.pageCount}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#405862] shadow-md transition hover:bg-white disabled:opacity-30 md:-right-14"
          aria-label="Next page"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <p className="mt-3 text-center text-sm text-gray-600" aria-live="polite">
        Page {page} of {REPORT_2026.pageCount}
      </p>

      {/* Thumbnail strip */}
      <div ref={stripRef} className="mx-auto mt-4 flex max-w-5xl gap-3 overflow-x-auto px-1 pb-3" aria-label="Report pages">
        {PAGES.map((n) => (
          <button
            key={n}
            type="button"
            data-page={n}
            onClick={() => go(n)}
            className={`relative w-16 shrink-0 overflow-hidden rounded border-2 transition md:w-20 ${
              n === page ? "border-[#4ecdc4] shadow-md" : "border-transparent opacity-70 hover:opacity-100"
            }`}
            style={{ aspectRatio: "612 / 792" }}
            aria-label={`Go to page ${n}`}
            aria-current={n === page ? "page" : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={reportThumbImage(n)} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {/* Attribution and actions */}
      <div className="mx-auto mt-6 max-w-5xl rounded-lg bg-gray-50 p-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-1 font-semibold text-[#405862]">
              {REPORT_2026.title} ({REPORT_2026.edition})
            </h3>
            <p className="text-sm text-gray-600">
              Created by <span className="font-semibold">Adil Mukhi</span>, Founder and Executive Director. The PDF keeps
              every clickable link to policies, media features and sign up pages.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <a
              href="/2026.pdf"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-md bg-[#405862] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#334852] hover:shadow-md"
            >
              <ExternalLink className="h-4 w-4" /> Open PDF
            </a>
            <a
              href={REPORT_2026.pdfPublicPath}
              download="Dr-Interested-2026-Annual-Impact-Report-Advance-Copy.pdf"
              className="flex items-center gap-2 rounded-md border border-[#405862] px-4 py-2 text-sm font-medium text-[#405862] transition-all hover:bg-[#405862]/5"
            >
              <Download className="h-4 w-4" /> Download
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
