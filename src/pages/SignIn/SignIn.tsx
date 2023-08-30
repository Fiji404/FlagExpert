import { ErrorModal } from '@/components';
import { useAuthStore } from '@/store/authStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { Label } from '@radix-ui/react-label';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type FormSchema = z.infer<typeof formSchema>;

const passwordMessagePrefix = 'Password must contain at least';

const formSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: `${passwordMessagePrefix} 8 character(s)` })
        .regex(/^(?=.*\p{Lu}).*$/u, { message: `${passwordMessagePrefix} one uppercase letter` })
        .regex(/^(?=.*\p{Ll}).*$/u, { message: `${passwordMessagePrefix} one lowercase character` })
        .regex(/^(?=.*\d).*$/u, { message: `${passwordMessagePrefix} one digit` })
        .regex(/^(?=.*[@#$%^&+=!]).*$/u, { message: `${passwordMessagePrefix} one special character` })
});

export const SignIn = () => {
    const navigate = useNavigate();
    const { user, session, authError, clearError, signInWithEmail } = useAuthStore();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    });

    const formSubmitHandler: SubmitHandler<FormSchema> = ({ email, password }) => {
        clearError();
        signInWithEmail(email, password);
    };

    useEffect(() => {
        if (user) navigate('/dashboard');
        console.log(user);
    }, [user, navigate]);

    return (
        <main className="flex h-full grow items-center justify-center">
            {authError && <ErrorModal errorText={authError.message} closeModalHandler={clearError} />}
            <form
                onSubmit={handleSubmit(formSubmitHandler)}
                method="post"
                className="flex w-full max-w-[600px] flex-col gap-2 rounded-md border border-[#f1f1f1] bg-[rgb(253,253,253)] px-4 py-6"
            >
                <h2 className="text-center text-4xl font-bold text-black">Sign in</h2>
                <p className="mb-2 text-center text-lg text-[#494949]">
                    Hello there 👋! We're excited to have you back. Please use your credentials to access your account
                    and dive into our platform.
                </p>
                <Label className="form-label">
                    E-mail
                    <input className="form-input" {...register('email')} />
                </Label>
                {errors.email && <ErrorMessage message={errors.email.message} />}
                <Label className="form-label">
                    Password
                    <input className="form-input" type="text" {...register('password')} />
                </Label>
                {errors.password && <ErrorMessage message={errors.password.message} />}
                <div className="mt-6 flex justify-between">
                    <Link
                        className="rounded-md bg-[#edf2ff] px-2 py-1 text-lg font-semibold text-[#0A67CB] hover:bg-[#E6EDFE]"
                        to="/auth/signup"
                    >
                        Create account
                    </Link>
                    <button className="gap-2 rounded-md bg-[#02ba3c16] px-2 text-center text-lg font-semibold text-[#006b3be7] transition-colors hover:bg-[#01a63522] dark:bg-[#152a27] dark:text-[#3CDA8E] dark:hover:bg-[#234742]">
                        Sign in
                    </button>
                </div>
            </form>
        </main>
    );
};
