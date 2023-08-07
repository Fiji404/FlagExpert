import { FlagsGrid } from './FlagsGrid/FlagsGrid';
import { SearchFlagInput } from '../../components';
import { useSupabaseDBStore } from '@/store/supabaseDBStore/supabaseCStore';
import { useEffect } from 'react';

export const PickedGame = () => {
    const { countries, queryDataFromDB } = useSupabaseDBStore();

    useEffect(() => {
        queryDataFromDB('id, country_name, country_flag_url');
    }, [queryDataFromDB]);

    return (
        <>
            <SearchFlagInput />
            <FlagsGrid countries={countries} />;
        </>
    );
};
