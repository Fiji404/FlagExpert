import { Flags } from './Flags/Flags';
import { SearchInput } from '@/components';
import { useSupabaseCountriesStore } from '@/store/supabaseCountriesStore/supabaseCountriesStore';
import { SupabaseRow } from '@/types/api/supabase';
import { useEffect, useState } from 'react';

export const Game = () => {
    const { countries, queryCountriesData } = useSupabaseCountriesStore();
    const [guessedCountries, setGuessedCountries] = useState<(SupabaseRow & { isGuessed: boolean })[]>([]);
    console.log(countries);
    const countryGuessHandler = (countryName: string) => {
        let isGuessed = false;
        setGuessedCountries(prevGuessedCountries => {
            const guessedCountryIdx = prevGuessedCountries.findIndex(country => country.countryName === countryName);
            if (guessedCountryIdx === -1) return prevGuessedCountries;
            const guessedCountriesCopy = [...prevGuessedCountries];
            guessedCountriesCopy[guessedCountryIdx] = {
                ...prevGuessedCountries[guessedCountryIdx],
                isGuessed: true
            };
            isGuessed = true;
            return guessedCountriesCopy;
        });
        return isGuessed;
    };

    useEffect(() => {
        queryCountriesData('id, countryName, countryFlagURL');
    }, [queryCountriesData]);
    
    useEffect(() => {
        setGuessedCountries(structuredClone(countries).map(country => ({ ...country, isGuessed: false })));
    }, [countries]);

    return (
        <>
            <SearchInput countryGuessHandler={countryGuessHandler} />
            <Flags countries={guessedCountries} />
        </>
    );
};
