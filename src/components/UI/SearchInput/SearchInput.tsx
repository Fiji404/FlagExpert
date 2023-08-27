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
        <div className="focus-within:outline-style sticky top-0 flex grow items-center gap-2 rounded-md border border-[#dfdfdf] bg-[#fff] pl-2 transition-colors dark:border-[#41464C] dark:bg-[#121213]">
            <BiSearch className="text-xl text-black dark:text-[#979aa7]" />
            <input
                ref={inputSearchRef}
                onChange={debounce(inputChangeHandler, 250)}
                className="min-h-[40px] grow rounded-md bg-inherit text-black outline-none dark:text-white"
                placeholder="Type your flag here"
                type="text"
            />
        </div>
    );
};
