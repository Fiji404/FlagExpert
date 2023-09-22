import { create } from 'zustand';
import { supabase } from '@/supabase';
import { User, Session, AuthError } from '@supabase/supabase-js';

interface UserCredentials {
    email: string;
    password: string;
}

interface PersonDetails extends UserCredentials {
    name: string;
    lastName?: string;
}

interface AuthStore {
    user: User | null;
    session: Session | null;
    authError: AuthError | null;
    clearAuthError(): void;
    getSession(): void;
    signIn(credentials: UserCredentials): void;
    signUp(credentials: PersonDetails): void;
    signOut(): void;
}

export const useSupabaseAuthStore = create<AuthStore>(set => ({
    user: null,
    session: null,
    authError: null,
    clearAuthError() {
        set({ authError: null });
    },
    async getSession() {
        const {
            data: { session },
            error: errorSession
        } = await supabase.auth.getSession();
        if (errorSession) set({ authError: errorSession });
        set({ session });
    },
    async signIn({ email, password }) {
        const {
            data: { user, session },
            error: authError
        } = await supabase.auth.signInWithPassword({ email, password });
        if (authError) return set({ authError });
        set({ user, session });
    },
    async signUp({ email, password, name, lastName }) {
        const {
            data: { user, session },
            error
        } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                    lastName: lastName ?? ''
                },
                emailRedirectTo: '/dashboard'
            }
        });
        if (error) return set({ authError: error });
        set({ user, session });
    },
    async signOut() {
        const { error: authError } = await supabase.auth.signOut();
        if (authError) return set({ authError });
        set({ user: null, session: null });
    }
}));
