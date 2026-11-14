import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import SeoSchema from "@/components/seo-schema"
import { generateOrganizationSchema } from "@/lib/seo-utils"

const inter = Inter({ subsets: ["latin"] })

const OG_IMAGE = "https://impact.drinterested.org/impact-report-2026-preview.png"
const REPORT_PUBLISHED = "2026-11-14T00:00:00.000Z"
const REPORT_URL = "https://impact.drinterested.org/2026/annual"

export const metadata: Metadata = {
  title: {
    default: "Dr. Interested 2026 Annual Impact Report (Advance Copy) | Youth Led Impact",
    template: "%s | Dr. Interested Impact Report",
  },
  description:
    "Read the Advance Copy of Dr. Interested's 2026 Annual Impact Report: 229,000+ youth impacted in 2026 across 129 countries and territories, with 328 executives, 2,200 members, 600 volunteers and 1,000 mentor hours. Since 2025, we have impacted 389,000+ youth with 414 unique executives.",
  keywords: [
    "Dr. Interested 2026 annual impact report",
    "Dr. Interested 2026 impact report advance copy",
    "Dr. Interested 2025 annual impact report",
    "healthcare education impact assessment",
    "high school medical mentorship results",
    "student healthcare career development outcomes",
    "medical education program effectiveness",
    "healthcare volunteer impact metrics",
    "student-led healthcare organization results",
    "healthcare education nonprofit impact",
    "healthcare workforce development impact",
    "healthcare education community impact",
    "328 executives Dr. Interested",
    "2200 members Dr. Interested",
    "129 countries youth impact",
    "229000 youth impacted 2026",
    "389000 youth impacted since 2025",
    "youth in policy and career development",
  ],
  authors: [
    { name: "Adil Mukhi", url: "https://www.drinterested.org/members" },
    { name: "Dr. Interested Team", url: "https://www.drinterested.org/members" },
  ],
  creator: "Adil Mukhi - Founder and Executive Director, Dr. Interested",
  publisher: "Dr. Interested",
  category: "Education",
  classification: "Healthcare Education Impact Report",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://impact.drinterested.org",
    title: "Dr. Interested 2026 Annual Impact Report: Advance Copy",
    description:
      "229,000+ youth impacted in 2026 across 129 countries and territories, and 389,000+ since 2025. Read the Advance Copy of Dr. Interested's 2026 Annual Impact Report.",
    siteName: "Dr. Interested Impact Report",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Cover of the Advance Copy of the Dr. Interested 2026 Annual Impact Report",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrInterested",
    creator: "@DrInterested",
    title: "Dr. Interested 2026 Annual Impact Report (Advance Copy)",
    description:
      "Our 2026 Annual Impact Report Advance Copy is here! 229,000+ youth impacted | 129 countries | 328 executives | 2,200 members | 389,000+ since 2025 #ImpactReport #YouthLed",
    images: [
      {
        url: OG_IMAGE,
        alt: "Dr. Interested 2026 Annual Impact Report (Advance Copy)",
        width: 1200,
        height: 1200,
      },
    ],
  },
  alternates: {
    canonical: "https://impact.drinterested.org",
    languages: {
      "en-US": "https://impact.drinterested.org",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
  manifest: "/manifest.webmanifest",
  generator: "Next.js",
  applicationName: "Dr. Interested Impact Reports",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://impact.drinterested.org"),
  other: {
    "msapplication-TileColor": "#405862",
    "msapplication-TileImage": "/android-chrome-512x512.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#405862" },
    { media: "(prefers-color-scheme: dark)", color: "#4ecdc4" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

const impactReportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  "@id": "https://impact.drinterested.org/#report",
  name: "Dr. Interested 2026 Annual Impact Report",
  headline: "Dr. Interested 2026 Annual Impact Report (Advance Copy)",
  version: "Advance Copy",
  description:
    "The Advance Copy of Dr. Interested's 2026 Annual Impact Report, with data as of November 12, 2026: 229,000+ youth impacted, 129 countries and territories, 328 executives, 2,200 members, 600 volunteers, 25 events and 1,000 mentor hours. Combined with 2025: 389,000+ youth impacted and 414 unique executives.",
  url: REPORT_URL,
  datePublished: REPORT_PUBLISHED,
  dateModified: REPORT_PUBLISHED,
  inLanguage: "en-US",
  image: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    width: 1200,
    height: 1200,
    caption: "Dr. Interested 2026 Annual Impact Report (Advance Copy) Cover",
  },
  author: {
    "@type": "Person",
    name: "Adil Mukhi",
    jobTitle: "Founder and Executive Director",
    url: "https://www.drinterested.org/members",
    worksFor: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: "https://www.drinterested.org",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://www.drinterested.org",
    logo: {
      "@type": "ImageObject",
      url: "https://www.drinterested.org/android-chrome-512x512.png",
    },
  },
  about: [
    {
      "@type": "Thing",
      name: "Healthcare Education Impact",
      description: "Assessment of educational programs designed to prepare high school students for healthcare careers",
    },
    {
      "@type": "Thing",
      name: "Student Mentorship Programs",
      description: "Evaluation of mentorship initiatives connecting students with healthcare professionals",
    },
    {
      "@type": "Thing",
      name: "Medical Career Development",
      description: "Analysis of career preparation and guidance programs for aspiring healthcare professionals",
    },
  ],
  keywords:
    "healthcare education, student mentorship, medical careers, impact assessment, educational outcomes, healthcare workforce development, student success metrics",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Dr. Interested",
    description:
      "Student-led organization empowering high school students to explore healthcare careers through education, mentorship, and hands-on experiences",
    url: "https://www.drinterested.org",
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Dr. Interested Impact Report",
    url: "https://impact.drinterested.org",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: REPORT_URL,
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Dr. Interested",
      item: "https://www.drinterested.org",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Impact Reports",
      item: "https://impact.drinterested.org",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "2026 Annual Report",
      item: REPORT_URL,
    },
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://impact.drinterested.org/#website",
  url: "https://impact.drinterested.org",
  name: "Dr. Interested Impact Reports",
  description:
    "Dr. Interested's impact reports: 389,000+ youth impacted since 2025 across 129 countries and territories, with 414 unique executives and 1,500 volunteers.",
  publisher: {
    "@type": "Organization",
    name: "Dr. Interested",
    url: "https://www.drinterested.org",
  },
  inLanguage: "en-US",
  mainEntity: {
    "@type": "Report",
    name: "Dr. Interested 2026 Annual Impact Report",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Dr. Interested's 2026 Annual Impact Report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 2026 Annual Impact Report, released as an Advance Copy in November 2026, covers Dr. Interested's year across its three pillars: career development, youth in policy, and community. With data as of November 12, 2026, it reports 229,000+ youth impacted across 129 countries and territories, 25 events, 1,000 mentor hours, and a net surplus of $1,546.34 CAD.",
      },
    },
    {
      "@type": "Question",
      name: "How many individuals has Dr. Interested impacted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Across 2025 and 2026 combined, Dr. Interested has impacted 389,000+ youth (160,000+ in 2025 and 229,000+ in 2026). In 2026 our community included 328 executives, 2,200 members, and 600 volunteers across 129 countries and territories, with 414 unique executives across both years.",
      },
    },
    {
      "@type": "Question",
      name: "What programs does Dr. Interested offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Interested offers healthcare career exploration programs, medical research mentorship, volunteer opportunities, internship programs, and educational workshops designed to prepare high school students for healthcare careers.",
      },
    },
    {
      "@type": "Question",
      name: "How can students get involved with Dr. Interested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students can join Dr. Interested by visiting drinterested.org, joining our Discord community, or contacting us at admin@drinterested.org to learn about current opportunities and programs.",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="author" content="Dr. Interested Team" />
        <meta name="copyright" content="Dr. Interested" />

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6MYCRFPPGE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6MYCRFPPGE');
          `}
        </Script>

        {/* Structured data */}
        <SeoSchema id="impact-report-schema" schema={impactReportSchema} />
        <SeoSchema id="organization-schema" schema={generateOrganizationSchema()} />
        <SeoSchema id="breadcrumb-schema" schema={breadcrumbSchema} />
        <SeoSchema id="website-schema" schema={websiteSchema} />
        <SeoSchema id="faq-schema" schema={faqSchema} />

        {/* Preconnect / DNS-prefetch for the resources the report pages load */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.drinterested.org" />

        {/* RSS Feed (main site) */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Dr. Interested Updates"
          href="https://www.drinterested.org/rss.xml"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1" role="main">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
