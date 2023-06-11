import { TypeOfGameBtn } from "./TypeOfGame/TypeOfGameBtn";

const GAME_TYPES = ["Guess all flags", "Time challenge mode", "Random flag mode", "Flags by continental"];

export const TypesOfGames = () => {
    return (
        <>
            <div className="flex justify-center mt-10 gap-4">
                {GAME_TYPES.map(gameTypeName => (
                    <TypeOfGameBtn gameTypeName={gameTypeName} />
                ))}
            </div>
        </>
    );
};
