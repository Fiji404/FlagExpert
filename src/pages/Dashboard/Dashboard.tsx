import { BackToOverview, Games } from './';

export const Dashboard = () => {
    return (
        <>
            <BackToOverview />
            <h1 className="w-[95%] mx-auto mt-12 text-center text-5xl font-bold dark:text-white text-black">
                Pick your game
            </h1>
            <Games />
        </>
    );
};
