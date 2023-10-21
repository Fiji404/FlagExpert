import i18next from 'i18next';
import { twMerge } from 'tailwind-merge';
import type { SiteLang } from './LangBtn';

export interface LangDetails {
    lang: SiteLang;
    iconPath: string;
    iconAlt: string;
    chooseLangHandler(lang: SiteLang): void;
}

export const LangOption = ({ lang, iconPath, iconAlt, chooseLangHandler }: LangDetails) => {
    return (
        <li>
            <button
                className={twMerge(
                    `flex w-full items-center justify-between gap-2 px-2 py-1 font-medium uppercase text-[#505050] transition-colors hover:bg-[#e7e7e7] hover:text-black dark:text-[#d1d1d1] dark:hover:bg-[#292929] hover:dark:text-white ${
                        i18next.language === lang && 'bg-[#e7e7e7] text-black dark:bg-[#292929] dark:text-white'
                    }`
                )}
                onClick={() => chooseLangHandler(lang)}
            >
                {lang}
                <img className="w-[25px]" src={iconPath} alt={iconAlt} />
            </button>
        </li>
    );
};
