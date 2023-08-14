import { SupabaseRow } from '@/types/api/supabase';
import { memo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
    countryName: SupabaseRow['countryName'];
    countryFlagURL: SupabaseRow['countryFlagURL'];
    isGuessed: boolean;
}

export const Flag = memo(({ countryName, countryFlagURL, isGuessed }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    const loadedCountryImageHandler = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <Skeleton count={1} className="min-w-[100px] min-h-[80px]" />}
            <li
                className={`bg-[#f8f8f8] dark:bg-[#161616] border border-[#e0e0e0] dark:border-[#222222] grow min-w-[100px] max-w-[120px] box-content px-3 py-2 rounded-md aspect-video ${
                    isGuessed ? 'animate-[flip_1s]' : ''
                } ${isLoading && 'hidden'}`}
            >
                <img
                    onLoad={loadedCountryImageHandler}
                    className="w-full h-full"
                    src={countryFlagURL}
                    alt={countryName}
                />
                {isGuessed && <p className="mt-2 dark:text-white text-black text-center ">{countryName}</p>}
            </li>
        </>
    );
});
