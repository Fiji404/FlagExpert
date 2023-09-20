import { classed } from '@tw-classed/react';
import { clickableElementStyles } from './Link';

export const Button = classed('button', {
    base: clickableElementStyles.base,
    variants: {
        color: {
            green: clickableElementStyles.variants.green,
            blue: 'bg-[#edf2ff] text-[#0A67CB] hover:bg-[#E6EDFE] dark:bg-[#0066ff2b] dark:text-[#6bc1ff] dark:hover:bg-[#006efe3a]',
            default:
                'rounded-md border dark:border-[#1f1f1f] border-[#ccc] bg-[#fff] hover:bg-[#f3f3f3] dark:bg-[#141414] dark:hover:bg-[#242424] text-2xl font-medium dark:text-white'
        }
    }
});
