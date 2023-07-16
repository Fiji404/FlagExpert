import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
    WelcomeScreenIgnoranceOptions,
    getScreenIgnoranceFromLS,
    setScreenIgnoranceToLS,
    toggleSkippedGameScreen
} from '../../../store/slices/starterScreenSlice';
import { useAppDispatch } from '../../../store';
import { Link } from 'react-router-dom';

export const ProcceedToGame = () => {
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
            <label className="flex gap-1 text-sm items-center text-accentDark">
                Don't show me this again
                <input ref={ignoreWelcomeScreenChecbox} className="input-checkbox " type="checkbox" />
            </label>
            <Link
                to="/game"
                className="flex items-center dark:bg-[rgb(19,19,19)] bg-[#ffffff] border border-accentLight dark:border-[#242424] py-1 px-3 rounded-md text-xl dark:text-[#fff] text-[#000] hover:bg-[#e7e7e7] dark:hover:bg-[rgb(27,27,27)]"
            >
                Next <MdOutlineArrowForwardIos />
            </Link>
        </motion.form>
    );
};
