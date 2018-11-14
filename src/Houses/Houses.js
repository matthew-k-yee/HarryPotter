import React from 'react';

function Houses(props){
  return(
    <div>
      <h1>THE FOUR GREAT HOUSES OF HOGWARTS</h1>
      <div>
        {props.houses.map(house => (
          <div key = {house._id}>
            <h1>{house.name}</h1>
            <p>{house.colors[0]} & {house.colors[1]}</p>
            <p>{house.founder}</p>
            <p>{house.mascot}</p>
            <p>values</p>
            <li>{house.values[0]}</li>
            <li>{house.values[1]}</li>
            <li>{house.values[2]}</li>
            <li>{house.values[3]}</li>
            <p>{house.headOfHouse}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Houses;
