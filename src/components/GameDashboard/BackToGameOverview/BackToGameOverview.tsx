import { MdArrowBackIos } from 'react-icons/md';
import { toggleSkippedGameScreen } from '../../../store/slices/starterScreenSlice';
import { useAppDispatch } from '../../../store';
import { Link } from 'react-router-dom';

export const BackToGameOverview = () => {
    const dispatch = useAppDispatch();
    const BackToWelcomeScreenHandler = () => {
        dispatch(toggleSkippedGameScreen());
    };
    return (
        <Link
            to="/"
            onClick={BackToWelcomeScreenHandler}
            className="flex items-center w-max dark:text-white mt-4 ml-4 dark:bg-[#111111] py-1 px-3 rounded-md border dark:border-[#303030] hover:bg-[#e7e7e7] dark:hover:bg-[#1f1f1f] bg-[#fff] text-black border-accentLight "
        >
            <MdArrowBackIos /> Back to overview
        </Link>
    );
};
