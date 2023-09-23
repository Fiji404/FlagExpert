import { Button } from '@/components/UI/Button';
import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';

export const AccountOptions = () => {
    const { signOut } = useSupabaseAuthStore();
    return (
        <ul
            className="absolute -bottom-1 left-1/2 flex w-[calc(100%+4rem)] -translate-x-1/2 translate-y-full flex-col items-center gap-2 rounded-md bg-[rgb(245,245,245)]
        px-4 py-2 dark:bg-[#141414]"
        >
            <li className="w-full">
                <Button color="default" className="w-full whitespace-nowrap bg-[#222] px-2" onClick={signOut}>
                    Sign out
                </Button>
            </li>
        </ul>
    );
};
