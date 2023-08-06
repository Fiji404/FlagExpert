import { LoaderFunctionArgs, defer, useLoaderData } from 'react-router-dom';
import { CountryDetails, FlagsGrid } from './FlagsGrid/FlagsGrid';
import { SearchFlagInput } from '../../components';

interface FlagsApiResponse {
    [key: string]: string;
}

export const PickedGame = () => {
    const countriesDetails = useLoaderData() as { countryCodes: CountryDetails[]  };

    return <>
        <SearchFlagInput />
        <FlagsGrid countriesDetails={countriesDetails.countryCodes} />;
    </>
};

export const pickedGameLoader = async ({ params }: LoaderFunctionArgs) => {
    const API_URLS_BY_GAME: Record<string, string> = {
        'all-flags': 'https://flagcdn.com/en/code.json'
    };
    const countryCodesRes = fetch(API_URLS_BY_GAME[params.gameType!]);
    return defer({ countryCodes: countryCodesRes })
    const countryNamesWithFlags = Object.entries(countryNames).map(([countryCode, countryName]) => ({
        countryName,
        countryFlag: `https://flagcdn.com/80x60/${countryCode}.png`
    }));

    return countryNamesWithFlags;
};
