import React from 'react'

function RavenclawStudents(props){
  return(
    <div id = 'students'>
        {props.characters.filter(character => (character.house === 'Ravenclaw'))
        .map((character) => (
          <p id='students-ind' key={character._id}>{character.name} </p>
        ))
      }
    </div>
  )
}

export default RavenclawStudents;
