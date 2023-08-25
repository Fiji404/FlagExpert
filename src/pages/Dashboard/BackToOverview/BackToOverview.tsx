import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const BackToOverview = () => {
    return (
        <Link
            to="/"
            className="ml-4 mt-4 flex w-max items-center rounded-md border border-accentLight bg-[#fff] px-3 py-1 text-black 
            transition-colors hover:bg-[#e7e7e7] dark:border-[#303030] dark:bg-[#111111] dark:text-white dark:hover:bg-[#1f1f1f]"
        >
            <MdArrowBackIos /> Back to overview
        </Link>
    );
};
