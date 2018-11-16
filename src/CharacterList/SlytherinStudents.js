import React from 'react'

function SlytherinStudents(props){
  return(
    <div id = 'students'>
        {props.characters.filter(character => (character.house === 'Slytherin'))
        .map((character) => (
          <p id='students-ind' key={character._id}>{character.name} </p>
        ))
      }
    </div>
  )
}

export default SlytherinStudents;
