import React from 'react';

function Spells(props){
  return(
    <div>
      {props.spells.map(spell =>(
        <p key={spell._id}>
          {spell.spell}
          {spell.effect}
        </p>
      ))}
    </div>
  )
}

export default Spells;
