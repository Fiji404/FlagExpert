import { Link } from 'react-router-dom';
import { Logo, ToggleThemeBtn } from './';

export const Nav = () => {
    return (
        <nav className="sticky top-0 z-10 flex justify-between border-b border-[#F0F0F0] bg-[rgba(255,255,255,0.85)] px-5 py-3 backdrop-blur-sm dark:border-[#2A2A2A] dark:bg-[rgba(17,17,17,0.69)]">
            <Logo />
            <div className='flex items-center'>
                <Link className='button-primary text-xs mr-2' to="/auth/signin">Sign in</Link>
                <ToggleThemeBtn />
            </div>
        </nav>
    );
};
