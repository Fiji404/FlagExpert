import { memo, useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BiError } from 'react-icons/bi';
import { GuessedCountries } from '../Game';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type Props = Omit<GuessedCountries, 'id'>;

export const Flag = memo(({ countryName, countryFlagURL, isCountryGuessed }: Props) => {
    const [isFlagLoading, setIsFlagLoading] = useState(true);
    const [isFlagError, setIsFlagError] = useState(false);
    const flagElementRef = useRef<HTMLLIElement>(null);
    const isFlagInView = useInView(flagElementRef);
    const [isFlagAnimPlayed, setIsAnimPlayed] = useState(false);

    const flagAnimationEndedHandler = () => {
        setIsAnimPlayed(true);
    };

    useEffect(() => {
        if (!isFlagInView && isCountryGuessed && flagElementRef.current && !isFlagAnimPlayed) {
            flagElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isCountryGuessed, isFlagInView, isFlagAnimPlayed]);

    const loadErrorCountryFlagHandler = () => {
        setIsFlagError(true);
    };

    const loadedCountryFlagHandler = () => {
        setIsFlagLoading(false);
    };

    return (
        <>
            {isFlagLoading && !isFlagError && <Skeleton count={1} className="min-h-[80px] min-w-[100px]" />}
            <motion.li
                ref={flagElementRef}
                animate={!isFlagInView && isCountryGuessed && 'visible'}
                className={twMerge(
                    `flex flex-col items-center justify-center bg-[#f8f8f8] dark:bg-[#161616] ${
                        isFlagAnimPlayed && 'dark:bg-[#233a21]'
                    } box-content aspect-video min-w-[50px] max-w-[120px] grow rounded-md border border-[#e0e0e0] px-3 py-2 dark:border-[#222222] ${
                        isCountryGuessed && isFlagInView && !isFlagAnimPlayed ? 'animate-flip' : ''
                    } ${isFlagLoading && !isFlagError ? 'hidden' : 'block'}`
                )}
                onAnimationEnd={flagAnimationEndedHandler}
            >
                {isFlagError ? (
                    <BiError className="text-5xl text-[#EDD114]" />
                ) : (
                    <img
                        onError={loadErrorCountryFlagHandler}
                        onLoad={loadedCountryFlagHandler}
                        className="aspect-video h-full w-full"
                        src={countryFlagURL}
                        alt={countryName}
                    />
                )}
                {isCountryGuessed && <p className="mt-2 text-center text-black dark:text-white">{countryName}</p>}
            </motion.li>
        </>
    );
});
