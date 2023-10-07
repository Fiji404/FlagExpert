import { ErrorModal } from '@/components';
import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Label } from '@radix-ui/react-label';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as z from 'zod';
import { Link } from '@/components/UI/Link';
import { Button } from '@/components/UI/Button';
import { OAuthProviders } from './OAuthProviders';

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must contain at least 8 character(s)' })
});

export const SignIn = () => {
    const navigate = useNavigate();
    const { user, authError, clearAuthError, signIn } = useSupabaseAuthStore();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    });

    const formSubmitHandler = ({ email, password }: FormSchema) => {
        clearAuthError();
        signIn({ email, password });
    };

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user, navigate]);

    return (
        <main className="flex h-full grow items-center justify-center">
            {authError && <ErrorModal errorText={authError.message} closeModalHandler={clearAuthError} />}
            <form
                onSubmit={handleSubmit(formSubmitHandler)}
                method="post"
                className="flex w-full max-w-[600px] flex-col gap-2 rounded-md border border-[#f1f1f1] bg-[rgb(253,253,253)] px-4 py-6 dark:border-[#202020] dark:bg-[#111]"
            >
                <h2 className="text-center text-4xl font-bold text-black dark:text-white">Sign in</h2>
                <p className="mb-2 text-center text-lg text-[#494949] dark:text-[#969696]">
                    Hello there 👋! We're excited to have you back. Please use your credentials to access your account
                    and dive into our platform.
                </p>
                <Label className="form-label">
                    E-mail
                    <input className="form-input" {...register('email')} />
                </Label>
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                <Label className="form-label">
                    Password
                    <input className="form-input" type="text" {...register('password')} />
                </Label>
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                <div className="mt-6 flex justify-between">
                    <Link to="/auth/signup">Create account</Link>
                    <Button color="green">Sign in</Button>
                </div>
                <div aria-hidden="true" className="mt-4 h-[2px] w-full rounded-full bg-[#eee] dark:bg-[#222222]" />
                <OAuthProviders />
            </form>
        </main>
    );
};
