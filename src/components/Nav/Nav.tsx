import { useSessionStore } from '@/store/sessionStore';
import { Logo, ToggleThemeBtn } from './';
import { useEffect, useState } from 'react';
import { HamburgerBtn } from './HamburgerBtn';
import { NavList } from './NavList';

export const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { session, getSession } = useSessionStore();

    useEffect(() => {
        getSession();
    }, [getSession]);

    const toggleNavHandler = () => {
        setIsNavExpanded(isExpanded => !isExpanded);
    };

    return (
        <nav className="sticky top-0 z-10 flex justify-between border-b border-[#F0F0F0] bg-[rgba(255,255,255,0.85)] px-5 py-3 backdrop-blur-sm dark:border-[#2A2A2A] dark:bg-[rgba(17,17,17,0.91)] flex-col sm:flex-row sm:items-center">
            <div className='grow flex justify-between'>
                <Logo />
                <NavList session={session} className="hidden sm:flex" />
                <ul className="flex items-center gap-2">
                    <HamburgerBtn onClick={toggleNavHandler} />
                    <ToggleThemeBtn />
                </ul>
            </div>
            {isNavExpanded && <NavList session={session} className="ml-0 mt-4 mr-0 flex justify-between sm:hidden" />}
        </nav>
    );
};
