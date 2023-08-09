import { create } from 'zustand';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '@/supabase';
import { Query, SupabaseQueryResponse } from '@/types/api/supabase';

interface SupabaseCountriesStore {
    countries: SupabaseQueryResponse;
    isDataLoading: boolean;
    error: PostgrestError | null;
    queryCountriesData(query: Query): Promise<void>;
}

export const useSupabaseCountriesStore = create<SupabaseCountriesStore>(set => ({
    countries: [],
    isDataLoading: false,
    error: null,
    queryCountriesData: async (query: Query) => {
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
