import { Benefits } from './Benefits/Benefits';
import { ProcceedToGame } from './ProcceedToGame/ProcceedToGame';
import { WelcomeHeading } from './WelcomeHeading/WelcomeHeading';
import { GameDescription } from './GameDescription/GameDescription';

export const GameOverview = () => {
    return (
        <>
            <section>
                <header className='px-2'>
                    <WelcomeHeading />
                    <GameDescription />
                </header>
                <Benefits />
                <ProcceedToGame />
            </section>
        </>
    );
};
