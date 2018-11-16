import React from 'react';

function Houses(props){
  return(
    <div>
      <h1 className = 'house-header'>THE FOUR GREAT HOUSES OF HOGWARTS</h1>
      <div className = 'houses-container '>
        {props.houses.map(house => (
          <div className = 'house-content' id= {house.name} key = {house._id}>
            <div className = 'house-back'>
            <p>{house.colors[0]} & {house.colors[1]}</p>
            <p>{house.founder}</p>
            <p>{house.mascot}</p>
            <p>values</p>
            <p>{house.values[0]}</p>
            <p>{house.values[1]}</p>
            <p>{house.values[2]}</p>
            <p>{house.values[3]}</p>
            <p>{house.headOfHouse}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Houses;
