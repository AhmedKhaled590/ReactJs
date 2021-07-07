import React from 'react';
import menu from './data';

const Categories = ({ categBtn }) => {
  const distinctCateg = [...new Set(menu.map(cat => cat.category))];
  return (
    <>
      <button onClick={() => { categBtn("All") }} className="filter-btn">All</button>
      {distinctCateg.map(item => {
        return <button onClick={() => { categBtn(item) }} className="filter-btn">{item}</button>
      })}
    </>
  );
};

export default Categories;
