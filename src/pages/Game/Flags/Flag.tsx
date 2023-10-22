import { memo, useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BiError } from 'react-icons/bi';
import { GuessedFlags } from '../Game';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type Props = Omit<GuessedFlags, 'id' | 'flagContinent'>;

export const Flag = memo(({ flagName, flagURL, isFlagGuessed }: Props) => {
    const [isFlagLoading, setIsFlagLoading] = useState(true);
    const [isFlagError, setIsFlagError] = useState(false);
    const flagElementRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        if (isFlagGuessed && flagElementRef.current) {
            flagElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isFlagGuessed]);

    const loadErrorCountryFlagHandler = () => {
        setIsFlagError(true);
    };

    const loadedCountryFlagHandler = () => {
        setIsFlagLoading(false);
    };
    return (
        <>
            {isFlagLoading && !isFlagError && <Skeleton count={1} className="min-h-[100px] min-w-[150px]" />}
            <motion.li
                ref={flagElementRef}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={!isFlagLoading && { scale: 1, opacity: 1 }}
                whileInView={
                    isFlagGuessed
                        ? {
                              translateY: [-8, 0],
                              rotateY: [180, 0]
                          }
                        : {}
                }
                viewport={{ once: true }}
                className={twMerge(
                    `flex w-full max-w-[300px] grow basis-40 flex-col items-center justify-center rounded-md border border-[#dfdfdf] bg-[#f8f8f8] px-3 py-2 dark:border-[#2a2c30] dark:bg-[#161616] ${
                        isFlagLoading && !isFlagError ? 'hidden' : 'flex'
                    } ${isFlagGuessed ? 'bg-[#ddf3e4] dark:bg-[#152a27]' : ''}`
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
                        src={flagURL}
                        alt={flagName}
                    />
                )}
                {isFlagGuessed && (
                    <p className="mt-2 text-center font-semibold text-[#214134] dark:text-[#3CDA8E]">{flagName}</p>
                )}
            </motion.li>
        </>
    );
});
