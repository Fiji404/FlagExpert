import { Button } from '@/components/UI/Button';
import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';
import { FaGear } from 'react-icons/fa6';
import { FaPowerOff } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const AccountOptions = () => {
    const { signOut, session } = useSupabaseAuthStore();
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ scale: 0.7, translateY: '105%' }}
            animate={{ scale: 1, translateY: '100%' }}
            exit={{ scale: 0 }}
            className="absolute -bottom-1 right-0 translate-y-full rounded-md border bg-white px-3 pb-2 pt-1 shadow-sm dark:border-[#303030] dark:bg-[rgb(19,19,19)]"
        >
            <h2 className="text-center text-xl font-medium dark:text-white">{session?.user.user_metadata.name}</h2>
            <ul className="mt-1 flex flex-col items-center gap-1">
                <li className="w-full">
                    <Button
                        color="default"
                        className="w-full whitespace-nowrap px-2 dark:border-[#303030]"
                        onClick={signOut}
                    >
                        {t('Settings')} <FaGear className="text-gray-600" />
                    </Button>
                </li>
                <li className="w-full">
                    <Button
                        color="default"
                        className="w-full whitespace-nowrap px-2 dark:border-[#303030]"
                        onClick={signOut}
                    >
                        {t('Sign out')} <FaPowerOff className="text-red-500" />
                    </Button>
                </li>
            </ul>
        </motion.div>
    );
};
