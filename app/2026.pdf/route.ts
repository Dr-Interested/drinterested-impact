import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  try {
    // Read the PDF file from the public directory
    const pdfPath = path.join(process.cwd(), "public", "Dr. Interested 2026 Annual Impact Report.pdf")
    const pdfBuffer = fs.readFileSync(pdfPath)

    // Return the PDF with proper headers for Google indexing
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Dr-Interested-2026-Annual-Impact-Report-Advance-Copy.pdf"',
        "Cache-Control": "public, max-age=86400, must-revalidate",
        "X-Robots-Tag": "index, follow",
        // Additional metadata headers for better SEO
        "Link": '<https://impact.drinterested.org/2026/annual>; rel="alternate"; type="text/html"',
      },
    })
  } catch (error) {
    console.error("Error serving PDF:", error)
    return new NextResponse("PDF not found", { status: 404 })
  }
}

// Metadata for the PDF route
export const metadata = {
  title: "Dr. Interested 2026 Annual Impact Report PDF (Advance Copy)",
  description:
    "Download the Advance Copy of Dr. Interested's 2026 Annual Impact Report PDF: 229,000+ youth impacted across 129 countries and territories, with 328 executives and 2,200 members.",
}
