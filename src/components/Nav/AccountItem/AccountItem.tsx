import { User } from '@supabase/supabase-js';
import { Button } from '../../UI/Button';
import { AccountOptions } from './AccountOptions';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence } from 'framer-motion';

interface Props {
    user: User;
}

export const AccountItem = ({ user }: Props) => {
    const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

    const accountItemClickHandler = () => {
        setIsOptionsExpanded(isOptionsExpanded => !isOptionsExpanded);
    };
    return (
        <>
            <Button className="py-1 focus:outline-none" onClick={accountItemClickHandler}>
                <img
                    className={twMerge(
                        `max-w-[30px] rounded-full shadow-red-200 transition-shadow hover:shadow-[#ccc_0px_0px_0px_5px] dark:hover:shadow-[#222_0px_0px_0px_5px] ${
                            isOptionsExpanded && 'shadow-[#ccc_0px_0px_0px_5px] dark:shadow-[#222_0px_0px_0px_5px]'
                        }`
                    )}
                    src={user.user_metadata.avatar_url}
                />
            </Button>
            <AnimatePresence>{isOptionsExpanded && <AccountOptions />}</AnimatePresence>
        </>
    );
};
