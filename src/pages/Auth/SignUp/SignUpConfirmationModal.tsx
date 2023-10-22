import { Backdrop } from '@/components';
import { supabase } from '@/supabase';
import { Trans, useTranslation } from 'react-i18next';
import { IoIosMail, IoMdClose } from 'react-icons/io';

interface Props {
    emailToConfirm: string;
    closeConfirmationModal(): void;
}

export const SignUpConfirmationModal = ({ closeConfirmationModal, emailToConfirm }: Props) => {
    const { t } = useTranslation();
    const resendEmailConfirmation = () => {
        supabase.auth.resend({
            type: 'signup',
            email: emailToConfirm
        });
    };

    return (
        <>
            <Backdrop onClick={closeConfirmationModal} />
            <div className="modal-shadow dark:modal-shadow-dark fixed left-1/2 top-1/2 z-20 w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-3 dark:bg-[#18191b]">
                <button
                    onClick={closeConfirmationModal}
                    className="ml-auto block rounded-full transition-colors hover:bg-[#dfdfdf] dark:hover:bg-[#34363a]"
                >
                    <IoMdClose className=" text-3xl text-black dark:text-white" />
                </button>
                <IoIosMail className="mx-auto text-9xl text-[#4dd15f] dark:text-[#5ce96f]" />
                <h2 className="text-center text-4xl font-semibold text-[#000000] dark:text-white">
                    {t('Email confirmation')}
                </h2>
                <p className="mt-4 text-center text-[#4b4b4b] dark:text-[#ccc]">
                    <Trans
                        i18nKey="emailConfirmMsg"
                        values={{ emailToConfirm }}
                        components={{ 1: <span className="text-[#4dd15f] dark:text-[#5ce96f]" /> }}
                    >
                        {`We have sent email to <1>{{emailToConfirm}}</1> to confirm the validity of your email address. After recieving the email follow the link provided to complete registration`}
                    </Trans>
                </p>
                <p className="mt-5 border-t border-[#cfcfcf] pt-3 text-center text-[#4b4b4b] dark:border-[#3b3b3b] dark:text-[#ccc]">
                    {t('If you not get any confirmation email')}{' '}
                    <button onClick={resendEmailConfirmation} className="text-[#1276E2] hover:underline">
                        {t('Resend confirmation email')}
                    </button>
                </p>
            </div>
        </>
    );
};
