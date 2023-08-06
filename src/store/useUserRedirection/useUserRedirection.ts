import { create } from 'zustand';

interface UserRedirections {
    isUserRedirectedToGameDashboard: boolean;
    setUserRedirection(): void;
}

export const useUserRedirection = create<UserRedirections>(set => ({
    isUserRedirectedToGameDashboard: false,
    setUserRedirection: () => set({ isUserRedirectedToGameDashboard: true })
}));
