import { Flags } from './Flags/Flags';
import { SearchFlagInput } from '@/components';
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
            <Flags countries={countries} />;
        </>
    );
};
