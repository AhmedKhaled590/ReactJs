import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef();
  const linksContainerRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(preState => !preState)
  }

  useEffect(() => {
    const height = linksRef.current.getBoundingClientRect().height;
    console.log(height)
    if (showLinks) {
      linksContainerRef.current.style.height = `${height}px`;
    }
    else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks])

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='logo' alt='logo' />
            <button onClick={toggleLinks} className='nav-toggle' >
              <FaBars />
            </button>
          </div>
          <div ref={linksContainerRef} className='links-container' >
            <ul ref={linksRef} className='links'>
              {links.map(link => {
                return (
                  <li key={link.id} >
                    <a target="_blank" href={link.url}>{link.text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className='social-icons'>
            {social.map(link => {
              return (
                <li key={link.id}>
                  <a target="_blank" href={link.url}>{link.icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar
