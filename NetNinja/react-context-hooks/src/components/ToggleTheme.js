import React, { Component } from 'react';
import { themeContext } from '../contexts/ThemeContext';
class ThemeToggle extends Component {
    static contextType = themeContext;
    render() {
        const { toggleTheme } = this.context;
        return (
            <div>
                <button onClick={toggleTheme}>Toggle The Theme</button>
            </div>);
    }
}

export default ThemeToggle;