import { BackToOverview, GamesList } from './';

export const Dashboard = () => {
    return (
        <>
            <BackToOverview />
            <h1 className="mx-auto mt-12 w-[95%] text-center text-5xl font-bold text-black dark:text-white">
                Choose your game mode
            </h1>
            <GamesList />
        </>
    );
};
