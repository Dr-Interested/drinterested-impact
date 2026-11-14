// Single source of truth for the numbers shown on the impact report site.
// Figures come straight from the Advance Copy of the Dr. Interested 2026 Annual Impact Report
// (section 11, "All Time Impact", and the 2026 sections). Update here and every page follows.

export const SITE_URL = "https://impact.drinterested.org"

export const REPORT_2026 = {
  title: "Dr. Interested 2026 Annual Impact Report",
  edition: "Advance Copy",
  canonical: `${SITE_URL}/2026/annual`,
  pdfUrl: `${SITE_URL}/2026.pdf`,
  pdfPublicPath: "/Dr. Interested 2026 Annual Impact Report.pdf",
  ogImage: `${SITE_URL}/impact-report-2026-preview.png`,
  published: "2026-11-14T00:00:00.000Z",
  publishedLabel: "November 2026",
  dataAsOf: "November 12, 2026",
  periodLabel: "January 1, 2026 to November 12, 2026",
  pageCount: 22,
  canvaEmbedUrl: "https://www.canva.com/design/DAHXoe5vcgM/rSqKoWowk0KEwWjM1peaow/view?embed",
  canvaViewUrl:
    "https://www.canva.com/design/DAHXoe5vcgM/rSqKoWowk0KEwWjM1peaow/view?utm_content=DAHXoe5vcgM&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
  tagline: "A year of youth led change & impact.",
}

export type Stat = {
  label: string
  value: string
  unit: string
  breakdown?: string
}

export type StatGroup = {
  title: string
  stats: Stat[]
}

/** Headline figures for 2026 alone. */
export const STATS_2026 = {
  executives: "328",
  members: "2,200",
  countries: "129",
  events: "25",
  youthImpacted: "229,000+",
  youthImpactedShort: "229K+",
  volunteers: "600",
  volunteerHours: "6,800",
  mentorHours: "1,000",
  followers: "17,300",
  posts: "799",
  impressions: "7,340,361",
  revenue: "$55,030.01 CAD",
  expenditure: "$53,483.67 CAD",
  netIncome: "Net surplus of $1,546.34 CAD",
  executiveCountries: "16",
  teamOriginCountries: "31",
}

/** Combined 2025 and 2026 figures, exactly as printed in the report's All Time Impact page. */
export const COMBINED = {
  executives: "414",
  members: "2,200",
  countries: "129",
  events: "45+",
  youthImpacted: "389,000+",
  youthImpactedShort: "389K+",
  volunteers: "1,500",
  volunteerHours: "~7,500",
  mentorHours: "1,400+",
  followers: "29,469",
  posts: "1,551",
  impressions: "11,053,767",
  impressionsShort: "11M+",
  revenue: "$60,182.70 CAD",
  expenditure: "$58,717.37 CAD",
  netIncome: "Net surplus of $1,465.33 CAD",
}

