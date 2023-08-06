import { create } from 'zustand';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '@/supabase';
import { SupabaseQueryResponse } from '@/types/schema/supabase';

export type PossibleDBQueries =
    | '*'
    | 'id, country_name'
    | 'id, country_flag_url'
    | 'id, country_continent'
    | 'id, country_name, country_flag_url';

interface SupabaseDBStore {
    countries: SupabaseQueryResponse;
    isDataLoading: boolean;
    error: PostgrestError | null;
    queryDataFromDB(query: PossibleDBQueries): Promise<void>;
}

export const useSupabaseDBStore = create<SupabaseDBStore>(set => ({
    countries: [],
    isDataLoading: false,
    error: null,
    queryDataFromDB: async (query: PossibleDBQueries) => {
        set({ isDataLoading: true });
        const { error, data } = await supabase.from('countries').select(query).returns<SupabaseQueryResponse>();
        if (error) return set({ error });
        set({ countries: data });
        set({ isDataLoading: false });
    }
}));
