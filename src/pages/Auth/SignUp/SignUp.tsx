import { ErrorModal } from '@/components';
import { Button } from '@/components/UI/Button';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { useSupabaseAuthStore } from '@/store/supabaseAuthStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Avatars } from './Avatars/Avatars';
import { createPortal } from 'react-dom';
import { SignUpConfirmationModal } from './SignUpConfirmationModal';
import { useState } from 'react';

type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
    name: z.string().min(1, { message: 'This field is required' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must contain at least 8 character(s)' })
});

export const SignUp = () => {
    const { user, session, authError, clearAuthError, signUp } = useSupabaseAuthStore();
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitted }
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    });
    const [isConfirmationModalClosed, setIsConfirmationModalClosed] = useState(false);

    const formSubmitHandler = ({ email, password, name }: FormSchema) => {
        clearAuthError();
        signUp({ email, password, name });
    };

    const closeConfirmationModal = () => {
        setIsConfirmationModalClosed(true);
    };

    return (
        <main className="flex h-full grow items-center justify-center">
            {authError && <ErrorModal errorText={authError.message} closeModalHandler={clearAuthError} />}
            {user &&
                !session &&
                isSubmitted &&
                !isConfirmationModalClosed &&
                createPortal(
                    <SignUpConfirmationModal
                        closeConfirmationModal={closeConfirmationModal}
                        emailToConfirm={getValues().email}
                    />,
                    document.body
                )}
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
                <Label className="form-label">Avatar</Label>
                <Avatars />
                <Label className="form-label">
                    Username
                    <input className="form-input" {...register('name')} />
                </Label>
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
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
