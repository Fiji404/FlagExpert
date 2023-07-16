import { motion } from 'framer-motion';

export const WelcomeHeading = () => {
    return (
        <motion.h1
            className="flex justify-center items-center gap-2 text-center mt-20 text-7xl font-bold text-black dark:text-white"
            initial={{ translateY: '-200%' }}
            animate={{ translateY: 0, opacity: 1 }}
        >
            Welcome to Flaggy 
        </motion.h1>
    );
};
