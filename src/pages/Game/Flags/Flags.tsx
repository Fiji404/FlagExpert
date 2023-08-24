import { Flag } from './Flag';
import { GuessedCountries } from '../Game';

interface Props {
    countries: GuessedCountries[];
}

export const Flags = ({ countries }: Props) => {
    return (
        <ul className="mt-5 flex px-3 pb-4 justify-center flex-wrap gap-5 overflow-auto ">
            {countries.map(country => (
                <Flag
                    key={country.id}
                    countryName={country.countryName}
                    countryFlagURL={country.countryFlagURL}
                    isCountryGuessed={country.isCountryGuessed}
                />
            ))}
        </ul>
    );
};
