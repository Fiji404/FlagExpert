import { SearchInput, ErrorModal, LoadingSpinner, Counter } from '@/components';
import { Flags } from './Flags/Flags';
import { useSupabaseCountriesStore } from '@/store/supabaseCountriesStore';
import { SupabaseRow } from '@/types/supabase/api';
import { useEffect, useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';

export interface GuessedCountries extends SupabaseRow {
    isCountryGuessed: boolean;
}

export const Game = () => {
    const { countries, queryCountriesData, error, clearError, isDataLoading } = useSupabaseCountriesStore();
    const [guessedCountries, setGuessedCountries] = useState<GuessedCountries[]>([]);
    const [isCountryGuessed, setIsCountryGuessed] = useState(false);

    const guessedCountriesAmount = useMemo(
        () => guessedCountries.reduce((acc, { isCountryGuessed }) => (isCountryGuessed ? acc + 1 : acc), 0),
        [guessedCountries]
    );

    const validateCountryFlagName = (countryName: string) => {
        setIsCountryGuessed(false);
        setGuessedCountries(prevGuessedCountries => {
            const guessedCountryIdx = prevGuessedCountries.findIndex(
                country => country.countryName.toLowerCase() === countryName
            );
            if (guessedCountryIdx === -1 || prevGuessedCountries[guessedCountryIdx].isCountryGuessed)
                return prevGuessedCountries;
            const guessedCountriesCopy = [...prevGuessedCountries];
            guessedCountriesCopy[guessedCountryIdx] = {
                ...prevGuessedCountries[guessedCountryIdx],
                isCountryGuessed: true
            };
            setIsCountryGuessed(true);
            return guessedCountriesCopy;
        });
    };

    useEffect(() => {
        queryCountriesData('id, countryName, countryFlagURL');
    }, [queryCountriesData]);

    useEffect(() => {
        if (isDataLoading || countries.length === 0) return;
        const countriesCopy = structuredClone(countries);
        setGuessedCountries(countriesCopy.map(country => ({ ...country, isCountryGuessed: false })));
    }, [countries, isDataLoading]);

    return (
        <div className="flex max-h-[calc(100vh-65px)] flex-col overflow-auto">
            <AnimatePresence>
                {error && <ErrorModal key="error-modal" closeModalHandler={clearError} errorText={error.message} />}
            </AnimatePresence>
            <div className="sticky top-0 flex items-center gap-2 border-b border-[#f0f0f0] bg-[#fff] px-3 pb-3 pt-3 shadow-md dark:border-[rgb(27,27,27)] dark:bg-primaryDark dark:shadow-[#141414]">
                <SearchInput isCountryGuessed={isCountryGuessed} validateCountryFlagName={validateCountryFlagName} />
                <Counter from={guessedCountriesAmount} to={guessedCountries.length} />
            </div>
            {isDataLoading ? <LoadingSpinner /> : <Flags countries={guessedCountries} />}
        </div>
    );
};
