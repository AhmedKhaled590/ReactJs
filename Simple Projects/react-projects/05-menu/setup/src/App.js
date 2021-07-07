import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const categBtn = (categ) => {
    if (categ === "All") {
      setMenu(items);
    }
    else {
      const newItems = items.filter((item) => item.category === categ);
      setMenu(newItems);
    }
  }
  return (
    <div className=" menu section">
      <h1 className="title">Our Menu</h1>
      <div className="underline"></div>
      <div className="btn-container">
        <Categories categBtn={categBtn} />
      </div>
      <Menu menu={menu} />
    </div>
  )
}

export default App;
