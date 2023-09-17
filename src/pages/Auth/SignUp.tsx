import { ErrorModal } from '@/components';
import { Button } from '@/components/UI/Button';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
    name: z.string().min(1, { message: 'This field is required' }),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must contain at least 8 character(s)' })
});

export const SignUp = () => {
    const { authError, clearAuthError, signUp } = useSupabaseAuthStore();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    });

    const formSubmitHandler = ({ email, password, name }: FormSchema) => {
        clearAuthError();
        signUp({ email, password, name });
    };

    return (
        <main className="flex h-full grow items-center justify-center">
            {authError && <ErrorModal errorText={authError.message} closeModalHandler={clearAuthError} />}
            <form
                onSubmit={handleSubmit(formSubmitHandler)}
                method="post"
                className="flex w-full max-w-[600px] flex-col gap-2 rounded-md border border-[#f1f1f1] bg-[rgb(253,253,253)] px-4 py-6 dark:border-[#313131] dark:bg-[#111]"
            >
                <h2 className="text-center text-4xl font-bold text-black dark:text-white">Sign in</h2>
                <p className="mb-2 text-center text-lg text-[#494949] dark:text-[#969696]">
                    Hello there 👋! We're excited to have you back. Please use your credentials to access your account
                    and dive into our platform.
                </p>
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <Label className="form-label">
                            Name
                            <input className="form-input" {...register('name')} />
                        </Label>
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </div>
                    <Label className="form-label">
                        Last name (optional)
                        <input className="form-input" {...register('lastName')} />
                    </Label>
                </div>
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
                <Button color="green" className="mt-6">
                    Sign up
                </Button>
            </form>
        </main>
    );
};
