import { CountryDetails } from "../FlagsGrid"

interface Props {
    countryDetails: CountryDetails
}

export  const FlagGridItem = ({countryDetails}: Props) => {
    return <li>
        <img src={countryDetails.countryFlag} alt={countryDetails.countryName} />
    </li>
}