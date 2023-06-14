import { GameBenefits } from './GameBenefits/GameBenefits';
import { motion } from 'framer-motion';
import { AiFillFlag } from 'react-icons/ai';
import { GoToAppPanel } from '../ProcceedToGamePanel/GoToAppPanel';

export const GameOverview = () => {
    return (
        <>
            <header>
                <motion.h1
                    className="flex justify-center items-center gap-2 text-center mt-20 text-7xl font-bold text-white"
                    initial={{ translateY: '-200%' }}
                    animate={{ translateY: 0, opacity: 1 }}
                >
                    Welcome to flaggy <AiFillFlag className="text-[#32e02c] text-[3.5rem]" />
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
