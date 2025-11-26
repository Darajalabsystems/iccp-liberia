export const LIBERIAN_COUNTIES = [
    { id: "bomi", name: "Bomi County", capital: "Tubmanburg" },
    { id: "bong", name: "Bong County", capital: "Gbarnga" },
    { id: "gbarpolu", name: "Gbarpolu County", capital: "Bopolu" },
    { id: "grand-bassa", name: "Grand Bassa County", capital: "Buchanan" },
    { id: "grand-cape-mount", name: "Grand Cape Mount County", capital: "Robertsport" },
    { id: "grand-gedeh", name: "Grand Gedeh County", capital: "Zwedru" },
    { id: "grand-kru", name: "Grand Kru County", capital: "Barclayville" },
    { id: "lofa", name: "Lofa County", capital: "Voinjama" },
    { id: "margibi", name: "Margibi County", capital: "Kakata" },
    { id: "maryland", name: "Maryland County", capital: "Harper" },
    { id: "montserrado", name: "Montserrado County", capital: "Bensonville" },
    { id: "nimba", name: "Nimba County", capital: "Sanniquellie" },
    { id: "river-cess", name: "River Cess County", capital: "Cestos City" },
    { id: "river-gee", name: "River Gee County", capital: "Fish Town" },
    { id: "sinoe", name: "Sinoe County", capital: "Greenville" },
] as const

export type CountyId = typeof LIBERIAN_COUNTIES[number]['id']

export interface County {
    id: CountyId
    name: string
    capital: string
}
