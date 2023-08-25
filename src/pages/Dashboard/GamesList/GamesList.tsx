import { GameItem } from './GameItem';
import { GiEarthAmerica, GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';

const AVAILABLE_GAMES = [
    {
        name: 'All flags',
        desc: 'In this captivating game mode, embark on a journey to recognize all the flags. Your goal is to identify flags from around the world, spanning diverse cultures and histories. Challenge yourself to master every emblem and become an expert in flag recognition from across the globe.',
        icon: <GiEarthAmerica />,
        status: 'available',
        route: '/game/all-flags'
    },
    {
        name: 'Time challenge',
        desc: "Test your speed and accuracy in the 'Timed Flag Challenge' mode. With the clock ticking, identify as many flags as you can before time runs out. Sharpen your flag knowledge while feeling the rush of beating the countdown!",
        icon: <AiOutlineFieldTime />,
        status: 'in-progress',
        route: ''
    },
    {
        name: 'Random flag',
        desc: 'Test your flag knowledge by identifying a series of randomly displayed flags from around the world. With each flag being a surprise, challenge yourself to decode the symbolism and origin behind them. Sharpen your intuition and broaden your global flag expertise in this thrilling and spontaneous adventure.',
        icon: <GiPerspectiveDiceSixFacesRandom />,
        status: 'in-progress',
        route: ''
    },
    {
        name: 'Flags by continent',
        desc: ' Choose a continent and engage in a targeted flag guessing adventure.Test your flag recognition skills by focusing on a single continent and become a specialist in identifying its flags. This mode offers an enriching exploration of regional diversity and flag symbolism.',
        icon: <FaMapMarkedAlt />,
        status: 'in-progress',
        route: ''
    }
] as const;

export const GamesList = () => {
    return (
        <div className="mx-2 mt-10 flex flex-wrap gap-4">
            {AVAILABLE_GAMES.map(game => (
                <GameItem key={game.name} {...game} />
            ))}
        </div>
    );
};
