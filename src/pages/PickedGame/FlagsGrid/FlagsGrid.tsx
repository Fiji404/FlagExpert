import { FlagGridItem } from './FlagGridItem/FlagGridItem';

export interface CountryDetails {
    countryName: string;
    countryFlag: string;
}

interface Props {
    countriesDetails: { countryCodes: CountryDetails[] };
}

export const FlagsGrid = ({ countriesDetails }: Props) => {
    return (
        <ul>
            {countriesDetails.map(countryDetails => (
                <FlagGridItem countryDetails={countryDetails} />
            ))}
        </ul>
    );
};
