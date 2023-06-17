import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
    WelcomeScreenIgnoranceOptions,
    getScreenIgnoranceFromLS,
    setScreenIgnoranceToLS,
    toggleSkippedGameScreen
} from '../../store/slices/starterScreenSlice';
import { useAppDispatch } from '../../store';

export const ProcceedToGamePanel = () => {
    const ignoreWelcomeScreenChecbox = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const proceedToQuizHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const isWelcomeScreenIgnored = String(ignoreWelcomeScreenChecbox.current?.checked);
        if (isWelcomeScreenIgnored !== 'undefined')
            dispatch(setScreenIgnoranceToLS(isWelcomeScreenIgnored as WelcomeScreenIgnoranceOptions));
        dispatch(toggleSkippedGameScreen());
    };
    useEffect(() => {
        dispatch(getScreenIgnoranceFromLS());
    }, [dispatch]);

    return (
        <motion.form
            onSubmit={proceedToQuizHandler}
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: 2 }}
            className="mt-16 mb-10 flex justify-end gap-4 max-w-[95%]"
        >
            <label className="flex gap-1 text-sm items-center text-lightAccent">
                Don't show me this again
                <input ref={ignoreWelcomeScreenChecbox} className="input-checkbox" type="checkbox" />
            </label>
            <button className="flex items-center bg-[#32e02c] py-1 px-3 rounded-md text-xl text-[#094207] hover:bg-[#4fff19] transition-colors">
                Next <MdOutlineArrowForwardIos />
            </button>
        </motion.form>
    );
};
