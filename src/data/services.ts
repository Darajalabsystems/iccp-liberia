import { LucideIcon } from "lucide-react"

// Service Categories
export type ServiceCategory =
    | "identity"
    | "passport-travel"
    | "taxes-money"
    | "business"
    | "land-property"
    | "courts-justice"
    | "driving-vehicles"
    | "health"
    | "education"
    | "utilities"
    | "social-benefits"
    | "diaspora-county"

export interface Service {
    id: string
    name: string
    shortName: string
    category: ServiceCategory
    description: string
    featured?: boolean
    requiresAuth?: boolean
    estimatedTime?: string
    fee?: number | string
    requiredDocuments?: string[]
    ministryId?: string
}

export const SERVICE_CATEGORIES: Record<ServiceCategory, { name: string; description: string; icon: string }> = {
    "identity": {
        name: "My Identity",
        description: "National ID, birth certificates, and identity documents",
        icon: "IdCard"
    },
    "passport-travel": {
        name: "Passport & Travel",
        description: "New passports, renewals, and travel documents",
        icon: "Plane"
    },
    "taxes-money": {
        name: "Taxes & Money",
        description: "File taxes, pay fees, get clearances",
        icon: "DollarSign"
    },
    "business": {
        name: "Start or Grow Business",
        description: "Register companies, get licenses, work permits",
        icon: "Briefcase"
    },
    "land-property": {
        name: "Land & House",
        description: "Search titles, transfer land register deeds",
        icon: "Home"
    },
    "courts-justice": {
        name: "Courts & Justice",
        description: "File cases, police clearance, court fees",
        icon: "Scale"
    },
    "driving-vehicles": {
        name: "Driving & Vehicles",
        description: "Driver license, vehicle registration, road tax",
        icon: "Car"
    },
    "health": {
        name: "Health",
        description: "Health cards, doctor appointments, vaccination records",
        icon: "Heart"
    },
    "education": {
        name: "Education",
        description: "Verify certificates, scholarships, school fees",
        icon: "GraduationCap"
    },
    "utilities": {
        name: "Electricity & Water",
        description: "Pay LEC bills, water bills, report faults",
        icon: "Zap"
    },
    "social-benefits": {
        name: "Social Help",
        description: "Cash transfers, disability benefits, elderly support",
        icon: "HandHeart"
    },
    "diaspora-county": {
        name: "Diaspora & County",
        description: "Dual citizenship, voting abroad, county services",
        icon: "Globe"
    }
}

