import { getLocalStorageValue } from '@/utils';
import { create } from 'zustand';

type DefaultRouteVariants = 'GameDashboard' | null;

interface DefaultRouteStore {
    defaultAppRoute: DefaultRouteVariants;
    isDefaultRouteActive: boolean;
    getDefaultAppRoute(): void;
    setDefaultAppRouteToLS(defaultRoute: DefaultRouteVariants): void;
}

export const useDefaultAppRouteStore = create<DefaultRouteStore>(set => ({
    defaultAppRoute: null,
    isDefaultRouteActive: true,
    getDefaultAppRoute() {
        const defaultAppRouteLS = getLocalStorageValue('defaultAppRoute') as DefaultRouteVariants;
        if (!defaultAppRouteLS) return;
        set({ defaultAppRoute: defaultAppRouteLS });
        setTimeout(() => set({ isDefaultRouteActive: false }));
    },
    setDefaultAppRouteToLS(defaultRoute: DefaultRouteVariants) {
        if (defaultRoute === 'GameDashboard') {
            localStorage.setItem('defaultAppRoute', defaultRoute);
        }
        if (defaultRoute === null) {
            localStorage.removeItem('defaultAppRoute');
        }
        return set({ defaultAppRoute: defaultRoute });
    }
}));
