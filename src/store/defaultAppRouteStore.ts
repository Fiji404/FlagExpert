import { getLocalStorageValue } from '@/utils/getLocalStorageValue';
import { create } from 'zustand';

type DefaultRoute = '/dashboard' | null;

interface DefaultRouteStore {
    defaultAppRoute: DefaultRoute;
    isDefaultAppRouteActive: boolean;
    getDefaultAppRoute(): void;
    setDefaultAppRouteToLS(defaultRoute: DefaultRoute): void;
}

export const useDefaultAppRouteStore = create<DefaultRouteStore>(set => ({
    defaultAppRoute: null,
    isDefaultAppRouteActive: true,
    getDefaultAppRoute() {
        const defaultAppRouteLS = getLocalStorageValue('defaultAppRoute') as DefaultRoute;
        if (!defaultAppRouteLS) return;
        set({ defaultAppRoute: defaultAppRouteLS });
        setTimeout(() => set({ isDefaultAppRouteActive: false }));
    },
    setDefaultAppRouteToLS(defaultRoute: DefaultRoute) {
        if (defaultRoute === '/dashboard') {
            localStorage.setItem('defaultAppRoute', defaultRoute);
        }
        if (defaultRoute === null) {
            localStorage.removeItem('defaultAppRoute');
        }
        return set({ defaultAppRoute: defaultRoute });
    }
}));
