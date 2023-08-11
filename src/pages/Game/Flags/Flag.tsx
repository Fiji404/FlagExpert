import { SupabaseRow } from '@/types/api/supabase';

interface Props {
    countryName: SupabaseRow['countryName'];
    countryFlagURL: SupabaseRow['countryFlagURL'];
    isGuessed: boolean;
}

export const Flag = ({ countryName, countryFlagURL, isGuessed }: Props) => {
    return (
        <li
            className={`bg-[#161616] border border-[#222222] grow max-w-[100px] box-content px-3 py-2 rounded-md aspect-video ${
                isGuessed ? 'animate-[flip_1s]' : ''
            }`}
        >
            <img className="w-full h-full" src={countryFlagURL} alt={countryName} />
            {isGuessed && <p className="mt-2 dark:text-white text-center font-bold">{countryName}</p>}
        </li>
    );
};
