import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { BiError } from 'react-icons/bi';

interface Props {
    errorText: string;
    closeModalHandler(): void;
}

interface ErrorDetails {
    title: string;
    description: string;
}

const SUPABASE_FRIENDLY_ERROR_NAMES: Record<string, ErrorDetails> = {
    'TypeError: Failed to fetch': {
        title: 'Network Error',
        description:
            'There seems to be an issue with communicating with the server. Please check your internet connection and try again.'
    }
};

export const ErrorModal = ({ errorText, closeModalHandler }: Props) => {
    return createPortal(
        <motion.div
            onClick={closeModalHandler}
            initial={{ opacity: 0, scale: 0.96, translateX: '-50%', translateY: '-2rem' }}
            animate={{ opacity: 1, scale: 1, translateX: '-50%', translateY: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed left-1/2 top-20 z-10 flex w-[calc(100%-1.5rem)] max-w-[600px] cursor-pointer flex-col items-center gap-2 rounded-md border border-[#FCDCDC] bg-[#FFF7F7] px-4 py-2 text-[#742F39] transition-colors hover:bg-[#f8eeee] dark:border-[#741B25] dark:bg-[#291619] dark:text-[#C69FA5] dark:hover:bg-[#351c20]"
        >
            <h2 className="flex items-center gap-2 text-center text-xl">
                <BiError className="text-3xl dark:text-[#ff6179]" />
                {SUPABASE_FRIENDLY_ERROR_NAMES[errorText]?.title || errorText}
            </h2>
            {SUPABASE_FRIENDLY_ERROR_NAMES[errorText] && (
                <p className="text-center text-[#742f39d0] dark:text-[#c69fa5da]">
                    {SUPABASE_FRIENDLY_ERROR_NAMES[errorText].description}
                </p>
            )}
        </motion.div>,
        document.body
    );
};
