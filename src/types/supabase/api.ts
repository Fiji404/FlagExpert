export interface SupabaseRow {
    id: number;
    flagURL: string;
    flagName: string;
    flagContinent: string;
}

export type FlagsQueryResponse = SupabaseRow[];
export type Query = '*' | 'id, flagName, flagURL' | 'id, flagName, flagURL, flagContinent';
