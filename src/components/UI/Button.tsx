import { classed } from '@tw-classed/react';
import { clickableElementStyles } from './Link';

export const Button = classed('button', {
    base: clickableElementStyles.base,
    variants: {
        color: {
            green: clickableElementStyles.variants.green
        }
    }
});
