import { NavThemeBtn } from './NavThemeBtn/NavThemeBtn';

export const Nav = () => {
    return (
        <nav className="flex justify-end py-3 px-6 border-b border-[#222222] bg-[rgba(17,17,17,0.35)] backdrop-blur-[1px]">
            <NavThemeBtn />
        </nav>
    );
};
