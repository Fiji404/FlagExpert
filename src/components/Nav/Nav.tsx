import { Logo, ToggleThemeBtn } from './';
import { useEffect, useState } from 'react';
import { HamburgerBtn } from './HamburgerBtn';
import { NavList } from './NavList';
import { useSupabaseAuthStore } from '@/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { LangBtn } from './LangBtn';
import { AnimatePresence } from 'framer-motion';

export const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { session, getSession } = useSupabaseAuthStore();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getSession();
    }, [getSession]);

    useEffect(() => {
        if (location.pathname.includes('/auth') && session?.user) navigate('/dashboard');
    }, [location, session, navigate]);

    useEffect(() => {
        setIsNavExpanded(false);
    }, [location]);

    const toggleNavHandler = () => {
        setIsNavExpanded(isExpanded => !isExpanded);
    };

    return (
        <nav className="sticky top-0 z-10 flex flex-col justify-between border-b border-[#F0F0F0] bg-[rgba(255,255,255,0.85)] px-5 py-3 backdrop-blur-sm dark:border-[#2A2A2A] dark:bg-[rgba(17,17,17,0.91)] sm:flex-row sm:items-center">
            <div className="flex grow justify-between">
                <Logo />
                <NavList session={session} className="hidden sm:flex" />
                <ul className="flex items-center gap-2">
                    <LangBtn />
                    <HamburgerBtn onClick={toggleNavHandler} />
                    <ToggleThemeBtn />
                </ul>
            </div>
            <AnimatePresence>
                {isNavExpanded && (
                    <NavList
                        key="nav-list"
                        session={session}
                        className="ml-0 mr-0 mt-4 flex justify-between sm:hidden"
                    />
                )}
            </AnimatePresence>
        </nav>
    );
};
