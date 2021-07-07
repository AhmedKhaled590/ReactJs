import React from 'react'
import Loading from './Loading'
import Tour from './Tour'
import useFetch from './useFetch'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const { tours, isPending, setTours } = useFetch(url);
  var newTours = tours;
  const handleClear = (id) => {
    newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  console.log(newTours);
  return (
    <div className="section">
      {!isPending && newTours && !newTours.length && <button onClick={() => window.location.reload(false)} className="btn">Refresh</button>}
      <main>
        {isPending && <Loading />}
        <h2 className="title">{!isPending && tours && newTours.length ? "Our Tours" : (newTours && !newTours.length) ? "No Tours Left" : ""}</h2>
        <div className="underline"></div>
        <Tour tours={tours} handleClear={handleClear} />
      </main>
    </div >
  )
}

export default App
