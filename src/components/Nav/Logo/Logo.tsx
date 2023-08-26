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
                className="focus:outline-style group flex items-center gap-1 rounded-sm text-[1.6rem] font-extrabold transition-all hover:text-[#727272] dark:text-white dark:hover:brightness-75"
                to="/"
            >
                Flaggy
                <AiFillFlag className="text-[#32e02c] transition-colors group-hover:text-[#727272] group-hover:brightness-75" />
            </Link>
        </h1>
    );
};
