import { motion } from 'framer-motion';
import { BiErrorAlt } from 'react-icons/bi';

interface Props {
    errorText: string;
    closeModalHandler(): void;
}

export const ErrorModal = ({ errorText, closeModalHandler }: Props) => {
    return (
        <motion.div
            onClick={closeModalHandler}
            initial={{ opacity: 0, scale: 0.96, translateX: '-50%', translateY: '-2rem' }}
            animate={{ opacity: 1, scale: 1, translateX: '-50%', translateY: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed left-1/2 top-20 z-10 flex cursor-pointer items-center gap-2  rounded-md border border-[#e4e4e4] bg-[rgb(250,250,250)] px-4 py-2 text-black transition-colors dark:border-[#222] dark:bg-[#111] dark:text-white dark:hover:bg-[#1a1a1a]"
        >
            <h2 className="text-center text-xl">{errorText}</h2>
            <BiErrorAlt className="text-2xl text-[#f00]" />
        </motion.div>
    );
};
