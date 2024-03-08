import { Button } from '@/components/UI/Button';
import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';
import { FaGear } from 'react-icons/fa6';
import { FaPowerOff } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const AccountOptions = () => {
    const { signOut, session } = useSupabaseAuthStore();
    const { t } = useTranslation();

    const [isSingingOut, setIsSingingOut] = useState(false);

    const signOutHandler = () => {
        setIsSingingOut(true);
        signOut();
    };

    return (
        <motion.div
            initial={{ scale: 1.05, translateY: '110%' }}
            animate={{ scale: 1, translateY: '100%' }}
            exit={{ scale: 1.05, translateY: '110%', opacity: 0 }}
            className="absolute -bottom-1 right-0 translate-y-full rounded-md border bg-white px-3 pb-2 pt-1 shadow-sm dark:border-[#303030] dark:bg-[rgb(19,19,19)]"
        >
            {isSingingOut && (
                <div className="absolute inset-0 flex items-center justify-center rounded-md bg-[#cccccce7] dark:bg-[#161616ef]">
                    <span className="block h-10 w-10 animate-spin rounded-full border-4 border-[#000] border-t-transparent dark:border-[#fff] dark:border-t-transparent"></span>
                </div>
            )}
            <h2 className="text-center text-2xl font-medium dark:text-white">{session?.user.user_metadata.name}</h2>
            <ul className="mt-1 flex flex-col items-center gap-1">
                <li className="w-full">
                    <Button color="default" className="w-full whitespace-nowrap border-[#eeeeee] px-2">
                        {t('Settings')} <FaGear className="text-gray-600" />
                    </Button>
                </li>
                <li className="w-full">
                    <Button
                        color="default"
                        className="w-full whitespace-nowrap border-[#eeeeee] px-2"
                        onClick={signOutHandler}
                    >
                        {t('Sign out')} <FaPowerOff className="text-red-500" />
                    </Button>
                </li>
            </ul>
        </motion.div>
    );
};
