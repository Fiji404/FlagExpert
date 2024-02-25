import { memo, useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { BiError } from 'react-icons/bi';
import { GuessedFlags } from '../Game';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTranslation } from 'react-i18next';

type Props = Omit<GuessedFlags, 'id' | 'flagContinent'>;

export const Flag = memo(({ flagName, flagURL, isFlagGuessed, flagNameAlt }: Props) => {
    const [isFlagLoading, setIsFlagLoading] = useState(true);
    const [isFlagError, setIsFlagError] = useState(false);
    const flagElementRef = useRef<HTMLLIElement>(null);
    const [playFlagAnimation, setPlayFlagAnimation] = useState(false);
    const { i18n } = useTranslation();
    const flagCurrentName = i18n.language === 'pl' ? flagNameAlt : flagName;

    useEffect(() => {
        if (isFlagGuessed && flagElementRef.current) {
            flagElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setPlayFlagAnimation(true);
            setTimeout(() => setPlayFlagAnimation(false), 4000);
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
                    playFlagAnimation
                        ? {
                              scale: [1.1, 1]
                          }
                        : {}
                }
                viewport={{ once: true }}
                className={twMerge(
                    `flex w-full grow basis-48 flex-col items-center justify-center rounded-md bg-[#f0f0f0] px-3 py-2 dark:bg-[#1d1d1d] ${
                        isFlagLoading && !isFlagError ? 'hidden' : 'flex'
                    } ${
                        playFlagAnimation
                            ? 'blink'
                            : isFlagGuessed && !playFlagAnimation
                            ? 'bg-[#ddf3e4] dark:bg-[#152a27]'
                            : ''
                    }`
                )}
                transition={{ duration: 1.1, type: 'spring', times: [0.9, 0], repeatType: 'loop' }}
            >
                {isFlagError ? (
                    <BiError className="text-5xl text-[#EDD114]" />
                ) : (
                    <img
                        onError={loadErrorCountryFlagHandler}
                        onLoad={loadedCountryFlagHandler}
                        className="aspect-video w-full"
                        src={flagURL}
                        alt={flagCurrentName}
                    />
                )}
                {isFlagGuessed && (
                    <p className="mt-2 text-center font-semibold text-[#214134] dark:text-[#3CDA8E]">
                        {flagCurrentName}
                    </p>
                )}
            </motion.li>
        </>
    );
});
