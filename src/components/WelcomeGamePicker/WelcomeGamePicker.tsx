import { TypesOfGames } from "./TypesOfGames/TypesOfGames";

export const WelcomeGamePicker = () => {
    return (
        <header className="w-[90%] mx-auto mt-10">
            <h1 className="text-center text-3xl font-bold">What type of game you want to play?</h1>
            <TypesOfGames />
        </header>
    );
};
