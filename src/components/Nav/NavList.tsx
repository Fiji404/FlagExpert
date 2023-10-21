import { twMerge } from 'tailwind-merge';
import { Link } from '../UI/Link';
import { AccountItem } from './AccountItem/AccountItem';
import { Session } from '@supabase/supabase-js';
import { useTranslation } from 'react-i18next';

interface Props {
    className: string;
    session: Session | null;
}

export const NavList = ({ session, className }: Props) => {
    const { t } = useTranslation();
    return (
        <ul className={twMerge('ml-auto mr-4 items-center gap-2', className)}>
            <li className="grow">
                <Link to="/">{t("Home")}</Link>
            </li>
            <li className="grow">
                <Link to="/dashboard">{t("Dashboard")}</Link>
            </li>
            <li className="relative grow">
                {session ? <AccountItem user={session.user} /> : <Link to="/auth/signin">{t("Sign in")}</Link>}
            </li>
        </ul>
    );
};
