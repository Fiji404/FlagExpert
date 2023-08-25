import { Logo, ToggleThemeBtn } from './';

export const Nav = () => {
    return (
        <nav className="sticky top-0 z-10 flex justify-between border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.85)] px-6 py-3 backdrop-blur-sm dark:border-[#222] dark:bg-[rgba(17,17,17,0.69)]">
            <Logo />
            <ToggleThemeBtn />
        </nav>
    );
};
