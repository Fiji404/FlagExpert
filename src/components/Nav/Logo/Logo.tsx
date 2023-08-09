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
                className="group flex items-center gap-1 text-[1.6rem] dark:text-white font-extrabold hover:text-[#727272] dark:hover:brightness-75 transition-all"
                to="/"
            >
                Flaggy
                <AiFillFlag className="text-[#32e02c] group-hover:text-[#727272] group-hover:brightness-75 transition-colors" />
            </Link>
        </h1>
    );
};
