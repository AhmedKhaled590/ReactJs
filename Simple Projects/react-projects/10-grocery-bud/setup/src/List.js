import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, removeItem }) => {
  return (
    items && items.map(item => {
      return (
        <div className="grocery-item">
          <p className="title">{item.title}</p>
          <div className="btn-container">
            <button className="edit-btn"><FaEdit /></button>
            <button onClick={() => removeItem(item.id)} className="delete-btn"><FaTrash /></button>
          </div>
        </div >
      )
    })
  );
}

export default List
