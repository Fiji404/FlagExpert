import { useEffect, useState } from 'react';
import { Button } from '../UI/Button';
import { IoLanguage } from 'react-icons/io5';
import i18next from 'i18next';
import { LangDetails, LangOption } from './LangOption';
import usaIcon from '@/assets/icons/usa.svg';
import plIcon from '@/assets/icons/pl.svg';

export type SiteLang = 'en' | 'pl';

const LANGUAGES = [
    { lang: 'en', iconPath: usaIcon, iconAlt: 'USA flag' },
    { lang: 'pl', iconPath: plIcon, iconAlt: 'Poland flag' }
] as LangDetails[];

export const LangBtn = () => {
    const [isLangOptionsActive, setIsLangOptionsActive] = useState(false);
    const [userLang, setUserLang] = useState<SiteLang>();

    const langBtnClickHandler = () => {
        setIsLangOptionsActive(isOptionsActive => !isOptionsActive);
    };

    const chooseLangHandler = (chosenLang: SiteLang) => {
        if (userLang === chosenLang) return;
        i18next.changeLanguage(chosenLang);
        setIsLangOptionsActive(false);
        setUserLang(chosenLang);
    };

    useEffect(() => {
        if (i18next.language) setUserLang(i18next.language as SiteLang);
    }, [setUserLang]);

    useEffect(() => {
        if (userLang) {
            localStorage.setItem('i18nextLng', userLang);
            document.documentElement.lang = userLang;
        }
    }, [userLang, setUserLang]);

    return (
        <li className="relative">
            <Button onClick={langBtnClickHandler} color="default">
                <IoLanguage className="text-2xl dark:text-white" />
            </Button>
            {isLangOptionsActive && (
                <ul className="absolute -bottom-2 right-0 flex w-max translate-y-full flex-col overflow-hidden rounded-md border border-[#e9e9e9] bg-[#fafafa] dark:border-[#3b3b3b] dark:bg-[#1d1d1d]">
                    {LANGUAGES.map(lang => (
                        <LangOption key={lang.lang} {...lang} chooseLangHandler={chooseLangHandler} />
                    ))}
                </ul>
            )}
        </li>
    );
};
