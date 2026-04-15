export const cities = [
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { slug: "delhi", name: "Delhi", state: "Delhi" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu" },
  { slug: "pune", name: "Pune", state: "Maharashtra" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
  { slug: "gurgaon", name: "Gurgaon", state: "Haryana" },
  { slug: "kochi", name: "Kochi", state: "Kerala" },
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh" },
  { slug: "chandigarh", name: "Chandigarh", state: "Punjab" },
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra" },
  { slug: "vizag", name: "Visakhapatnam", state: "Andhra Pradesh" },
  { slug: "mysore", name: "Mysore", state: "Karnataka" },
  { slug: "surat", name: "Surat", state: "Gujarat" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh" },
  { slug: "patna", name: "Patna", state: "Bihar" },
]

export const services = [
  {
    slug: "posh-compliance",
    name: "POSH Compliance",
    shortName: "POSH Compliance",
    pageTitle: "POSH Compliance and Training",
    description: "End-to-end POSH Act compliance with ICC formation, policy drafting, and mandatory training for companies in",
    keywords: ["posh compliance", "posh training", "posh act", "icc formation", "posh consultant"],
    faq: [
      { q: "Is POSH compliance mandatory?", a: "Yes. The POSH Act 2013 applies to all organisations with 10 or more employees. Non-compliance attracts fines up to Rs 50,000." },
      { q: "What is the ICC?", a: "The Internal Complaints Committee is mandatory under the POSH Act. It must have at least 4 members including a senior female presiding officer and an external NGO member." },
      { q: "How often is POSH training needed?", a: "POSH training must be conducted regularly. Most organisations do annual training. Maslo recommends training all new joiners at onboarding." },
      { q: "What if our ICC is not trained?", a: "Untrained ICC members are a legal liability. An untrained ICC handling complaints incorrectly exposes the organisation to legal challenge. Maslo trains all ICC members." },
      { q: "Does POSH apply to startups?", a: "Yes. The law applies from the moment you have 10 employees. Maslo offers a startup POSH package covering policy and ICC formation." },
    ],
    ctaText: "Book a free POSH audit",
    priority: 1,
  },
  {
    slug: "labour-law-compliance",
    name: "Labour Law Compliance",
    shortName: "Labour Law Compliance",
    pageTitle: "Labour Law Compliance and New Labour Codes",
    description: "End-to-end labour law compliance covering 18 statutory categories and all 4 new labour codes powered by Compliance360 for companies in",
    keywords: ["labour law compliance", "new labour codes", "epf compliance", "statutory compliance", "hr compliance"],
    faq: [
      { q: "What are the 4 new labour codes?", a: "India consolidated 44 labour laws into 4 codes: Code on Wages 2019, Code on Social Security 2020, Code on Industrial Relations 2020, and Occupational Safety Code 2020." },
      { q: "Does the Code on Wages affect our salary structure?", a: "Yes. The Code on Wages requires wages to be at least 50 percent of total CTC. Companies must restructure salary frameworks before enforcement." },
      { q: "What is Compliance360?", a: "Compliance360 is Maslo proprietary platform covering 18 statutory categories including EPF, ESI, POSH, and Professional Tax with an automated audit engine." },
      { q: "How do I check my compliance status?", a: "Run a free compliance audit via Maslo. The Compliance360 platform identifies every gap and generates a prioritised action plan." },
      { q: "Is Professional Tax the same in all states?", a: "No. Professional Tax varies by state with different slabs and due dates. Compliance360 maps all state-wise obligations automatically." },
    ],
    ctaText: "Get a free compliance check",
    priority: 1,
  },
  {
    slug: "hr-recruitment",
    name: "Recruitment and Staffing",
    shortName: "IT Recruitment",
    pageTitle: "IT Recruitment and Staffing Services",
    description: "AI-powered IT recruitment, contract staffing, executive search, and campus hiring for companies in",
    keywords: ["it recruitment", "staffing agency", "permanent placement", "contract staffing", "executive search"],
    faq: [
      { q: "What is AI Interviewer?", a: "AI Interviewer conducts structured domain interviews automatically and generates evaluation reports. It eliminates 80 percent of manual screening time." },
      { q: "Does Maslo do contract staffing?", a: "Yes. Maslo covers permanent placement, contract staffing, executive search, campus hiring, and volume hiring for large mandates." },
      { q: "Can global companies hire from India via Maslo?", a: "Yes. Maslo offers remote staffing, GCC setup, and Build-Operate-Transfer models for companies in the US, UK, and Middle East." },
      { q: "What roles does Maslo recruit for?", a: "Maslo recruits software engineers, product managers, data engineers, DevOps engineers, QA engineers, tech leads, and senior leadership." },
      { q: "How fast is the shortlist?", a: "Maslo delivers an AI-screened shortlist within 48 to 72 hours of requirement sign-off for most roles." },
    ],
    ctaText: "Share your hiring requirement",
    priority: 2,
  },
  {
    slug: "learning-development",
    name: "Learning and Development",
    shortName: "L and D Services",
    pageTitle: "Corporate Learning and Development Services",
    description: "eLearning development, LMS platform, instructor-led training, and managed learning services for companies in",
    keywords: ["learning development", "elearning development", "corporate training", "lms platform", "instructor led training"],
    faq: [
      { q: "Can Maslo convert our training content to eLearning?", a: "Yes. Maslo converts PowerPoint decks, SOPs, and manuals into SCORM-compliant eLearning modules with assessments and certificates." },
      { q: "Do you provide an LMS?", a: "Yes. Maslo provides its own LMS platform for hosting modules, tracking completion, and generating compliance reports." },
      { q: "What instructor-led training does Maslo deliver?", a: "Maslo delivers domain training, soft skills, HR and people leader training, and behavioural training covering emotional intelligence." },
      { q: "What is the managed L and D service?", a: "Maslo runs your entire learning function including module development, LMS hosting, enrolments, ILT delivery, and monthly reports." },
      { q: "What is Languapro?", a: "Languapro is Maslo AI communication assessment platform measuring LSRW skills before and after training to prove ROI." },
    ],
    ctaText: "Discuss your training needs",
    priority: 2,
  },
  {
    slug: "hr-consulting",
    name: "HR Consulting",
    shortName: "HR Consulting",
    pageTitle: "HR Consulting Services",
    description: "Strategic HR consulting covering policies, audits, talent management, and AI-powered HR tools for companies in",
    keywords: ["hr consulting", "hr consultant", "hr advisory", "hr audit", "hr policy"],
    faq: [
      { q: "What does a Maslo HR consulting engagement cover?", a: "Maslo covers HR audits, policy design, POSH and labour law compliance, talent management, performance management, and learning and development." },
      { q: "Is Maslo only for large companies?", a: "No. Maslo works with startups from 10 employees, SMEs, and large enterprises. Engagements scale to your size." },
      { q: "Does Maslo offer HR outsourcing?", a: "Yes. Maslo provides targeted HR outsourcing for compliance, L and D, and recruitment. Full outsourcing is also available." },
      { q: "How does Maslo use AI?", a: "Maslo has 5 AI products: Languapro, ER Studio, Compliance360, Campus Career, and AI Interviewer. All are deployed in client engagements." },
      { q: "Can Maslo build our HR function from scratch?", a: "Yes. Maslo builds foundational HR infrastructure including employment agreements, policies, compliance framework, and onboarding process." },
    ],
    ctaText: "Book a free HR consultation",
    priority: 2,
  },
]

export function generateStaticParams() {
  const params = []
  for (const service of services) {
    for (const city of cities) {
      params.push({ service: service.slug, city: city.slug })
    }
  }
  return params
}

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug)
}

export function getCityBySlug(slug) {
  return cities.find(c => c.slug === slug)
}
