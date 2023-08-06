import { GameType } from './GameType/GameType';
import { GiEarthAmerica, GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';

const GAME_TYPES = [
    { type: 'All flags', icon: <GiEarthAmerica />, route: '/game/all-flags' },
    { type: 'Time challenge', icon: <AiOutlineFieldTime />, route: '/game/time-challenge' },
    { type: 'Random flag', icon: <GiPerspectiveDiceSixFacesRandom />, route: '/game/random-flag' },
    { type: 'Flags by continent', icon: <FaMapMarkedAlt />, route: '/game/flags-by-continent' }
];

export const GameTypes = () => {
    return (
        <>
            <div className="flex justify-center flex-wrap mt-10 gap-4">
                {GAME_TYPES.map(gameType => (
                    <GameType key={gameType.type} gameType={gameType} />
                ))}
            </div>
        </>
    );
};
