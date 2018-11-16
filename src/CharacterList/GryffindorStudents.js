import React from 'react'

function GryffindorStudents(props){
  return(
    <div id = 'students'>
        {props.characters.filter(character => (character.house === 'Gryffindor'))
        .map((character) => (
          <p id='students-ind' key={character._id}>{character.name}</p>
        ))
      }
    </div>
  )
}

export default GryffindorStudents;
