import { ErrorModal } from '@/components/UI/ErrorModal/ErrorModal';
import { Flags } from './Flags/Flags';
import { SearchInput } from '@/components';
import { useSupabaseCountriesStore } from '@/store/supabaseCountriesStore/supabaseCountriesStore';
import { SupabaseRow } from '@/types/api/supabase';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export const Game = () => {
    const { countries, queryCountriesData, error, removeError } = useSupabaseCountriesStore();
    const [guessedCountries, setGuessedCountries] = useState<(SupabaseRow & { isGuessed: boolean })[]>([]);

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

    const removeErrorModalHandler = () => {
        removeError();
    };

    useEffect(() => {
        queryCountriesData('id, countryName, countryFlagURL');
    }, [queryCountriesData]);

    useEffect(() => {
        setGuessedCountries(structuredClone(countries).map(country => ({ ...country, isGuessed: false })));
    }, [countries]);

    return (
        <AnimatePresence>
            {error && <ErrorModal key="error-modal" onClick={removeErrorModalHandler} errorText={error.message} />}
            <SearchInput key="input" countryGuessHandler={countryGuessHandler} />
            <Flags key="flags" countries={guessedCountries} />
        </AnimatePresence>
    );
};
