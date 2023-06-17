import { BackToWelcomeScreenBtn } from './BackToWelcomeScreenBtn/BackToWelcomeScreenBtn';
import { TypesOfGames } from './TypesOfGames/TypesOfGames';

export const WelcomeGamePicker = () => {
    return (
        <>
            <BackToWelcomeScreenBtn />
            <header className="w-[90%] mx-auto mt-12">
                <h1 className="text-center text-4xl font-bold text-white">What type of game you want to play?</h1>
                <TypesOfGames />
            </header>
        </>
    );
};
