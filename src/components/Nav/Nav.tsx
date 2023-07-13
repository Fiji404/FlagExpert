import { ToggleThemeBtn } from './ToggleThemeBtn/ToggleThemeBtn';

export const Nav = () => {
    return (
        <nav className="top-0 sticky z-10 flex justify-end py-3 px-6 border-b bg-[rgb(255,255,255)] dark:border-[#222] dark:bg-[rgba(17,17,17,0.69)] backdrop-blur-sm">
            <ToggleThemeBtn />
        </nav>
    );
};
