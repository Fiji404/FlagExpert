export interface SupabaseRow {
    countryFlagURL: string;
    countryName: string;
    id: number;
}

export type SupabaseQueryResponse = SupabaseRow[];
export type QueryVariants = '*' | 'id, countryName' | 'id, countryFlagURL' | 'id, countryName, countryFlagURL';
