import { SupabaseRow } from '@/types/schema/supabase';

interface Props {
    country: SupabaseRow;
}

export const FlagGridItem = ({ country }: Props) => {
    return (
        <li className='bg-[#222] basis-20'>
            <img className='max-w-full ' src={country.country_flag_url!} alt={country.country_name!} />
        </li>
    );
};
