import React, { Component } from 'react';
import { authContext } from '../contexts/AuthContext';
import { themeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <authContext.Consumer>{(authContext) => (
        <themeContext.Consumer>{(context) => {
          const { isAuthinticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = context;
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
        }}
        </themeContext.Consumer>
      )}</authContext.Consumer>
    )
  };
}


export default Navbar;