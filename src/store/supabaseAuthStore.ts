import { create } from 'zustand';
import { supabase } from '@/supabase';
import { User as IUser, Session, AuthError } from '@supabase/supabase-js';

interface Credentials {
    email: string;
    password: string;
}

interface User extends Credentials {
    username: string;
    avatarURL: string;
}

interface AuthStore {
    user: IUser | null;
    session: Session | null;
    authError: AuthError | null;
    clearAuthError(): void;
    getSession(): void;
    signIn(credentials: Credentials): void;
    signUp(user: User): void;
    signOut(): void;
}

export const useSupabaseAuthStore = create<AuthStore>(set => ({
    user: null,
    session: null,
    authError: null,
    clearAuthError: () => set({ authError: null }),
    async getSession() {
        const {
            data: { session },
            error: errorSession
        } = await supabase.auth.getSession();
        if (errorSession) return set({ authError: errorSession });
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
    async signUp({ email, password, username, avatarURL }) {
        const {
            data: { user, session },
            error: authError
        } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username,
                    avatar_url: avatarURL
                }
            }
        });
        if (authError) return set({ authError });
        set({ user, session });
    },
    async signOut() {
        const { error: authError } = await supabase.auth.signOut();
        if (authError) return set({ authError });
        set({ user: null, session: null });
    }
}));
