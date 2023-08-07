import { SupabaseRow } from '@/types/schema/supabase';

interface Props {
    countryName: SupabaseRow['country_name'];
    countryFlagUrl: SupabaseRow['country_flag_url'];
}

export const FlagGridItem = ({ countryName, countryFlagUrl }: Props) => {
    return (
        <li className="bg-[#222] grow max-w-[120px] box-content p-5 rounded-md aspect-video">
            <img className="w-full h-full" src={countryFlagUrl} alt={countryName} />
        </li>
    );
};
