import { Game } from './Game';
import { GiEarthAmerica, GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';

const GAMES = [
    { name: 'All flags', icon: <GiEarthAmerica />, route: '/game/all-flags' },
    { name: 'Time challenge', icon: <AiOutlineFieldTime />, route: '/game/time-challenge' },
    { name: 'Random flag', icon: <GiPerspectiveDiceSixFacesRandom />, route: '/game/random-flag' },
    { name: 'Flags by continent', icon: <FaMapMarkedAlt />, route: '/game/flags-by-continent' }
];

export const Games = () => {
    return (
        <div className="grid grid-cols-2 w-[95%] max-w-[1200px] mx-auto flex-wrap mt-10 gap-4">
            {GAMES.map(game => (
                <Game key={game.name} game={game} />
            ))}
        </div>
    );
};
