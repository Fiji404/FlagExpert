import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosConstruct } from 'react-icons/io';

type GameAvailabilityStatus = 'available' | 'in-progress';

interface Props {
    name: string;
    desc: string;
    icon: React.ReactNode;
    status: GameAvailabilityStatus;
    route: string;
}

export const GameItem = ({ name, desc, icon, status, route }: Props) => {
    return (
        <section
            className="flex min-h-[220px] w-full grow basis-80 flex-col items-center justify-between gap-2 rounded-md border bg-[#fff] p-4 text-center
            font-semibold text-black transition-colors hover:bg-[rgb(252,252,252)] dark:border-[#303030] dark:bg-[rgb(19,19,19)] dark:text-white dark:hover:bg-[rgb(22,22,22)]"
        >
            <h2 className="flex items-center gap-2 text-4xl">
                {name} {icon}
            </h2>
            <p className="text-xl font-normal text-[#5c5c5c] dark:text-[#888888]">{desc}</p>
            <Link
                className={`ml-auto flex items-center gap-2 rounded-md px-2 ${
                    status === 'available'
                        ? 'bg-[#ddf3e4] text-[#214134] hover:bg-[#cdf0d8] dark:bg-[#152a27] dark:text-[#3CDA8E] dark:hover:bg-[#234742]'
                        : 'cursor-not-allowed bg-[#FCF3AF] text-[#7D6523] dark:bg-[#342A16] dark:text-[#E6D62F]'
                } text-lg  transition-colors`}
                to={route}
            >
                {status === 'available' ? (
                    <>
                        Next <BsArrowRight className="text-[#2C4D3F] dark:text-[#3CDA8E]" />
                    </>
                ) : (
                    <>
                        In-progress <IoIosConstruct className="text-[#7D6523] dark:text-[#E6D62F]" />
                    </>
                )}
            </Link>
        </section>
    );
};
