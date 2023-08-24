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
            {isFlagLoading && !isFlagError && <Skeleton count={1} className="min-w-[100px] min-h-[80px]" />}
            <motion.li
                ref={flagElementRef}
                animate={!isFlagInView && isCountryGuessed && 'visible'}
                className={twMerge(
                    `flex justify-center flex-col items-center bg-[#f8f8f8] dark:bg-[#161616] ${
                        isFlagAnimPlayed && 'dark:bg-[#233a21]'
                    } border border-[#e0e0e0] dark:border-[#222222] grow min-w-[50px] max-w-[120px] box-content px-3 py-2 rounded-md aspect-video ${
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
                        className="w-full h-full aspect-video"
                        src={countryFlagURL}
                        alt={countryName}
                    />
                )}
                {isCountryGuessed && <p className="mt-2 dark:text-white text-black text-center">{countryName}</p>}
            </motion.li>
        </>
    );
});
