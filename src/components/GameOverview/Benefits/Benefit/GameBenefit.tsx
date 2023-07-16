import { motion } from 'framer-motion';

interface Props {
    benefitName: string;
    benefitIcon: JSX.Element;
    benefitDesc: string;
}

export const Benefit = ({ benefitName, benefitDesc, benefitIcon }: Props) => {
    return (
        <motion.section
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: 1.3 }}
            className="grow basis-80 py-6 px-4 border bg-[#fff] dark:border-[#242424] dark:bg-[rgb(19,19,19)] rounded-md min-w-[300px]"
        >
            <h2 className="flex justify-center items-center gap-3 text-center text-[2.2rem] font-semibold text-black dark:text-white">
                {benefitName} {benefitIcon}
            </h2>
            <p className="mt-2 text-[1.4rem] text-center text-accentDark">{benefitDesc}</p>
        </motion.section>
    );
};
