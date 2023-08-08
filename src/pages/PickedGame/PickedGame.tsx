import { FlagsGrid } from './FlagsGrid/FlagsGrid';
import { SearchFlagInput } from '../../components';
import { useSupabaseCountriesStore } from '@/store/supabaseCountriesStore/supabaseCountriesStore';
import { useEffect } from 'react';

export const PickedGame = () => {
    const { countries, queryCountriesData } = useSupabaseCountriesStore();

    useEffect(() => {
        queryCountriesData('id, countryName, countryFlagURL');
    }, [queryCountriesData]);

    return (
        <>
            <SearchFlagInput />
            <FlagsGrid countries={countries} />;
        </>
    );
};
