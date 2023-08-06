import { create } from 'zustand';
import { getLocalStorageValue } from '@/utils';

export const useUserScreenIgnorance = create(set => ({
    isGameOverviewScreenIgnored: getLocalStorageValue('isGameOverviewScreenIgnored'),
    setUserScreenIgnorance
}));
