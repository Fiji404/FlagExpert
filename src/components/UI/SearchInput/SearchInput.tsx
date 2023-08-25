import { debounce } from '@/utils/debounce/debounce';
import { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

interface Props {
    validateCountryFlagName(countryName: string): void;
    isCountryGuessed: boolean;
}

export const SearchInput = ({ validateCountryFlagName, isCountryGuessed }: Props) => {
    const inputSearchRef = useRef<HTMLInputElement>(null);

    const clearInputValue = () => {
        if (!inputSearchRef.current) return;
        inputSearchRef.current.value = '';
    };

    const inputChangeHandler = () => {
        const inputValue = inputSearchRef.current?.value.toLowerCase();
        if (!inputValue) return;
        validateCountryFlagName(inputValue);
    };

    useEffect(() => {
        if (isCountryGuessed) clearInputValue();
    }, [isCountryGuessed]);

    return (
        <div className="sticky top-0 flex grow items-center gap-2 rounded-md border border-[#dfdfdf] bg-[#fff]  pl-2 transition-colors focus-within:border-[#b3b3b3] dark:border-[#222] dark:bg-[#111]  dark:focus-within:border-[#464646]">
            <BiSearch className="text-xl text-black dark:text-white" />
            <input
                ref={inputSearchRef}
                onChange={debounce(inputChangeHandler, 250)}
                className="min-h-[40px] grow bg-inherit text-black outline-none dark:text-white"
                placeholder="Type your flag here"
                type="text"
            />
        </div>
    );
};
