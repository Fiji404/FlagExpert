import { BiSearch } from 'react-icons/bi';

interface Props {
    countryGuessHandler(countryName: string): void;
}

export const SearchInput = ({ countryGuessHandler }: Props) => {
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        countryGuessHandler(inputValue);
    };

    return (
        <div className="mx-3 mt-3 flex items-center bg-[#1a1a1a] gap-2 rounded-md px-2 border border-[#222]">
            <BiSearch className="text-white text-xl" />
            <input
                onChange={inputChangeHandler}
                className="min-h-[40px] mx-auto w-[99%] bg-inherit outline-none focus:border-[#616161] text-white transition-all"
                placeholder="Type your flag here"
                type="text"
            />
        </div>
    );
};
