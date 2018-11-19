import React from 'react';

function Spells(props){
  return(
    <div id='spells'>
      {props.spells.filter(spell => (spell.type === 'Spell'))
      .map((spell) => (
        <div id='spell-list' >
          <p key = {spell._id}>{spell.spell}</p>
        <div className = 'spell-effect'>
          {spell.effect}
        </div>
        </div>
      ))}
    </div>
  )
}

export default Spells;
