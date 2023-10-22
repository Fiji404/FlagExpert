import * as RadixTooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
    children?: React.ReactNode;
    tooltipContent: string;
    delay: number;
}

export const Tooltip = ({ children, tooltipContent, delay }: Props) => {
    const { t } = useTranslation();
    return (
        <RadixTooltip.Provider delayDuration={delay}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        className="z-20 rounded-md border border-[#e0e0e0] bg-[#f3f3f3] px-2 py-[1px] text-sm font-medium dark:border-[#2e2e2e] dark:bg-[#222222] dark:text-white"
                        sideOffset={5}
                        asChild
                    >
                        <motion.div initial={{ opacity: 0, translateY: '2px' }} animate={{ opacity: 1, translateY: 0 }}>
                            {t(tooltipContent)}
                            <RadixTooltip.Arrow className="z-10 fill-[#f3f3f3] dark:fill-[#222222]" />
                        </motion.div>
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};
