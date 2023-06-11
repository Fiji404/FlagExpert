import { motion } from 'framer-motion';

interface Props {
    benefitName: string;
    benefitIcon: JSX.Element;
    benefitDesc: string;
    animationDelay: number;
}

export const GameBenefit = ({ benefitName, benefitDesc, benefitIcon, animationDelay }: Props) => {
    return (
        <motion.section
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: animationDelay }}
            className="grow w-full py-6 px-4 border-2 border-[#eeeeee] bg-[rgb(251,251,251)] rounded-md"
        >
            <h2 className="flex justify-center items-center gap-3 text-center text-[2.2rem] font-semibold">
                {benefitName} {benefitIcon}
            </h2>
            <p className="mt-2 text-[1.4rem] text-center text-lightAccent">{benefitDesc}</p>
        </motion.section>
    );
};
