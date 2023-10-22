import { SearchInput, ErrorModal, LoadingSpinner, Counter } from '@/components';
import { Flags } from './Flags/Flags';
import { useSupabaseFlagsStore } from '@/store/supabaseFlagsStore';
import { SupabaseRow } from '@/types/supabase/api';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface GuessedFlags extends SupabaseRow {
    isFlagGuessed: boolean;
}

export const Game = () => {
    const { flags, queryFlags, error, clearError, isDataLoading } = useSupabaseFlagsStore();
    const [guessedFlags, setGuessedFlags] = useState<GuessedFlags[]>([]);
    const [isFlagGuessed, setIsFlagGuessed] = useState(false);
    const [guessedFlagsAmount, setGuessedFlagsAmount] = useState(0);

    const validateCountryFlagName = (searchFlagName: string) => {
        setIsFlagGuessed(false);
        setGuessedFlags(prevGuessedFlags => {
            const guessedFlagIdx = prevGuessedFlags.findIndex(flag => flag.flagName.toLowerCase() === searchFlagName);
            if (guessedFlagIdx === -1 || prevGuessedFlags[guessedFlagIdx].isFlagGuessed) return prevGuessedFlags;
            const guessedFlagsCopy = [...prevGuessedFlags];
            guessedFlagsCopy[guessedFlagIdx] = {
                ...prevGuessedFlags[guessedFlagIdx],
                isFlagGuessed: true
            };
            setIsFlagGuessed(true);
            return guessedFlagsCopy;
        });
    };

    useEffect(() => {
        queryFlags('id, flagName, flagURL');
    }, [queryFlags]);

    useEffect(() => {
        const countriesCopy = structuredClone(flags);
        setGuessedFlags(countriesCopy.map(country => ({ ...country, isFlagGuessed: false })));
    }, [flags, isDataLoading]);

    useEffect(() => {
        if (isFlagGuessed) setGuessedFlagsAmount(guessedFlagsAmount => guessedFlagsAmount + 1);
    }, [isFlagGuessed]);

    return (
        <div className="flex max-h-[calc(100vh-65px)] flex-col overflow-auto">
            <AnimatePresence>
                {error && <ErrorModal key="error-modal" closeModalHandler={clearError} errorText={error.message} />}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="sticky top-0 flex items-center gap-2 border-b border-[#f0f0f0] bg-[#fff] px-3 pb-3 pt-3 shadow-md dark:border-[rgb(27,27,27)] dark:bg-primaryDark dark:shadow-[#141414]"
            >
                <SearchInput isCountryGuessed={isFlagGuessed} validateCountryFlagName={validateCountryFlagName} />
                <Counter from={guessedFlagsAmount} to={guessedFlags.length} />
            </motion.div>
            {isDataLoading ? <LoadingSpinner /> : <Flags guessedFlags={guessedFlags} />}
        </div>
    );
};
