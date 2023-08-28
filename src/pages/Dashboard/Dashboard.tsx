import { Link } from 'react-router-dom';
import { GamesList } from './GamesList/GamesList';
import { BsArrowLeft } from 'react-icons/bs';

export const Dashboard = () => {
    return (
        <>
            <Link to="/" className="button-primary ml-3 mt-3 w-max">
                <BsArrowLeft className="text-[#2C4D3F] dark:text-[#3CDA8E]" /> Back to overview
            </Link>
            <h1 className="mx-auto mt-12 w-[95%] text-center text-5xl font-bold text-black dark:text-white">
                Choose your game mode
            </h1>
            <GamesList />
        </>
    );
};
