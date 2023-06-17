import { GameBenefits } from './GameBenefits/GameBenefits';
import { ProcceedToGamePanel } from '../ProcceedToGamePanel/ProcceedToGamePanel';
import { WelcomeHeading } from './WelcomeHeading/WelcomeHeading';
import { GameDescription } from './GameDescription/GameDescription';

export const GameOverview = () => {
    return (
        <>
            <section>
                <header>
                    <WelcomeHeading />
                    <GameDescription />
                </header>
                <GameBenefits />
                <ProcceedToGamePanel />
            </section>
        </>
    );
};
