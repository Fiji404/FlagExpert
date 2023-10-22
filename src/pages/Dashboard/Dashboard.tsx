import { GamesList } from './GamesList/GamesList';
import { Heading } from '@/components';

export const Dashboard = () => {
    return (
        <main className="mt-12 px-5">
            <Heading className="text-6xl">Choose your game mode</Heading>
            <GamesList />
        </main>
    );
};
