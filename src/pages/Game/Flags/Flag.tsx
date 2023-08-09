import { SupabaseRow } from '@/types/api/supabase';

interface Props {
    countryName: SupabaseRow['countryName'];
    countryFlagURL: SupabaseRow['countryFlagURL'];
}

export const Flag = ({ countryName, countryFlagURL }: Props) => {

    return (
        <li className="bg-[#161616] border border-[#222222] grow max-w-[100px] box-content p-3 rounded-md aspect-video">
            <img className="w-full h-full" src={countryFlagURL} alt={countryName} />
        </li>
    );
};
