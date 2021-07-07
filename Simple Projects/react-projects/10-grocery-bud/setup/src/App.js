import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaEdit, FaTrash } from 'react-icons/fa'
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function App() {


  const [list, setList] = useState(getLocalStorage());
  const [ALert, setAlet] = useState(null);
  const [recentlyAdded, setRecent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("grocery").value;
    const newItem = {
      id: new Date().toString(), title: title
    }
    if (list.length !== 0)
      setList([...list, newItem]);
    else
      setList([newItem]);
    setRecent(true);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    if (recentlyAdded >= 1) {
      const Alert = { type: "success", title: "A new Item has added to list" };
      setAlet(Alert);
    }
  }, [list]);

  const removeItem = (id) => {
    const Alert = { type: "danger", title: "An Item has been removed recently" };
    setAlet(Alert);
    setList(list.filter(item => item.id !== id));
    setRecent(false);
  }

  return (
    <div className="section">
      <div className="section-center">
        <Alert Alerts={ALert} setAlerts={setAlet} />
        <form onSubmit={handleSubmit} className="form-control">
          <input placeholder="e.g. eggs" id="grocery" className="grocery"></input>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default App
