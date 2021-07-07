import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [cards, setData] = useState(data);
  const handleClear = () => {
    setData(null);
  }
  return (
    <div class="section">
      <main>
        <div class="container">
          <h3>{cards?cards.length:0} birthdays today</h3>
          <List data={cards} />
          <button onClick={handleClear}>Clear All</button>
        </div>
      </main>
    </div>

  )
}

export default App;
