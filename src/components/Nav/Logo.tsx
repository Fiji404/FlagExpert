import { useEffect, useState } from 'react';
import { AiFillFlag } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Logo = () => {
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    const logoClickHandler = () => {
        setIsLogoClicked(true);
    };

    useEffect(() => {
        document.body.scrollIntoView();
        setIsLogoClicked(false);
    }, [isLogoClicked]);

    return (
        <h1>
            <Link
                onClick={logoClickHandler}
                className="focus:outline-style flex items-center gap-1 rounded-sm text-[1.6rem] font-extrabold transition-colors hover:text-[#32E02C] dark:text-white dark:hover:text-[#32E02C]"
                to="/"
            >
                Flaggy
                <AiFillFlag className="text-[#32e02c]" />
            </Link>
        </h1>
    );
};
