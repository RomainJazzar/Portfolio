import React, { useEffect, useState } from 'react';
import { useTheme } from '../../Context/ThemeContext.jsx';
// Import the component's specific styles
import './DarkModeToggle.css';

const DarkModeToggle = ({ colorChange }) => {
    const { theme, setTheme } = useTheme();


    const [isDarkMode, setIsDarkMode] = useState(() => {
        const query = window.matchMedia("(prefers-color-scheme: light)");
        return query.matches;

    });

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        console.log(colorChange)
        root.style.setProperty('--toggle-icon-bg-color', colorChange ? 'rgba(0, 0, 0, 0.899)' : '#212121');
    }, [isDarkMode, colorChange]);

    const toggleDarkMode = () => {
        setTheme(!theme);
        setIsDarkMode(!isDarkMode)
    };

    return (
        <>
            <button className="js__dark-mode-toggle dark-mode-toggle" type="button" onClick={toggleDarkMode}>
                <span className="dark-mode-toggle__icon"></span>
                <span className="dark-mode-toggle__text hidden--visually">dark mode</span>
            </button>

        </>
    );
};

export default DarkModeToggle;
