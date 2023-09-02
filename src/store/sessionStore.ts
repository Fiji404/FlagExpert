import { supabase } from '@/supabase';
import { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

interface SessionStore {
    session: Session | null;
    getSession(): void;
}

export const useSessionStore = create<SessionStore>(set => ({
    session: null,
    async getSession() {
        const {
            data: { session },
            error
        } = await supabase.auth.getSession();
        if (error) console.log(error);
        set({ session });
    }
}));
