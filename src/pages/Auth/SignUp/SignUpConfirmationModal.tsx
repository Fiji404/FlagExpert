import { Backdrop } from '@/components';
import { supabase } from '@/supabase';
import { IoIosMail, IoMdClose } from 'react-icons/io';

interface Props {
    emailToConfirm: string;
    closeConfirmationModal(): void;
}

export const SignUpConfirmationModal = ({ closeConfirmationModal, emailToConfirm }: Props) => {
    const resendEmailConfirmation = () => {
        supabase.auth.resend({
            type: 'signup',
            email: emailToConfirm
        });
    };

    return (
        <>
            <Backdrop onClick={closeConfirmationModal} />
            <div className="modal-shadow fixed left-1/2 top-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#18191b] p-3">
                <button
                    onClick={closeConfirmationModal}
                    className="ml-auto block rounded-full transition-colors hover:bg-[#34363a]"
                >
                    <IoMdClose className=" text-3xl text-white" />
                </button>
                <IoIosMail className="mx-auto text-9xl text-[#5ce96f]" />
                <h2 className="text-center text-4xl font-semibold text-white">Email confirmation</h2>
                <p className="mt-4 text-center text-[#ccc]">
                    We have sent email to <span className="text-[#5ce96f]">{emailToConfirm}</span> {false} to confirm
                    the validity of your email address. After recieving the email follow the link provided to complete
                    registration
                </p>
                <p className="mt-5 border-t border-[#3b3b3b] pt-3 text-center text-[#ccc]">
                    If you not get any confirmation email{' '}
                    <button onClick={resendEmailConfirmation} className="text-[#1276E2] hover:underline">
                        Resend confirmation email
                    </button>
                </p>
            </div>
        </>
    );
};
