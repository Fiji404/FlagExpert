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
        <div className="mx-3 mt-3 flex items-center bg-[#1a1a1a] gap-2 rounded-md pl-2 border-2 border-[#222] focus-within:border-[#464646] transition-colors">
            <BiSearch className="text-white text-xl" />
            <input
                ref={inputSearchRef}
                onChange={inputChangeHandler}
                className="min-h-[40px] grow bg-inherit outline-none text-white"
                placeholder="Type your flag here"
                type="text"
            />
        </div>
    );
};
