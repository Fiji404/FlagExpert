import { SearchInput, ErrorModal, LoadingSpinner, QuantityCounter } from '@/components';
import { Flags } from './Flags/Flags';
import { useSupabaseCountriesStore } from '@/store/supabaseCountriesStore/supabaseCountriesStore';
import { SupabaseRow } from '@/types/api/supabase';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export interface GuessedCountries extends SupabaseRow {
    isCountryGuessed: boolean;
}

export const Game = () => {
    const { countries, queryCountriesData, error, clearError, isDataLoading } = useSupabaseCountriesStore();
    const [guessedCountries, setGuessedCountries] = useState<GuessedCountries[]>([]);
    const [isCountryGuessed, setIsCountryGuessed] = useState(false);

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
        <div className="max-h-[90   vh] flex flex-col overflow-auto">
            <AnimatePresence>
                {error && <ErrorModal key="error-modal" closeModalHandler={clearError} errorText={error.message} />}
            </AnimatePresence>
            <div className="sticky top-0 mt-3 mx-3 flex items-center gap-2">
                <SearchInput isCountryGuessed={isCountryGuessed} validateCountryFlagName={validateCountryFlagName} />
                <QuantityCounter quantity={countries.length} guessedCountries={guessedCountries} />
            </div>
            {isDataLoading ? <LoadingSpinner /> : <Flags countries={guessedCountries} />}
        </div>
    );
};
