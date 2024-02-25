import { Flag } from './Flag';
import { GuessedFlags } from '../Game';

interface Props {
    guessedFlags: GuessedFlags[];
}

export const Flags = ({ guessedFlags }: Props) => {
    return (
        <ul className="flex flex-wrap justify-center gap-4 overflow-auto px-3 pb-4 pt-5">
            {guessedFlags.map(flag => (
                <Flag
                    key={flag.id}
                    flagName={flag.flagName}
                    flagURL={flag.flagURL}
                    isFlagGuessed={flag.isFlagGuessed}
                    flagNameAlt={flag.flagNameAlt}
                />
            ))}
        </ul>
    );
};
