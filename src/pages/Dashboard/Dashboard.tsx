import { GamesList } from './GamesList/GamesList';

export const Dashboard = () => {
    return (
        <main className='px-5 mt-12'>
            <h1 className=" text-center text-5xl font-bold text-black dark:text-white">
                Choose your game mode
            </h1>
            <GamesList />
        </main>
    );
};