export const ALL_SERVICES: Service[] = [
    // MINISTRY OF FINANCE & DEVELOPMENT PLANNING (finance)
    {
        id: "tax-file-return",
        name: "Tax Filing",
        shortName: "Tax Filing",
        category: "taxes-money",
        description: "Submit annual income tax return",
        featured: true,
        estimatedTime: "Instant processing",
        fee: "Varies",
        requiredDocuments: ["Income Statements", "Previous Year Return"],
        ministryId: "finance"
    },
    {
        id: "business-register",
        name: "Business Registration",
        shortName: "Register Business",
        category: "business",
        description: "Register sole proprietorship, partnership, or corporation",
        featured: true,
        estimatedTime: "2-3 weeks",
        fee: 2500,
        requiredDocuments: ["Business Plan", "Owner ID", "Proof of Address"],
        ministryId: "finance"
    },
    {
        id: "revenue-services",
        name: "Revenue Services",
        shortName: "Revenue",
        category: "taxes-money",
        description: "General revenue services and inquiries",
        estimatedTime: "1-2 days",
        fee: "Free",
        ministryId: "finance"
    },
    {
        id: "budget-info",
        name: "Budget Information",
        shortName: "Budget Info",
        category: "taxes-money",
        description: "Access national budget information and reports",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "finance"
    },

    // MINISTRY OF FOREIGN AFFAIRS (foreign-affairs)
    {
        id: "passport-new",
        name: "Passport Application",
        shortName: "New Passport",
        category: "passport-travel",
        description: "Apply for your first Liberian passport",
        featured: true,
        estimatedTime: "3-6 weeks",
        fee: 5000,
        requiredDocuments: ["National ID", "Birth Certificate", "Passport Photos"],
        ministryId: "foreign-affairs"
    },
    {
        id: "visa-assistance",
        name: "Visa Services",
        shortName: "Visa Services",
        category: "passport-travel",
        description: "Visa application assistance and information",
        estimatedTime: "Varies",
        fee: "Free consultation",
        ministryId: "foreign-affairs"
    },
    {
        id: "travel-permit",
        name: "Travel Documents",
        shortName: "Travel Docs",
        category: "passport-travel",
        description: "Temporary travel documents and permits",
        estimatedTime: "1 week",
        fee: 2500,
        ministryId: "foreign-affairs"
    },
    {
        id: "consular-assistance",
        name: "Consular Assistance",
        shortName: "Consular Help",
        category: "passport-travel",
        description: "Assistance for Liberians abroad",
        estimatedTime: "Varies",
        fee: "Free",
        ministryId: "foreign-affairs"
    },

    // MINISTRY OF JUSTICE (justice)
    {
        id: "legal-aid",
        name: "Legal Aid",
        shortName: "Legal Aid",
        category: "courts-justice",
        description: "Free legal assistance for qualifying individuals",
        estimatedTime: "1-2 weeks",
        fee: "Free",
        ministryId: "justice"
    },
    {
        id: "court-records",
        name: "Court Records",
        shortName: "Court Records",
        category: "courts-justice",
        description: "Access public court records and transcripts",
        estimatedTime: "2-4 weeks",
        fee: 1000,
        ministryId: "justice"
    },
    {
        id: "notary-service",
        name: "Notary Services",
        shortName: "Notary",
        category: "courts-justice",
        description: "Official document notarization",
        estimatedTime: "Same day",
        fee: 100,
        ministryId: "justice"
    },
    {
        id: "criminal-record-check",
        name: "Criminal Records Check",
        shortName: "Record Check",
        category: "courts-justice",
        description: "Police clearance and criminal background check",
        estimatedTime: "1-2 weeks",
        fee: 500,
        requiredDocuments: ["National ID", "Passport Photo"],
        ministryId: "justice"
    },

    // MINISTRY OF HEALTH (health)
    {
        id: "health-insurance",
        name: "Health Insurance",
        shortName: "Health Ins",
        category: "health",
        description: "National health insurance enrollment",
        estimatedTime: "1-2 weeks",
        fee: "Varies",
        ministryId: "health"
    },
    {
        id: "medical-records",
        name: "Medical Records",
        shortName: "Med Records",
        category: "health",
        description: "Access your personal medical history",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "health"
    },
    {
        id: "vaccination-certificate",
        name: "Vaccination Certificate",
        shortName: "Vaccine Cert",
        category: "health",
        description: "Download official vaccination certificates",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "health"
    },
    {
        id: "health-facilities",
        name: "Health Facilities",
        shortName: "Facilities",
        category: "health",
        description: "Find nearby hospitals and clinics",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "health"
    },

    // MINISTRY OF EDUCATION (education)
    {
        id: "school-enrollment",
        name: "School Enrollment",
        shortName: "Enrollment",
        category: "education",
        description: "Register for public school admission",
        estimatedTime: "2-3 weeks",
        fee: "Free",
        ministryId: "education"
    },
    {
        id: "certificate-verification",
        name: "Certificate Verification",
        shortName: "Verify Cert",
        category: "education",
        description: "Authenticate educational certificates",
        estimatedTime: "3-5 days",
        fee: 500,
        ministryId: "education"
    },
    {
        id: "scholarship-applications",
        name: "Scholarship Applications",
        shortName: "Scholarships",
        category: "education",
        description: "Apply for government scholarships",
        estimatedTime: "Varies",
        fee: "Free",
        requiredDocuments: ["Transcript", "Admission Letter"],
        ministryId: "education"
    },
    {
        id: "education-records",
        name: "Education Records",
        shortName: "Edu Records",
        category: "education",
        description: "Request transcripts and academic records",
        estimatedTime: "1-2 weeks",
        fee: 300,
        ministryId: "education"
    },

    // MINISTRY OF TRANSPORT (transport)
    {
        id: "drivers-license",
        name: "Driver's License",
        shortName: "License",
        category: "driving-vehicles",
        description: "Apply for or renew driver's license",
        estimatedTime: "2-3 weeks",
        fee: 1500,
        requiredDocuments: ["National ID", "Medical Cert", "Photos"],
        ministryId: "transport"
    },
    {
        id: "vehicle-registration",
        name: "Vehicle Registration",
        shortName: "Registration",
        category: "driving-vehicles",
        description: "Register new or used vehicles",
        estimatedTime: "1-2 weeks",
        fee: 2000,
        ministryId: "transport"
    },
    {
        id: "road-permits",
        name: "Road Permits",
        shortName: "Road Permits",
        category: "driving-vehicles",
        description: "Commercial and special transport permits",
        estimatedTime: "3-5 days",
        fee: "Varies",
        ministryId: "transport"
    },
    {
        id: "transport-reports",
        name: "Transport Reports",
        shortName: "Reports",
        category: "driving-vehicles",
        description: "Accident reports and transport data",
        estimatedTime: "1 week",
        fee: 500,
        ministryId: "transport"
    },

    // MINISTRY OF INTERNAL AFFAIRS (interior)
    {
        id: "national-id-new",
        name: "National ID",
        shortName: "National ID",
        category: "identity",
        description: "Apply for National Identification Card",
        featured: true,
        estimatedTime: "2-3 weeks",
        fee: 500,
        requiredDocuments: ["Birth Certificate", "Photo", "Proof of Address"],
        ministryId: "interior"
    },
    {
        id: "immigration-services",
        name: "Immigration Services",
        shortName: "Immigration",
        category: "identity",
        description: "Visa extensions and immigration matters",
        estimatedTime: "1-2 weeks",
        fee: "Varies",
        ministryId: "interior"
    },
    {
        id: "residence-permits",
        name: "Residence Permits",
        shortName: "Residence",
        category: "identity",
        description: "Apply for temporary or permanent residence",
        estimatedTime: "4-6 weeks",
        fee: 5000,
        ministryId: "interior"
    },
    {
        id: "civil-registry",
        name: "Civil Registry",
        shortName: "Registry",
        category: "identity",
        description: "Birth and death registration services",
        estimatedTime: "1-2 weeks",
        fee: 250,
        ministryId: "interior"
    },

    // MINISTRY OF COMMERCE & INDUSTRY (commerce)
    {
        id: "business-permits",
        name: "Business Permits",
        shortName: "Permits",
        category: "business",
        description: "Operating permits for various sectors",
        estimatedTime: "1 week",
        fee: 1500,
        ministryId: "commerce"
    },
    {
        id: "import-export-licenses",
        name: "Import/Export Licenses",
        shortName: "Trade License",
        category: "business",
        description: "Licenses for international trade",
        estimatedTime: "2-3 weeks",
        fee: 3000,
        ministryId: "commerce"
    },
    {
        id: "trade-registry",
        name: "Trade Registry",
        shortName: "Trade Reg",
        category: "business",
        description: "Register trade names and marks",
        estimatedTime: "2 weeks",
        fee: 1000,
        ministryId: "commerce"
    },
    {
        id: "industrial-certification",
        name: "Industrial Certification",
        shortName: "Industry Cert",
        category: "business",
        description: "Certification for industrial operations",
        estimatedTime: "3-4 weeks",
        fee: 2500,
        ministryId: "commerce"
    },

    // MINISTRY OF AGRICULTURE (agriculture)
    {
        id: "farm-registration",
        name: "Farm Registration",
        shortName: "Farm Reg",
        category: "business",
        description: "Register agricultural farm or cooperative",
        estimatedTime: "2 weeks",
        fee: 500,
        ministryId: "agriculture"
    },
    {
        id: "agricultural-subsidies",
        name: "Agricultural Subsidies",
        shortName: "Subsidies",
        category: "business",
        description: "Apply for farming support and subsidies",
        estimatedTime: "4-6 weeks",
        fee: "Free",
        ministryId: "agriculture"
    },
    {
        id: "land-certification-ag",
        name: "Land Certification",
        shortName: "Land Cert",
        category: "land-property",
        description: "Agricultural land use certification",
        estimatedTime: "3-4 weeks",
        fee: 1000,
        ministryId: "agriculture"
    },
    {
        id: "livestock-permits",
        name: "Livestock Permits",
        shortName: "Livestock",
        category: "business",
        description: "Permits for livestock farming and transport",
        estimatedTime: "1 week",
        fee: 500,
        ministryId: "agriculture"
    },

    // MINISTRY OF LANDS, MINES & ENERGY (lands)
    {
        id: "land-registration",
        name: "Land Registration",
        shortName: "Land Reg",
        category: "land-property",
        description: "Register land deeds and titles",
        estimatedTime: "4-6 weeks",
        fee: "2% of value",
        ministryId: "lands"
    },
    {
        id: "property-titles",
        name: "Property Titles",
        shortName: "Titles",
        category: "land-property",
        description: "Search and verify property titles",
        estimatedTime: "1 week",
        fee: 500,
        ministryId: "lands"
    },
    {
        id: "mining-permits",
        name: "Mining Permits",
        shortName: "Mining",
        category: "business",
        description: "Licenses for mining and exploration",
        estimatedTime: "8-12 weeks",
        fee: "Varies",
        ministryId: "lands"
    },
    {
        id: "energy-compliance",
        name: "Energy Compliance",
        shortName: "Energy",
        category: "utilities",
        description: "Energy sector regulation compliance",
        estimatedTime: "2-3 weeks",
        fee: 1500,
        ministryId: "lands"
    },

    // MINISTRY OF PUBLIC WORKS (public-works)
    {
        id: "building-permits",
        name: "Building Permits",
        shortName: "Build Permit",
        category: "land-property",
        description: "Permits for construction and renovation",
        estimatedTime: "2-4 weeks",
        fee: "Varies by size",
        ministryId: "public-works"
    },
    {
        id: "construction-licenses",
        name: "Construction Licenses",
        shortName: "Const License",
        category: "business",
        description: "License for construction companies",
        estimatedTime: "3-4 weeks",
        fee: 5000,
        ministryId: "public-works"
    },
    {
        id: "infrastructure-reports",
        name: "Infrastructure Reports",
        shortName: "Infra Report",
        category: "utilities",
        description: "Report road or bridge issues",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "public-works"
    },
    {
        id: "public-projects",
        name: "Public Projects",
        shortName: "Projects",
        category: "business",
        description: "Information on public works tenders",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "public-works"
    },

    // MINISTRY OF POSTS & TELECOMMUNICATIONS (posts)
    {
        id: "telecom-licenses",
        name: "Telecom Licenses",
        shortName: "Telecom",
        category: "utilities",
        description: "Licenses for telecommunications operators",
        estimatedTime: "4-8 weeks",
        fee: "Varies",
        ministryId: "posts"
    },
    {
        id: "radio-frequency-permits",
        name: "Radio Frequency Permits",
        shortName: "Radio Permit",
        category: "utilities",
        description: "Frequency allocation and permits",
        estimatedTime: "3-4 weeks",
        fee: 2000,
        ministryId: "posts"
    },
    {
        id: "postal-services",
        name: "Postal Services",
        shortName: "Post",
        category: "utilities",
        description: "Mail and package delivery services",
        estimatedTime: "Varies",
        fee: "Varies",
        ministryId: "posts"
    },
    {
        id: "broadcasting-licenses",
        name: "Broadcasting Licenses",
        shortName: "Broadcast",
        category: "utilities",
        description: "Licenses for radio and TV stations",
        estimatedTime: "4-6 weeks",
        fee: 5000,
        ministryId: "posts"
    },

    // MINISTRY OF LABOR (labor)
    {
        id: "work-permits",
        name: "Work Permits",
        shortName: "Work Permit",
        category: "business",
        description: "Employment permits for foreign nationals",
        estimatedTime: "4-6 weeks",
        fee: 5000,
        ministryId: "labor"
    },
    {
        id: "labor-complaints",
        name: "Labor Complaints",
        shortName: "Complaints",
        category: "social-benefits",
        description: "File workplace grievances",
        estimatedTime: "1-2 weeks",
        fee: "Free",
        ministryId: "labor"
    },
    {
        id: "employment-services",
        name: "Employment Services",
        shortName: "Jobs",
        category: "social-benefits",
        description: "Job matching and career services",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "labor"
    },
    {
        id: "safety-certifications",
        name: "Safety Certifications",
        shortName: "Safety Cert",
        category: "business",
        description: "Workplace health and safety certification",
        estimatedTime: "2-3 weeks",
        fee: 1000,
        ministryId: "labor"
    },

    // MINISTRY OF GENDER, CHILDREN & SOCIAL PROTECTION (gender)
    {
        id: "social-assistance",
        name: "Social Assistance",
        shortName: "Social Help",
        category: "social-benefits",
        description: "Support for vulnerable populations",
        estimatedTime: "2-4 weeks",
        fee: "Free",
        ministryId: "gender"
    },
    {
        id: "child-welfare",
        name: "Child Welfare",
        shortName: "Child Welfare",
        category: "social-benefits",
        description: "Child protection and support services",
        estimatedTime: "Immediate",
        fee: "Free",
        ministryId: "gender"
    },
    {
        id: "gender-programs",
        name: "Gender Programs",
        shortName: "Gender Prog",
        category: "social-benefits",
        description: "Women's empowerment initiatives",
        estimatedTime: "Varies",
        fee: "Free",
        ministryId: "gender"
    },
    {
        id: "protection-services",
        name: "Protection Services",
        shortName: "Protection",
        category: "social-benefits",
        description: "GBV support and protection services",
        estimatedTime: "Immediate",
        fee: "Free",
        ministryId: "gender"
    },

    // MINISTRY OF YOUTH & SPORTS (youth-sports)
    {
        id: "youth-programs",
        name: "Youth Programs",
        shortName: "Youth Prog",
        category: "education",
        description: "Skills training and youth development",
        estimatedTime: "Varies",
        fee: "Free",
        ministryId: "youth-sports"
    },
    {
        id: "sports-registration",
        name: "Sports Registration",
        shortName: "Sports Reg",
        category: "social-benefits",
        description: "Register sports clubs and associations",
        estimatedTime: "2 weeks",
        fee: 500,
        ministryId: "youth-sports"
    },
    {
        id: "youth-employment",
        name: "Youth Employment",
        shortName: "Youth Jobs",
        category: "business",
        description: "Job placement for young people",
        estimatedTime: "Varies",
        fee: "Free",
        ministryId: "youth-sports"
    },
    {
        id: "recreational-facilities",
        name: "Recreational Facilities",
        shortName: "Facilities",
        category: "social-benefits",
        description: "Book public sports venues",
        estimatedTime: "Instant",
        fee: "Varies",
        ministryId: "youth-sports"
    },

    // MINISTRY OF INFORMATION, CULTURAL AFFAIRS & TOURISM (information)
    {
        id: "media-licenses",
        name: "Media Licenses",
        shortName: "Media Lic",
        category: "business",
        description: "Accreditation for media outlets",
        estimatedTime: "2-3 weeks",
        fee: 2000,
        ministryId: "information"
    },
    {
        id: "tourism-permits",
        name: "Tourism Permits",
        shortName: "Tourism",
        category: "business",
        description: "Permits for tourism operators",
        estimatedTime: "2 weeks",
        fee: 1500,
        ministryId: "information"
    },
    {
        id: "cultural-events",
        name: "Cultural Events",
        shortName: "Events",
        category: "diaspora-county",
        description: "Register cultural festivals and events",
        estimatedTime: "1 week",
        fee: 500,
        ministryId: "information"
    },
    {
        id: "press-credentials",
        name: "Press Credentials",
        shortName: "Press Card",
        category: "business",
        description: "Official journalist accreditation",
        estimatedTime: "1 week",
        fee: 500,
        ministryId: "information"
    },

    // MINISTRY OF STATE FOR URBAN DEVELOPMENT & HOUSING (housing)
    {
        id: "housing-applications",
        name: "Housing Applications",
        shortName: "Housing App",
        category: "land-property",
        description: "Apply for public housing units",
        estimatedTime: "8-12 weeks",
        fee: "Free application",
        ministryId: "housing"
    },
    {
        id: "urban-planning",
        name: "Urban Planning",
        shortName: "Planning",
        category: "land-property",
        description: "Zoning and planning information",
        estimatedTime: "1-2 weeks",
        fee: 500,
        ministryId: "housing"
    },
    {
        id: "housing-subsidies",
        name: "Housing Subsidies",
        shortName: "Subsidies",
        category: "social-benefits",
        description: "Financial aid for housing",
        estimatedTime: "4-6 weeks",
        fee: "Free",
        ministryId: "housing"
    },
    {
        id: "development-permits",
        name: "Development Permits",
        shortName: "Dev Permit",
        category: "land-property",
        description: "Permits for large developments",
        estimatedTime: "4-8 weeks",
        fee: "Varies",
        ministryId: "housing"
    },

    // ENVIRONMENTAL PROTECTION AGENCY (environment)
    {
        id: "environmental-permits",
        name: "Environmental Permits",
        shortName: "Env Permit",
        category: "business",
        description: "EPA clearance for projects",
        estimatedTime: "4-8 weeks",
        fee: "Varies",
        ministryId: "environment"
    },
    {
        id: "impact-assessments",
        name: "Impact Assessments",
        shortName: "ESIA",
        category: "business",
        description: "Review of environmental impact studies",
        estimatedTime: "8-12 weeks",
        fee: 5000,
        ministryId: "environment"
    },
    {
        id: "conservation-programs",
        name: "Conservation Programs",
        shortName: "Conservation",
        category: "diaspora-county",
        description: "Participate in nature conservation",
        estimatedTime: "Varies",
        fee: "Free",
        ministryId: "environment"
    },
    {
        id: "pollution-reports",
        name: "Pollution Reports",
        shortName: "Report Poll",
        category: "utilities",
        description: "Report environmental pollution",
        estimatedTime: "Instant",
        fee: "Free",
        ministryId: "environment"
    },

    // LIBERIA REVENUE AUTHORITY (lra)
    {
        id: "tax-returns-lra",
        name: "Tax Returns",
        shortName: "Tax Return",
        category: "taxes-money",
        description: "File annual tax returns",
        estimatedTime: "Instant",
        fee: "Varies",
        ministryId: "lra"
    },
    {
        id: "customs-clearance",
        name: "Customs Clearance",
        shortName: "Customs",
        category: "taxes-money",
        description: "Clear goods through customs",
        estimatedTime: "1-3 days",
        fee: "Duty calculated",
        ministryId: "lra"
    },
    {
        id: "revenue-payments",
        name: "Revenue Payments",
        shortName: "Payments",
        category: "taxes-money",
        description: "Make general revenue payments",
        estimatedTime: "Instant",
        fee: "Varies",
        ministryId: "lra"
    },
    {
        id: "tax-id-registration",
        name: "Tax ID Registration",
        shortName: "TIN Reg",
        category: "taxes-money",
        description: "Obtain Taxpayer Identification Number",
        estimatedTime: "2-3 days",
        fee: "Free",
        ministryId: "lra"
    }
]

// Featured services for home page
export const FEATURED_SERVICES = ALL_SERVICES.filter(s => s.featured)

// Get services by category
export function getServicesByCategory(category: ServiceCategory): Service[] {
    return ALL_SERVICES.filter(s => s.category === category)
}

// Get service by ID
export function getServiceById(id: string): Service | undefined {
    return ALL_SERVICES.find(s => s.id === id)
}

// Search services
export function searchServices(query: string): Service[] {
    const lowerQuery = query.toLowerCase()
    return ALL_SERVICES.filter(s =>
        s.name.toLowerCase().includes(lowerQuery) ||
        s.shortName.toLowerCase().includes(lowerQuery) ||
        s.description.toLowerCase().includes(lowerQuery)
    )
}
