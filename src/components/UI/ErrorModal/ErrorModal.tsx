import { motion } from 'framer-motion';
import { BiErrorAlt } from 'react-icons/bi';

interface Props {
    errorText: string;
    onClick(): void;
}

export const ErrorModal = ({ errorText, onClick }: Props) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.96, translateX: '-50%', translateY: '-2rem' }}
            animate={{ opacity: 1, scale: 1, translateX: '-50%', translateY: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            className="flex items-center gap-2 fixed top-20 bg-[rgb(250,250,250)] dark:bg-[#111] dark:text-white  py-2 px-4 border border-[#e4e4e4] dark:border-[#222] rounded-md left-1/2 z-10 text-black cursor-pointer dark:hover:bg-[#1a1a1a] transition-colors"
        >
            <h2 className="text-xl text-center">{errorText}</h2>
            <BiErrorAlt className="text-2xl text-[#f00]" />
        </motion.div>
    );
};
