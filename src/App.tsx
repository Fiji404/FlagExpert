import { useAppSelector } from './store/index';
import { Nav, WelcomeGamePicker, GameOverview } from './components';

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
