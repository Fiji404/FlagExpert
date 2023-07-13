import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';

export const ToggleThemeBtn = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const iconType =
        theme === 'dark' ? <BsFillMoonStarsFill className="theme-icon" /> : <BsSun className="theme-icon light" />;

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleThemeHandler = () => {
        setTheme(t => {
            const oppositeTheme = t === 'dark' ? 'light' : 'dark';
            if (oppositeTheme === 'dark') document.body.classList.add('dark');
            else document.body.classList.remove('dark');
            return oppositeTheme;
        });
    };

    return (
        <button onClick={toggleThemeHandler} aria-label="Theme toggle button">
            {iconType}
        </button>
    );
};
