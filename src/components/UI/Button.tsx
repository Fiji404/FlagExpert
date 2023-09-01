import { classed } from '@tw-classed/react';
import { clickableElementStyles } from './Link';

export const Button = classed('button', {
    base: clickableElementStyles.base,
    variants: {
        color: {
            green: clickableElementStyles.variants.green,
            default: 'rounded-md border dark:border-[#272727] border-[#ccc] bg-[#fff] hover:bg-[#f3f3f3] dark:bg-[#1a1a1a] dark:hover:bg-[#242424] py-2 text-2xl font-medium dark:text-white'
        }
    }
});
