import { SupabaseQueryResponse } from '@/types/api/supabase';
import { Flag } from './Flag';

interface Props {
    countries: SupabaseQueryResponse;
}

export const Flags = ({ countries }: Props) => {
    return (
        <ul className="mt-5 flex px-3 justify-center flex-wrap gap-5">
            {countries.map(country => (
                <Flag key={country.id} countryName={country.countryName} countryFlagURL={country.countryFlagURL} />
            ))}
        </ul>
    );
};
