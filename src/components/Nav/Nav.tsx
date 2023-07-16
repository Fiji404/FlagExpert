import { Outlet } from 'react-router-dom';
import { Logo } from './Logo/Logo';
import { ToggleThemeBtn } from './ToggleThemeBtn/ToggleThemeBtn';

export const Nav = () => {
    return (
        <>
            <nav className="top-0 sticky z-10 flex justify-between py-3 px-6 border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.85)] dark:border-[#222] dark:bg-[rgba(17,17,17,0.69)] backdrop-blur-sm">
                <Logo />
                <ToggleThemeBtn />
            </nav>
            <Outlet />
        </>
    );
};
