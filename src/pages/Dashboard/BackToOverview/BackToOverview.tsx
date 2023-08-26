import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const BackToOverview = () => {
    return (
        <Link to="/" className="button-primary ml-3 mt-3 w-max">
            <BsArrowLeft className="text-[#2C4D3F] dark:text-[#3CDA8E]" /> Back to overview
        </Link>
    );
};
