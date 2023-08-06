import { Link } from 'react-router-dom';

interface GameType {
    type: string;
    icon: React.ReactNode;
    route: string;
}

interface Props {
    gameType: GameType;
}

export const GameType = ({ gameType }: Props) => {
    return (
        <Link
            to={gameType.route}
            className="basis-80 flex justify-center items-center gap-2 text-4xl font-semibold border rounded-md px-2 py-1 dark:bg-[rgb(19,19,19)] bg-[#fff] hover:bg-[#f1f1f1] text-center aspect-video dark:text-white text-black dark:border-[#303030]"
        >
            {gameType.type} {gameType.icon}
        </Link>
    );
};
