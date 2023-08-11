import { Flags } from './Flags/Flags';
import { SearchInput } from '@/components';
import { useSupabaseCountriesStore } from '@/store/supabaseCountriesStore/supabaseCountriesStore';
import { useEffect, useState } from 'react';

export const Game = () => {
    const { countries, queryCountriesData } = useSupabaseCountriesStore();
    const [guessedCountries, setGuessedCountries] = useState(() =>
        structuredClone(countries).map(country => ({ ...country, isGuessed: false }))
    );

    const countryGuessHandler = (countryName: string) => {
        setGuessedCountries(prevGuessedCountries => {
            const guessedCountryIdx = prevGuessedCountries.findIndex(country => country.countryName === countryName);
            if (guessedCountryIdx === -1) return prevGuessedCountries;
            const guessedCountriesCopy = [...prevGuessedCountries];
            guessedCountriesCopy[guessedCountryIdx] = {
                ...prevGuessedCountries[guessedCountryIdx],
                isGuessed: true
            };
            return guessedCountriesCopy;
        });
    };

    useEffect(() => {
        queryCountriesData('id, countryName, countryFlagURL');
    }, [queryCountriesData]);

    return (
        <>
            <SearchInput countryGuessHandler={countryGuessHandler} />
            <Flags countries={guessedCountries} />
        </>
    );
};
