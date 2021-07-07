import React, { Component, createContext } from 'react';

export const authContext = createContext();
class AuthContextProvider extends Component {
    state = { isAuthinticated: false }
    toggleAuth = () => {
        this.setState({ isAuthinticated: !this.state.isAuthinticated });
    }
    render() {
        return (
            <authContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </authContext.Provider>
        );
    }
}

export default AuthContextProvider;