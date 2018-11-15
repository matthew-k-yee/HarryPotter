import React from 'react'

function RavenclawStudents(props){
  return(
    <div>
        {props.characters.filter(character => (character.house === 'Ravenclaw'))
        .map((character) => (
          <p key={character._id}>{character.name}</p>
        ))
      }
    </div>
  )
}

export default RavenclawStudents;
