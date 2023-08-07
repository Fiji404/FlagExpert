import { create } from 'zustand';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '@/supabase';
import { QueryVariants, SupabaseQueryResponse } from '@/types/supabase';

interface SupabaseCountriesStore {
    countries: SupabaseQueryResponse;
    isDataLoading: boolean;
    error: PostgrestError | null;
    queryCountriesData(query: QueryVariants): Promise<void>;
}

export const useSupabaseCountriesStore = create<SupabaseCountriesStore>(set => ({
    countries: [],
    isDataLoading: false,
    error: null,
    queryCountriesData: async (query: QueryVariants) => {
        set({ isDataLoading: true });
        const { error, data: countriesData } = await supabase
            .from('countries')
            .select(query)
            .returns<SupabaseQueryResponse>();
        if (error) return set({ error });
        set({ countries: countriesData });
        set({ isDataLoading: false });
    }
}));
