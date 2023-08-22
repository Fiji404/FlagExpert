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
        <div className="grow flex items-center dark:bg-[#111] bg-[#fff] gap-2 rounded-md pl-2  border dark:border-[#222] border-[#dfdfdf] dark:focus-within:border-[#464646] focus-within:border-[#b3b3b3]  transition-colors">
            <BiSearch className="dark:text-white text-black text-xl" />
            <input
                ref={inputSearchRef}
                onChange={debounce(inputChangeHandler, 250)}
                className="min-h-[40px] grow bg-inherit outline-none dark:text-white text-black"
                placeholder="Type your flag here"
                type="text"
            />
        </div>
    );
};
