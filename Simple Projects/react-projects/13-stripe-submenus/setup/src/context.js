import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

export const context = createContext();

const Context = (props) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [page, setPage] = useState('');
    const [links, setLinks] = useState([]);
    const [location, setLocation] = useState({});
    const [sideBar, setSideBar] = useState(false);


    const showSubMenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        setLocation({ center, bottom })
        setIsDisplayed(true);
        setPage(page);
        const linksM = sublinks.find((link) => link.page === page)
        setLinks(linksM.links)
    }


    const hideSubmenu = () => {
        setIsDisplayed(false);
    }

    const showSideBar = () => {
        setSideBar(true);
    }

    const hideSideBar = () => {
        setSideBar(false);
    }

    return (
        <context.Provider value={{ showSubMenu, hideSubmenu, showSideBar, hideSideBar, isDisplayed, page, links, location, sideBar }} >
            {props.children}
        </context.Provider>
    );
}


export default Context;