export const ALL_TIME_GROUPS: StatGroup[] = [
  {
    title: "People",
    stats: [
      { label: "Executives", value: COMBINED.executives, unit: "unique executives", breakdown: "2025: 367 | 2026: 328 | Both years: 281" },
      { label: "Members", value: COMBINED.members, unit: "members", breakdown: "2025: 1,400 | 2026: 2,200" },
      { label: "Countries", value: COMBINED.countries, unit: "countries and territories", breakdown: "2025: 106 | 2026: 129" },
      { label: "Volunteers", value: COMBINED.volunteers, unit: "volunteers", breakdown: "2025: 900 | 2026: 600" },
      { label: "Volunteer hours", value: COMBINED.volunteerHours, unit: "volunteer hours", breakdown: "2025: 652 | 2026: 6,800" },
    ],
  },
  {
    title: "Impact",
    stats: [
      { label: "Events", value: COMBINED.events, unit: "events", breakdown: "2025: 20+ | 2026: 25" },
      { label: "Youth impacted", value: COMBINED.youthImpacted, unit: "youth impacted", breakdown: "2025: 160,000+ | 2026: 229,000+" },
      { label: "Mentor hours", value: COMBINED.mentorHours, unit: "mentor hours", breakdown: "2025: 400+ | 2026: 1,000" },
    ],
  },
  {
    title: "Reach",
    stats: [
      { label: "Followers", value: COMBINED.followers, unit: "followers across both reports", breakdown: "2025: 12,169 | 2026: 17,300" },
      { label: "Posts", value: COMBINED.posts, unit: "posts", breakdown: "2025: 752 | 2026: 799" },
      { label: "Impressions", value: COMBINED.impressions, unit: "impressions", breakdown: "2025: 3,713,406 | 2026: 7,340,361" },
    ],
  },
  {
    title: "Finances",
    stats: [
      { label: "Revenue", value: COMBINED.revenue, unit: "revenue", breakdown: "2025: $5,152.69 | 2026: $55,030.01" },
      { label: "Expenditure", value: COMBINED.expenditure, unit: "expenditure", breakdown: "2025: $5,233.70 | 2026: $53,483.67" },
      {
        label: "Operating income",
        value: "$1,465.33 CAD",
        unit: "net surplus",
        breakdown: "2025: Net loss of $81.01 | 2026: Net surplus of $1,546.34",
      },
    ],
  },
]

export type Program = {
  name: string
  when: string
  summary: string
  figures: string[]
}

/** 2026 programs and initiatives, from section 6 of the report. */
export const PROGRAMS_2026: Program[] = [
  {
    name: "Research Proposal Competition",
    when: "October to November 2026",
    summary:
      "Youth from around the world pitched original health and science research ideas, guided by 10 medical student advisors. The top 5 received mentorship, publication support and DOI registration.",
    figures: ["400 submissions", "30+ countries", "600 youth engaged", "90K impressions"],
  },
  {
    name: "Office Hours Initiative",
    when: "May 2025 to December 2026",
    summary:
      "Recurring open sessions where youth get mentorship, guidance and community support in a welcoming, low barrier space.",
    figures: ["13 mentors", "2,200+ youth with direct access", "60K program impressions"],
  },
  {
    name: "The Dr. Interested Blog",
    when: "January to December 2026",
    summary: "Youth educating youth through articles on health, leadership, careers and skill building.",
    figures: ["55 articles", "18 topics", "130K youth impacted", "190K reached"],
  },
  {
    name: "The Dr. Interested Podcast",
    when: "January to December 2026",
    summary: "Conversations with youth leaders, changemakers and professionals about health, leadership and the future.",
    figures: ["39 episodes", "40+ volunteers", "98K youth impacted", "140K reached"],
  },
  {
    name: "MedExplore Conference",
    when: "August 16, 2026",
    summary:
      "A full day healthcare careers conference at the University of Toronto Mississauga, supported by 23 letters and certificates including the Premier of Ontario.",
    figures: ["100+ youth impacted", "300K reached", "23 speakers and guests", "17 volunteers"],
  },
  {
    name: "Explore 3 Case Competition",
    when: "October 25, 2026",
    summary:
      "High school teams tackled real world problems across medicine, law and finance, presenting to judges at Humber Polytechnic Downtown.",
    figures: ["40 youth impacted", "183K reached"],
  },
  {
    name: "Code Blue Planet",
    when: "June 7, 2026",
    summary:
      "Part of Toronto Climate Week: students joined Indigenous Elders, Knowledge Holders and health experts to explore climate resilient healthcare.",
    figures: ["200 youth impacted", "70K reached"],
  },
  {
    name: "Simmon Chang Chess (Against Cancer) Club",
    when: "November 2025 to present",
    summary:
      "Chess tournaments raising funds for the Pediatric Cancer Research Fund, where Dr. Interested became a top 10 fundraiser within a year.",
    figures: ["30 youth impacted", "14K reached"],
  },
]
