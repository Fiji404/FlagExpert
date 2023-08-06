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
        <Link
            onClick={logoClickHandler}
            className="flex items-center gap-1 text-[1.6rem] dark:text-white font-extrabold hover:brightness-75 hover:text-[#858585] transition-all"
            to="/"
        >
            Flaggy <AiFillFlag className="text-[#32e02c]" />
        </Link>
    );
};
