import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Intro = () => {
    const { t } = useTranslation();
    return (
        <header>
            <motion.h2
                className="mt-20 text-center text-7xl font-bold text-black dark:text-white"
                initial={{ translateY: '-200%', opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
            >
                {t('Welcome to Flaggy')}
            </motion.h2>
            <p className="mx-auto mt-8 max-w-[1020px] animate-[originate_500ms_300ms_forwards] text-center text-xl text-accentDark opacity-0">
                {t(
                    'Flaggy enables users to guess flags by their images. By recognizing shapes, colors, and symbols on the flags, users can identify the corresponding countries. The app offers varying levels of difficulty and features to enhance the overall flag-guessing experience.'
                )}
            </p>
        </header>
    );
};
