import { SupabaseQueryResponse } from '@/types/supabase';
import { FlagGridItem } from './FlagGridItem/FlagGridItem';

interface Props {
    countries: SupabaseQueryResponse;
}

export const FlagsGrid = ({ countries }: Props) => {
    return (
        <ul className="mt-5 flex px-3 justify-center flex-wrap gap-5">
            {countries.map(country => (
                <FlagGridItem
                    key={country.id}
                    countryName={country.countryName}
                    countryFlagUrl={country.countryFlagURL}
                />
            ))}
        </ul>
    );
};
