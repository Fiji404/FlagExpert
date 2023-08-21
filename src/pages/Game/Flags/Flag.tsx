import { memo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BiError } from 'react-icons/bi';
import { GuessedCountries } from '../Game';

type Props = Omit<GuessedCountries, 'id'>;

export const Flag = memo(({ countryName, countryFlagURL, isCountryGuessed }: Props) => {
    const [isFlagLoading, setIsFlagLoading] = useState(true);
    const [isFlagError, setIsFlagError] = useState(false);

    const loadErrorCountryFlagHandler = () => {
        setIsFlagError(true);
    };

    const loadedCountryFlagHandler = () => {
        setIsFlagLoading(false);
    };

    return (
        <>
            {isFlagLoading && !isFlagError && <Skeleton count={1} className="min-w-[100px] min-h-[80px]" />}
            <li
                className={`flex justify-center flex-col items-center bg-[#f8f8f8] dark:bg-[#161616] border border-[#e0e0e0] dark:border-[#222222] grow min-w-[100px] max-w-[120px] box-content px-3 py-2 rounded-md aspect-video ${
                    isCountryGuessed ? 'animate-[flip_1s]' : ''
                } ${isFlagLoading && !isFlagError ? 'hidden' : 'block'}`}
            >
                {isFlagError ? (
                    <BiError className="text-5xl text-[#EDD114]" />
                ) : (
                    <img
                        onError={loadErrorCountryFlagHandler}
                        onLoad={loadedCountryFlagHandler}
                        className="w-full h-full"
                        src={countryFlagURL}
                        alt={countryName}
                    />
                )}
                {isCountryGuessed && <p className="mt-2 dark:text-white text-black text-center">{countryName}</p>}
            </li>
        </>
    );
});
