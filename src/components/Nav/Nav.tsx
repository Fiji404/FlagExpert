import { useSessionStore } from '@/store/sessionStore';
import { Link } from '../UI/Link';
import { Logo, ToggleThemeBtn } from './';
import { useEffect } from 'react';
import { AccountItem } from './AccountItem/AccountItem';

export const Nav = () => {
    const { session, getSession } = useSessionStore();
    console.log(session);

    useEffect(() => {
        getSession();
    }, [getSession]);

    return (
        <nav className="sticky top-0 z-10 flex items-center border-b border-[#F0F0F0] bg-[rgba(255,255,255,0.85)] px-5 py-3 backdrop-blur-sm dark:border-[#2A2A2A] dark:bg-[rgba(17,17,17,0.91)]">
            <Logo />
            <ul className="ml-auto mr-4 flex items-center gap-2">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="relative">
                    {session?.user ? <AccountItem user={session.user} /> : <Link to="/auth/signin">Sign in</Link>}
                </li>
            </ul>
            <ToggleThemeBtn />
        </nav>
    );
};
