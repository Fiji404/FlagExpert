import { SupabaseQueryResponse } from '@/types/schema/supabase';
import { FlagGridItem } from './FlagGridItem/FlagGridItem';


interface Props {
    countries: SupabaseQueryResponse;
}

export const FlagsGrid = ({ countries }: Props) => {
    // console.log(countries)
    return (
        <ul className='mt-5 flex flex-wrap gap-5'>
            {countries?.map(country => (
                <FlagGridItem key={country.country_name} country={country} />
            ))}
        </ul>
    );
};
