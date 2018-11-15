import React from 'react'

function GryffindorStudents(props){
  return(
    <div>
        {props.characters.filter(character => (character.house === 'Gryffindor'))
        .map((character) => (
          <p key={character._id}>{character.name}</p>
        ))
      }
    </div>
  )
}

export default GryffindorStudents;
