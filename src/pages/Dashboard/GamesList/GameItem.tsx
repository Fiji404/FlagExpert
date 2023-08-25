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
            className="grow basis-80 w-full flex justify-between flex-col items-center gap-2 font-semibold border rounded-md p-4 bg-[#fff] hover:bg-[rgb(252,252,252)]
            dark:bg-[rgb(19,19,19)] dark:hover:bg-[rgb(22,22,22)] text-center dark:text-white text-black dark:border-[#303030] min-h-[220px] transition-colors"
        >
            <h2 className="flex items-center gap-2 text-4xl">
                {name} {icon}
            </h2>
            <p className="text-xl font-normal text-[#5c5c5c] dark:text-[#888888]">{desc}</p>
            <Link
                className={`flex items-center gap-2 ml-auto px-2 rounded-md ${
                    status === 'available'
                        ? 'bg-[#ddf3e4] dark:bg-[#152a27] text-[#214134] dark:text-[#3CDA8E] hover:bg-[#cdf0d8] dark:hover:bg-[#234742]'
                        : 'dark:bg-[#342A16] bg-[#FCF3AF] text-[#7D6523] dark:text-[#E6D62F] cursor-not-allowed'
                } text-lg  transition-colors`}
                to={route}
            >
                {status === 'available' ? (
                    <>
                        Next <BsArrowRight className="text-[#2C4D3F] dark:text-[#3CDA8E]" />
                    </>
                ) : (
                    <>
                        In-progress <IoIosConstruct className="dark:text-[#E6D62F] text-[#7D6523]" />
                    </>
                )}
            </Link>
        </section>
    );
};
