export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
    public: {
        Tables: {
            countries: {
                Row: {
                    country_continent: string | null;
                    country_flag_url: string | null;
                    country_name: string | null;
                    id: number;
                };
                Insert: {
                    country_continent?: string | null;
                    country_flag_url?: string | null;
                    country_name?: string | null;
                    id?: number;
                };
                Update: {
                    country_continent?: string | null;
                    country_flag_url?: string | null;
                    country_name?: string | null;
                    id?: number;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}

export interface SupabaseRow {
    country_continent?: string | null;
    country_flag_url?: string | null;
    country_name?: string | null;
    id?: number;
}

export type SupabaseQueryResponse = SupabaseRow[] | null;
