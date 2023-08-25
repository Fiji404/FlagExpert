import { GuessedCountries } from '@/pages/Game/Game';

interface Props {
    quantity: number;
    guessedCountries: GuessedCountries[];
}

export const QuantityCounter = ({ quantity, guessedCountries }: Props) => {
    const guessedCountriesAmount = guessedCountries.reduce(
        (acc, { isCountryGuessed }) => (isCountryGuessed ? acc + 1 : acc),
        0
    );
    return (
        <div className="font-medium dark:text-[#fff]">
            {guessedCountriesAmount} / {quantity}
        </div>
    );
};
