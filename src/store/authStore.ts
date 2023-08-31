import { create } from 'zustand';
import { supabase } from '@/supabase';
import { User, Session, AuthError } from '@supabase/supabase-js';

interface AuthStore {
    user: User | null;
    session: Session | null;
    authError: AuthError | null;
    clearAuthError(): void;
    signInWithEmail(email: string, password: string): void;
}

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    session: null,
    authError: null,
    clearAuthError() {
        set({ authError: null });
    },
    async signInWithEmail(email, password) {
        const {
            data: { user, session },
            error: authError
        } = await supabase.auth.signInWithPassword({ email, password });
        if (authError) return set({ authError });
        set({ user, session });
    }
}));
