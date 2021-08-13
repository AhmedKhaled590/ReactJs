import React, { useState, useRef, useEffect, useContext } from 'react'
import Context, { context } from './context';
import sublinks from './data';
import { linkRef } from './Navbar';


const Submenu = () => {
  const container = useRef();
  const appContext = useContext(context);
  const { isDisplayed, page, links, location } = appContext;

  useEffect(() => {
    const { center, bottom } = location;
    container.current.style.left = `${center}px`
    container.current.style.top = `${bottom}px`
  }, [page, isDisplayed, links])

  return (
    <>
      <aside className={isDisplayed ? "submenu show" : "submenu"} ref={container}>
        <section>
          <h4>{page}</h4>
          <div className="submenu-center col-2">
            {links.map(link => {
              const { url, icon, label } = link;
              return (< a href={url} >{icon}{label}</a>)
            })}
          </div>
        </section>
      </aside>
    </>
  );
}

export default Submenu
