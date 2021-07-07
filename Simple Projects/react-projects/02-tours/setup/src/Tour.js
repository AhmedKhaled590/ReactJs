import React, { useState } from 'react';

const Tour = ({ tours, handleClear }) => {
  const [span, setSpan] = useState("Read More");
  var [readMore, setReadMore] = useState(false);



  return (
    <>
      {tours && tours.map((tour, pos) => {
        return (<div key={tour.id} className="single-tour">
          <img src={tour.image}>
          </img>
          <div className="tour-info">
            <h4>{tour.name}</h4>
            <span className="tour-price">14.25</span>
          </div>
          <p style={{ paddingLeft: "20px", paddingBottom: "20px" }}>{readMore ? tour.info : tour.info.substr(0, 200)}...<button onClick={() => setReadMore(!readMore)} >{readMore ? "Read Less" : "Read More"}</button></p>
          <footer>
            <button onClick={() => handleClear(tour.id)} className="delete-btn" style={{ position: "right" }}>Not Intersted</button>
          </footer>
        </div>)
      })}
    </>

  )
};

export default Tour;
