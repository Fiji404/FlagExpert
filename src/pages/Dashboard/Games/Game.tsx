import { Link } from 'react-router-dom';

interface Game {
    name: string;
    icon: React.ReactNode;
    route: string;
}

interface Props {
    game: Game;
}

export const Game = ({ game }: Props) => {
    return (
        <Link
            to={game.route}
            className="w-full flex justify-center items-center gap-2 text-4xl font-semibold border rounded-md px-2 py-1 
            dark:bg-[rgb(19,19,19)] bg-[#fff] hover:bg-[#f7f7f7] dark:hover:bg-[rgb(26,26,26)] text-center dark:text-white text-black dark:border-[#303030] min-h-[220px] transition-colors"
        >
            {game.name} {game.icon}
        </Link>
    );
};
