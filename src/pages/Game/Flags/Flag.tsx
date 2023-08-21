import { SupabaseRow } from '@/types/api/supabase';
import { memo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BiError } from 'react-icons/bi';

interface Props {
    countryName: SupabaseRow['countryName'];
    countryFlagURL: SupabaseRow['countryFlagURL'];
    isGuessed: boolean;
}

export const Flag = memo(({ countryName, countryFlagURL, isGuessed }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    console.log(isError)
    const loadErrorCountryImgHandler = () => {
        setIsError(true);
    };

    const loadedCountryImgHandler = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && !isError && <Skeleton count={1} className="min-w-[100px] min-h-[80px]" />}
            <li
                className={`flex justify-center flex-col items-center bg-[#f8f8f8] dark:bg-[#161616] border border-[#e0e0e0] dark:border-[#222222] grow min-w-[100px] max-w-[120px] box-content px-3 py-2 rounded-md aspect-video ${
                    isGuessed ? 'animate-[flip_1s]' : ''
                } ${isLoading && !isError ? 'hidden': 'block'}`}
            >
                {isError ? (
                    <BiError className="text-5xl text-[#EDD114]" />
                ) : (
                    <img
                        onError={loadErrorCountryImgHandler}
                        onLoad={loadedCountryImgHandler}
                        className="w-full h-full"
                        src={countryFlagURL}
                        alt={countryName}
                    />
                )}
                {isGuessed && <p className="mt-2 dark:text-white text-black text-center ">{countryName}</p>}
            </li>
        </>
    );
});
