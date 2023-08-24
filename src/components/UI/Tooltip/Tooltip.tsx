import * as RadixTooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';

interface Props {
    children?: React.ReactNode;
    tooltipContent: React.ReactNode;
    delay: number;
}

export const Tooltip = ({ children, tooltipContent, delay }: Props) => {
    return (
        <RadixTooltip.Provider delayDuration={delay}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        className="z-20 bg-[#f3f3f3] dark:bg-[#222222] border dark:border-[#2e2e2e] border-[#e0e0e0] dark:text-white py-[1px] px-2 rounded-md text-sm data-[state=closed]:aniamte-[fadeOut_1s]"
                        sideOffset={5}
                        asChild
                    >
                        <motion.div initial={{ opacity: 0, translateY: '2px' }} animate={{ opacity: 1, translateY: 0 }}>
                            {tooltipContent}
                            <RadixTooltip.Arrow className="z-10 dark:fill-[#222222] fill-[#f3f3f3]" />
                        </motion.div>
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};
