import React, { useContext, useRef } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import Context, { context } from './context';


const Navbar = () => {
  const { showSubMenu, hideSubmenu, showSideBar } = useContext(context);
  return (
    <>
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <button onClick={showSideBar} className="btn toggle-btn">
              <FaBars />
            </button>
            <img src={logo} className="nav-logo" />
          </div>

          <ul className="nav-links">
            <li>
              <button onMouseLeave={hideSubmenu} onMouseOver={showSubMenu} className="link-btn">products</button>
            </li>
            <li>
              <button onMouseLeave={hideSubmenu} onMouseOver={showSubMenu} className="link-btn">developers</button>
            </li>
            <li>
              <button onMouseLeave={hideSubmenu} onMouseOver={showSubMenu} className="link-btn">company</button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
