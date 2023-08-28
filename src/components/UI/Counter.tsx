import { RxSlash } from 'react-icons/rx';

interface Props {
    from: number;
    to: number;
}

export const Counter = ({ from, to }: Props) => {
    return (
        <output className="ml-1 flex items-center text-lg font-semibold dark:text-[#fff]">
            <span className={`${from > 0 ? 'text-[#32a16c] dark:text-[#3CDA8E] ' : ''}`}>{from}</span>
            <RxSlash className="text-xl text-[#949494] dark:text-[#a7a7a7]" /> {to}
        </output>
    );
};
