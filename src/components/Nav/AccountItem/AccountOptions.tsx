import { Button } from '@/components/UI/Button';
import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';

export const AccountOptions = () => {
    const { signOut } = useSupabaseAuthStore();
    return (
        <ul className="absolute flex w-full flex-col items-center gap-2 rounded-md bg-[#141414] px-2 py-1">
            <li className="w-full">
                <Button color="default" className="w-full bg-[#222]" onClick={signOut}>
                    Sign out
                </Button>
            </li>
        </ul>
    );
};
