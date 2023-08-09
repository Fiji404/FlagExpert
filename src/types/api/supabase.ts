export interface SupabaseRow {
    countryFlagURL: string;
    countryName: string;
    id: number;
}

export type SupabaseQueryResponse = SupabaseRow[];
export type Query = '*' | 'id, countryName' | 'id, countryFlagURL' | 'id, countryName, countryFlagURL';
