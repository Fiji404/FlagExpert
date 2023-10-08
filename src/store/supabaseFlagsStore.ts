import { create } from 'zustand';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '@/supabase';
import { Query, FlagsQueryResponse } from '@/types/supabase/api';

interface SupabaseFlagsStore {
    flags: FlagsQueryResponse;
    isDataLoading: boolean;
    error: PostgrestError | null;
    clearError(): void;
    queryFlags(query: Query): Promise<void>;
}

export const useSupabaseFlagsStore = create<SupabaseFlagsStore>(set => ({
    flags: [],
    isDataLoading: false,
    error: null,
    clearError() {
        set({ error: null });
    },
    async queryFlags(query: Query) {
        set({ isDataLoading: true });
        const { error, data: flags } = await supabase.from('flags').select(query).returns<FlagsQueryResponse>();
        if (error) return set({ error });
        set({ flags });
        set({ isDataLoading: false });
    }
}));
