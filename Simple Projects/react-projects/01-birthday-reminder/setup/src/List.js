import React from 'react';

const List = ({ data }) => {
  return (
    <>
      {data &&
        data.map(item => {
          return (
            < ul key={item.id} className="person" >
              <img src={item.image} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.age} years old</p>
              </div>
            </ul>
          )
        }
        )
      }
    </>
  )
};

export default List;
