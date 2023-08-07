export interface SupabaseRow {
    country_flag_url: string;
    country_name: string;
    id: number;
}

export type SupabaseQueryResponse = SupabaseRow[];
export type QueryVariants = '*' | 'id, countryName' | 'id, countryFlagURL' | 'id, countryName, countryFlagURL';
