import { SupabaseRow } from '@/types/schema/supabase';

interface Props {
    country: SupabaseRow;
}

export const FlagGridItem = ({ country }: Props) => {
    return (
        <li className="bg-[#222] grow max-w-[120px] box-content p-5 rounded-md aspect-video">
            <img className="w-full h-full" src={country.country_flag_url!} alt={country.country_name!} />
        </li>
    );
};
