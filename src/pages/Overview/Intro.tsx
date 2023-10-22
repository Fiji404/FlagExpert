import { Heading } from '@/components';
import { useTranslation } from 'react-i18next';

export const Intro = () => {
    const { t } = useTranslation();
    return (
        <header>
            <Heading className="mt-20">Welcome to Flaggy</Heading>
            <p className="mx-auto mt-8 max-w-[1020px] animate-[originate_500ms_300ms_forwards] text-center text-xl text-accentDark opacity-0">
                {t(
                    'Flaggy enables users to guess flags by their images. By recognizing shapes, colors, and symbols on the flags, users can identify the corresponding countries. The app offers varying levels of difficulty and features to enhance the overall flag-guessing experience.'
                )}
            </p>
        </header>
    );
};
