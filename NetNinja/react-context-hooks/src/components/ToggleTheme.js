import React, { useContext } from 'react';
import { themeContext } from '../contexts/ThemeContext';


const ThemeToggle = () => {
    const { toggleTheme } = useContext(themeContext);
    return (
        <div>
            <button onClick={toggleTheme}>Toggle The Theme</button>
        </div>
    );
}

export default ThemeToggle;

