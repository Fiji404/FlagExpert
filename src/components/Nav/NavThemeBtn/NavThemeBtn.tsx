import { BsFillMoonStarsFill } from 'react-icons/bs';

export const NavThemeBtn = () => {
    return (
        <button aria-label="Theme toggle button">
            <BsFillMoonStarsFill className="text-white text-2xl border border-[#414141] p-2 box-content rounded-md" />
        </button>
    );
};
