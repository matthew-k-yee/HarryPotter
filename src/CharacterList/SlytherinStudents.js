import React from 'react'

function SlytherinStudents(props){
  return(
    <div>
        {props.characters.filter(character => (character.house === 'Slytherin'))
        .map((character) => (
          <p key={character._id}>{character.name}</p>
        ))
      }
    </div>
  )
}

export default SlytherinStudents;
