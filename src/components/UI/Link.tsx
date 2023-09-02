import { classed } from '@tw-classed/react';
import { NavLink } from 'react-router-dom';

export const clickableElementStyles = {
    base: 'flex justify-center items-center gap-2 rounded-md text-lg font-medium transition-colors px-2 py-1 text-center',
    variants: {
        green: 'bg-[#02ba3c16] text-[#006b3be7] hover:bg-[#01a63522] dark:bg-[#00fc7a12] dark:text-[#45ffa5d2] dark:hover:bg-[#00fd901c]'
    }
};

export const Link = classed(NavLink, {
    base: clickableElementStyles.base,
    variants: {
        color: {
            default: 'dark:text-white border dark:border-[#222] dark:bg-[#161616]',
            blue: 'bg-[#edf2ff] text-[#0A67CB] hover:bg-[#E6EDFE] dark:bg-[#0066ff2b] dark:text-[#6bc1ff] dark:hover:bg-[#006efe3a]',
            green: clickableElementStyles.variants.green,
            warning: 'cursor-not-allowed bg-[#FCF3AF] text-[#7D6523] dark:bg-[#342A16] dark:text-[#E6D62F]'
        }
    },
    defaultVariants: {
        color: 'blue'
    }
});
