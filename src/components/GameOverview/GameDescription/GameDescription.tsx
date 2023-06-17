import { motion } from 'framer-motion';

export const GameDescription = () => {
    return (
        <motion.p
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto text-center mt-8 text-xl max-w-[1020px] text-lightAccent"
        >
            Flaggy enables users to guess flags by their images. By recognizing shapes, colors, and symbols on the
            flags, users can identify the corresponding countries. The app offers varying levels of difficulty and
            features to enhance the overall flag-guessing experience.
        </motion.p>
    );
};
