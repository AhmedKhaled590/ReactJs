import React, { useContext } from 'react';
import { authContext } from '../contexts/AuthContext';
import { themeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isAuthinticated, toggleAuth } = useContext(authContext);
  const { isLightTheme, light, dark } = useContext(themeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        <h1>{isAuthinticated ? "Logged In" : "Logged Out"}</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;