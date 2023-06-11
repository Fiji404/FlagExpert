import { GameBenefits } from './GameBenefits/GameBenefits';
import { motion } from 'framer-motion';
import { AiFillFlag } from 'react-icons/ai';
import { GoToAppPanel } from '../GoToAppPanel/GoToAppPanel';

export const GameOverview = () => {
    return (
        <>
            <header>
                <motion.h1
                    className="flex justify-center items-center gap-2 text-center mt-20 text-7xl font-bold"
                    initial={{ translateY: '-100%', opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                >
                    Welcome to flaggy <AiFillFlag className="text-[#328bff] text-[3.5rem]" />
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mx-auto text-center mt-8 text-xl max-w-[1020px] text-lightAccent"
                >
                    Flaggy enables users to guess flags by their images. By recognizing shapes, colors, and symbols on
                    the flags, users can identify the corresponding countries. The app offers varying levels of
                    difficulty and features to enhance the overall flag-guessing experience.
                </motion.p>
            </header>
            <GameBenefits />
            <GoToAppPanel />
        </>
    );
};
