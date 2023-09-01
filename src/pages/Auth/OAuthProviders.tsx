import { supabase } from '@/supabase';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/UI/Button';

type AuthProvider = 'google' | 'github';

export const OAuthProviders = () => {
    const googleAuthHandler = async (provider: AuthProvider) => {
        const { data, error } = await supabase.auth.signInWithOAuth({ provider });
        console.log(data, error);
    };

    return (
        <ul className="mx-auto mt-4 flex w-full max-w-[350px] flex-col items-center gap-2">
            <Button color="default" type="button" onClick={() => googleAuthHandler('google')} className="w-full">
                <FcGoogle /> Continue with Google
            </Button>
            <Button color="default" type="button" onClick={() => googleAuthHandler('github')} className="w-full">
                <FaGithub /> Continue with Github
            </Button>
        </ul>
    );
};
