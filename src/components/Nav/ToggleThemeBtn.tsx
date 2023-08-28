import { Tooltip } from '@/components/';
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
        <Tooltip tooltipContent="Theme toggle" delay={300}>
            <button onClick={toggleThemeHandler} aria-label="Theme toggle" className="focus:outline-style rounded-sm">
                {iconType}
            </button>
        </Tooltip>
    );
};
