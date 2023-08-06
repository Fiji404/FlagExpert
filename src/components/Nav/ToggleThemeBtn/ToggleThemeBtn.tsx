import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';

export const ToggleThemeBtn = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const iconType =
        theme === 'dark' ? <BsFillMoonStarsFill className="theme-icon" /> : <BsSun className="theme-icon light" />;

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') document.body.classList.add('dark');
        else document.body.classList.remove('dark');
    }, [theme]);

    const toggleThemeHandler = () => {
        setTheme(t => (t === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button onClick={toggleThemeHandler} aria-label="Toggle theme button">
            {iconType}
        </button>
    );
};
