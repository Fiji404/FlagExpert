import { twMerge } from 'tailwind-merge';
import { Link } from '../UI/Link';
import { AccountItem } from './AccountItem/AccountItem';
import { Session } from '@supabase/supabase-js';

interface Props {
    className: string;
    session: Session | null;
}

export const NavList = ({ session, className }: Props) => {
    return (
        <ul className={twMerge('ml-auto mr-4 items-center gap-2', className)}>
            <li className="grow">
                <Link to="/">Home</Link>
            </li>
            <li className="grow">
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="relative grow">
                {session ? <AccountItem user={session.user} /> : <Link to="/auth/signin">Sign in</Link>}
            </li>
        </ul>
    );
};
