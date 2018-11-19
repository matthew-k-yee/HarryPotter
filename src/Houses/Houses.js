import React from 'react';

function Houses(props){
  return(
    <div>
      <h1 className = 'house-header'>THE FOUR GREAT HOUSES OF HOGWARTS</h1>
        <div className = 'houses-container'>
        {props.houses.map(house => (
          <div className = 'house-content' id= {house.name} key = {house._id}>
            <div className = 'house-back'>
              <p>{house.founder}</p>
              <p>{house.colors[0].charAt(0).toUpperCase() + house.colors[0].slice(1)} &
                {house.colors[1].charAt(0).toUpperCase() + house.colors[1].slice(1)}</p>
              <p>The {house.mascot.charAt(0).toUpperCase() + house.mascot.slice(1)}</p>
              <p>{house.values[0].charAt(0).toUpperCase() + house.values[0].slice(1)},
                {house.values[1].charAt(0).toUpperCase() + house.values[1].slice(1)},
                {house.values[2].charAt(0).toUpperCase() + house.values[2].slice(1)},
                {house.values[3].charAt(0).toUpperCase() + house.values[3].slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Houses;
