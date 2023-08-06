import { BackToGameOverview } from './BackToGameOverview/BackToGameOverview';
import { GameTypes } from './GameTypes/GameTypes';

export const GameDashboard = () => {
    return (
        <>
            <BackToGameOverview />
            <header className="w-[90%] mx-auto mt-12">
                <h1 className="text-center text-5xl font-bold dark:text-white text-black">Choose your game mode</h1>
                <GameTypes />
            </header>
        </>
    );
};
