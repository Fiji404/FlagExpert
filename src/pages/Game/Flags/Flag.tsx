import { memo, useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BiError } from 'react-icons/bi';
import { GuessedCountries } from '../Game';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type Props = Omit<GuessedCountries, 'id'>;

export const Flag = memo(({ countryName, countryFlagURL, isCountryGuessed }: Props) => {
    const [isFlagLoading, setIsFlagLoading] = useState(true);
    const [isFlagError, setIsFlagError] = useState(false);
    const flagElementRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (isCountryGuessed && flagElementRef.current) {
            flagElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isCountryGuessed]);

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
                whileInView={
                    isCountryGuessed
                        ? {
                              translateY: [-8, 0],
                              rotateY: [180, 0]
                          }
                        : {}
                }
                viewport={{ once: true }}
                className={twMerge(
                    `box-content flex aspect-video min-w-[50px] max-w-[120px] grow  flex-col items-center justify-center rounded-md border border-[#dfdfdf] bg-[#f8f8f8] px-3 py-2 dark:border-[#2a2c30] dark:bg-[#161616] ${
                        isFlagLoading && !isFlagError ? 'hidden' : 'flex'
                    } ${isCountryGuessed ? 'bg-[#ddf3e4] dark:bg-[#152a27]' : ''}`
                )}
                transition={{ duration: 1.1, type: 'spring' }}
            >
                {isFlagError ? (
                    <BiError className="text-5xl text-[#EDD114]" />
                ) : (
                    <img
                        onError={loadErrorCountryFlagHandler}
                        onLoad={loadedCountryFlagHandler}
                        className="aspect-video w-full"
                        src={countryFlagURL}
                        alt={countryName}
                    />
                )}
                {isCountryGuessed && (
                    <p className="mt-2 text-center font-semibold text-[#214134] dark:text-[#3CDA8E]">{countryName}</p>
                )}
            </motion.li>
        </>
    );
});
