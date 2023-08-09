import { motion } from 'framer-motion';

export const Intro = () => {
    return (
        <header className="px-2">
            <motion.h1
                className="text-center mt-20 text-7xl font-bold text-black dark:text-white"
                initial={{ translateY: '-200%', opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
            >
                Welcome to Flaggy
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="mx-auto text-center mt-8 text-xl max-w-[1020px] text-accentDark"
            >
                Flaggy enables users to guess flags by their images. By recognizing shapes, colors, and symbols on the
                flags, users can identify the corresponding countries. The app offers varying levels of difficulty and
                features to enhance the overall flag-guessing experience.
            </motion.p>
        </header>
    );
};
