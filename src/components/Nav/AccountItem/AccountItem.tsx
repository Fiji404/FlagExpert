import { User } from '@supabase/supabase-js';
import { Button } from '../../UI/Button';
import { AccountOptions } from './AccountOptions';
import { useState } from 'react';

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
            <Button color="default" className='py-1' onClick={accountItemClickHandler}>
                <img className="max-w-[25px] rounded-full" src={user.user_metadata.picture} />
                {user.user_metadata.name}
            </Button>
            {isOptionsExpanded && <AccountOptions />}
        </>
    );
};
