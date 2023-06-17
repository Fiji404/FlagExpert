import { MdArrowBackIos } from 'react-icons/md';
import { toggleSkippedGameScreen } from '../../../store/slices/starterScreenSlice';
import { useAppDispatch } from '../../../store';

export const BackToWelcomeScreenBtn = () => {
    const dispatch = useAppDispatch();
    const BackToWelcomeScreenHandler = () => {
        dispatch(toggleSkippedGameScreen());
    };
    return (
        <button
            onClick={BackToWelcomeScreenHandler}
            className="flex items-center  text-white mt-4 ml-4 bg-[#111111] py-1 px-3 rounded-md border border-[#303030] hover:bg-[#1f1f1f] transition-colors"
        >
            <MdArrowBackIos /> Back to overview
        </button>
    );
};
