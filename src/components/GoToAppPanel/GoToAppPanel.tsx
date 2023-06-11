import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';

export const GoToAppPanel = () => {
    return (
        <motion.form
            initial={{ opacity: 0, pointerEvents: 'none' }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            transition={{ delay: 4 }}
            className="mt-10 flex justify-end gap-4 max-w-[95%]"
        >
            <label className="flex gap-1 items-center text-lightAccent">
                Don't show me this
                <input className="input-checkbox" type="checkbox" />
            </label>
            <button className="flex items-center bg-[#98ff78] py-1 px-3 rounded-md text-xl text-[#094207] hover:bg-[#4fff19] transition-colors">
                Next <MdOutlineArrowForwardIos />
            </button>
        </motion.form>
    );
};
