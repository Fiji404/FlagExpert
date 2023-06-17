import { motion } from 'framer-motion';

interface Props {
    benefitName: string;
    benefitIcon: JSX.Element;
    benefitDesc: string;
}

export const GameBenefit = ({ benefitName, benefitDesc, benefitIcon }: Props) => {
    return (
        <motion.section
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: 1.3 }}
            className="grow w-full py-6 px-4 border border-[#2b2b2b] bg-[rgb(24,24,24)] rounded-md hover:shadow-xl shadow-black"
        >
            <h2 className="flex justify-center items-center gap-3 text-center text-[2.2rem] font-semibold text-white">
                {benefitName} {benefitIcon}
            </h2>
            <p className="mt-2 text-[1.4rem] text-center text-lightAccent">{benefitDesc}</p>
        </motion.section>
    );
};
