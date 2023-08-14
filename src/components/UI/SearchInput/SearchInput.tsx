import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

interface Props {
    countryGuessHandler(countryName: string): boolean;
}

export const SearchInput = ({ countryGuessHandler }: Props) => {
    const inputSearchRef = useRef<HTMLInputElement>(null)

    const inputChangeHandler = () => {
        const inputValue = inputSearchRef.current?.value;
        if (!inputValue) return;
        const isGuessed = countryGuessHandler(inputValue);
        if (isGuessed) inputSearchRef.current.value = ''
    };

    return (
        <div className="mx-3 mt-3 flex items-center dark:bg-[#1a1a1a] bg-[#fff] gap-2 rounded-md pl-2 border-2 dark:border-[#222] border-[#dfdfdf] dark:focus-within:border-[#464646] focus-within:border-[#b3b3b3]  transition-colors">
            <BiSearch className="dark:text-white text-black text-xl" />
            <input
                ref={inputSearchRef}
                onChange={inputChangeHandler}
                className="min-h-[40px] grow bg-inherit outline-none dark:text-white text-black"
                placeholder="Type your flag here"
                type="text"
            />
        </div>
    );
};
