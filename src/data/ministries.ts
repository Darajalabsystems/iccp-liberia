import { Building2, Briefcase, GraduationCap, Heart, Plane, Scale, Trees, Zap, Home, ShieldCheck, Landmark, Factory, Sprout, Radio, Users, FileText, Globe, HandHeart, Mountain } from "lucide-react"

export interface Ministry {
    id: string
    name: string
    shortName: string
    icon: any
    description: string
    services: string[]
    contact?: string
}

export const LIBERIAN_MINISTRIES: Ministry[] = [
    {
        id: "finance",
        name: "Ministry of Finance & Development Planning",
        shortName: "MoFDP",
        icon: Landmark,
        description: "Revenue collection, budget planning, and economic policy",
        services: ["Tax Filing", "Business Registration", "Revenue Services", "Budget Information"],
        contact: "info@mof.gov.lr"
    },
    {
        id: "foreign-affairs",
        name: "Ministry of Foreign Affairs",
        shortName: "MoFA",
        icon: Globe,
        description: "Diplomatic relations and consular services",
        services: ["Passport Application", "Visa Services", "Travel Documents", "Consular Assistance"],
        contact: "info@mofa.gov.lr"
    },
    {
        id: "justice",
        name: "Ministry of Justice",
        shortName: "MoJ",
        icon: Scale,
        description: "Legal affairs, courts, and law enforcement coordination",
        services: ["Legal Aid", "Court Records", "Notary Services", "Criminal Records Check"],
        contact: "info@moj.gov.lr"
    },
    {
        id: "health",
        name: "Ministry of Health",
        shortName: "MoH",
        icon: Heart,
        description: "Public health, medical services, and health policy",
        services: ["Health Insurance", "Medical Records", "Vaccination Certificate", "Health Facilities"],
        contact: "info@moh.gov.lr"
    },
    {
        id: "education",
        name: "Ministry of Education",
        shortName: "MoE",
        icon: GraduationCap,
        description: "Education policy, schools, and academic certification",
        services: ["School Enrollment", "Certificate Verification", "Scholarship Applications", "Education Records"],
        contact: "info@moe.gov.lr"
    },
    {
        id: "transport",
        name: "Ministry of Transport",
        shortName: "MoT",
        icon: Plane,
        description: "Transportation infrastructure and driver licensing",
        services: ["Driver's License", "Vehicle Registration", "Road Permits", "Transport Reports"],
        contact: "info@mot.gov.lr"
    },
    {
        id: "interior",
        name: "Ministry of Internal Affairs",
        shortName: "MIA",
        icon: ShieldCheck,
        description: "Immigration, national ID, and internal security",
        services: ["National ID", "Immigration Services", "Residence Permits", "Civil Registry"],
        contact: "info@mia.gov.lr"
    },
    {
        id: "commerce",
        name: "Ministry of Commerce & Industry",
        shortName: "MoCI",
        icon: Factory,
        description: "Trade, commerce, and industrial development",
        services: ["Business Permits", "Import/Export Licenses", "Trade Registry", "Industrial Certification"],
        contact: "info@moci.gov.lr"
    },
    {
        id: "agriculture",
        name: "Ministry of Agriculture",
        shortName: "MoA",
        icon: Sprout,
        description: "Agricultural development and food security",
        services: ["Farm Registration", "Agricultural Subsidies", "Land Certification", "Livestock Permits"],
        contact: "info@moa.gov.lr"
    },
    {
        id: "lands",
        name: "Ministry of Lands, Mines & Energy",
        shortName: "MoLME",
        icon: Mountain,
        description: "Land administration, mining, and energy sector",
        services: ["Land Registration", "Property Titles", "Mining Permits", "Energy Compliance"],
        contact: "info@molme.gov.lr"
    },
    {
        id: "public-works",
        name: "Ministry of Public Works",
        shortName: "MoPW",
        icon: Building2,
        description: "Infrastructure development and construction",
        services: ["Building Permits", "Construction Licenses", "Infrastructure Reports", "Public Projects"],
        contact: "info@mopw.gov.lr"
    },
    {
        id: "posts",
        name: "Ministry of Posts & Telecommunications",
        shortName: "MoPT",
        icon: Radio,
        description: "Communications infrastructure and postal services",
        services: ["Telecom Licenses", "Radio Frequency Permits", "Postal Services", "Broadcasting Licenses"],
        contact: "info@mopt.gov.lr"
    },
    {
        id: "labor",
        name: "Ministry of Labor",
        shortName: "MoL",
        icon: Briefcase,
        description: "Employment, labor rights, and workplace safety",
        services: ["Work Permits", "Labor Complaints", "Employment Services", "Safety Certifications"],
        contact: "info@mol.gov.lr"
    },
    {
        id: "gender",
        name: "Ministry of Gender, Children & Social Protection",
        shortName: "MoGCSP",
        icon: HandHeart,
        description: "Social welfare, child protection, and gender equality",
        services: ["Social Assistance", "Child Welfare", "Gender Programs", "Protection Services"],
        contact: "info@mogcsp.gov.lr"
    },
    {
        id: "youth-sports",
        name: "Ministry of Youth & Sports",
        shortName: "MoYS",
        icon: Users,
        description: "Youth development and sports programs",
        services: ["Youth Programs", "Sports Registration", "Youth Employment", "Recreational Facilities"],
        contact: "info@moys.gov.lr"
    },
    {
        id: "information",
        name: "Ministry of Information, Cultural Affairs & Tourism",
        shortName: "MoICAT",
        icon: FileText,
        description: "Media, culture, and tourism promotion",
        services: ["Media Licenses", "Tourism Permits", "Cultural Events", "Press Credentials"],
        contact: "info@micat.gov.lr"
    },
    {
        id: "housing",
        name: "Ministry of State for Urban Development & Housing",
        shortName: "Housing",
        icon: Home,
        description: "Urban planning and housing development",
        services: ["Housing Applications", "Urban Planning", "Housing Subsidies", "Development Permits"],
        contact: "info@housing.gov.lr"
    },
    {
        id: "environment",
        name: "Environmental Protection Agency",
        shortName: "EPA",
        icon: Trees,
        description: "Environmental protection and conservation",
        services: ["Environmental Permits", "Impact Assessments", "Conservation Programs", "Pollution Reports"],
        contact: "info@epa.gov.lr"
    },
    {
        id: "lra",
        name: "Liberia Revenue Authority",
        shortName: "LRA",
        icon: Landmark,
        description: "Tax collection and customs administration",
        services: ["Tax Returns", "Customs Clearance", "Revenue Payments", "Tax ID Registration"],
        contact: "info@lra.gov.lr"
    }
]

export const getMinistryById = (id: string) => {
    return LIBERIAN_MINISTRIES.find(m => m.id === id)
}

export const getServicesByCategory = () => {
    const categories = new Map<string, Ministry[]>()

    categories.set("Financial & Economic", LIBERIAN_MINISTRIES.filter(m =>
        ["finance", "commerce", "lra"].includes(m.id)))

    categories.set("Legal & Justice", LIBERIAN_MINISTRIES.filter(m =>
        ["justice", "interior"].includes(m.id)))

    categories.set("Social Services", LIBERIAN_MINISTRIES.filter(m =>
        ["health", "education", "gender", "labor"].includes(m.id)))

    categories.set("Infrastructure & Development", LIBERIAN_MINISTRIES.filter(m =>
        ["transport", "public-works", "housing", "lands"].includes(m.id)))

    categories.set("Natural Resources", LIBERIAN_MINISTRIES.filter(m =>
        ["agriculture", "environment"].includes(m.id)))

    categories.set("Communication & Culture", LIBERIAN_MINISTRIES.filter(m =>
        ["posts", "information", "foreign-affairs"].includes(m.id)))

    return categories
}
