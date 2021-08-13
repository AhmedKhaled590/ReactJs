import React, { useContext, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { context } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { sideBar, hideSideBar } = useContext(context);
  useEffect(() => {
    console.log(sideBar);
  }, [sideBar])
  return (
    <>
      <div className={sideBar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
        <div className="sidebar">
          <button onClick={hideSideBar} className="btn close-btn"><FaTimes /></button>
          <div className="sidebar-links">
            {sublinks.map(sublink => {
              const { page, links } = sublink;
              return (
                <article>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links.map(link => {
                      return <a href={link.url}>{link.icon}{link.label}</a>
                    })}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
