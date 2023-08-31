import { Link } from '../UI/Link';
import { Logo, ToggleThemeBtn } from './';

const navLinks = [
    { text: 'Home', route: '/' },
    { text: 'Dashboard', route: '/dashboard' },
    { text: 'Sign in', route: '/auth/signin' }
];

export const Nav = () => {
    return (
        <nav
            className="sticky top-0 z-10 flex items-center border-b border-[#F0F0F0] bg-[rgba(255,255,255,0.85)] px-5 py-3 backdrop-blur-sm dark:border-[#2A2A2A] dark:bg-[rgba(17,17,17,0.91)]"
        >
            <Logo />
            <ul className="ml-auto mr-4 flex items-center gap-2">
                {navLinks.map(({ text, route }) => (
                    <Link key={text} to={route}>
                        {text}
                    </Link>
                ))}
            </ul>
            <ToggleThemeBtn />
        </nav>
    );
};
