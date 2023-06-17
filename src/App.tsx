import { WelcomeGamePicker } from './components/WelcomeGamePicker/WelcomeGamePicker';
import { GameOverview } from './components/GameOverview/GameOverview';
import { useAppSelector } from './store/index';
import { Nav } from './components/Nav/Nav';

export const App = () => {
    const isWelcomeScreenIgnored = useAppSelector(state => state.starterScreen.isWelcomeScreenIgnored);
    const isWelcomeScreenSkipped = useAppSelector(state => state.starterScreen.isSkippedToGameScreen);
    return (
        <>
            <Nav />
            {isWelcomeScreenSkipped || isWelcomeScreenIgnored === 'true' ? <WelcomeGamePicker /> : <GameOverview />}
        </>
    );
};
