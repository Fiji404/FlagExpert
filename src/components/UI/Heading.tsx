import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

interface Props {
    children: string;
    className?: string;
}

export const Heading = ({ children, className }: Props) => {
    const { t } = useTranslation();
    return (
        <motion.h2
            initial={{ translateY: '-200%', opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className={twMerge('text-center text-7xl font-bold text-black dark:text-white', className)}
        >
            {t(children)}
        </motion.h2>
    );
};
