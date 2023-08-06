import { FlagsGrid } from './FlagsGrid/FlagsGrid';
import { SearchFlagInput } from '../../components';
import { useSupabaseDBStore } from '@/store/supabaseDBStore/supabaseDBStore';
import { useEffect } from 'react';

export const PickedGame = () => {
    const { countries, queryDataFromDB } = useSupabaseDBStore();

    useEffect(() => {
        queryDataFromDB('*');
    }, [queryDataFromDB]);

    return (
        <>
            <SearchFlagInput />
            <FlagsGrid countries={countries} />;
        </>
    );
};
