import { Flag } from './Flag';
import { GuessedCountries } from '../Game';

interface Props {
    countries: GuessedCountries[];
}

export const Flags = ({ countries }: Props) => {
    return (
        <ul className="flex flex-wrap justify-center gap-5 overflow-auto px-3 pb-4 pt-5 ">
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
