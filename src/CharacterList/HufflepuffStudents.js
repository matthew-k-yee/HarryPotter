import React from 'react'

function HufflePuffStudents(props){
  return(
    <div>
        {props.characters.filter(character => (character.house === 'Hufflepuff'))
        .map((character) => (
          <p key={character._id}>{character.name}</p>
        ))
      }
    </div>
  )
}

export default HufflePuffStudents;
