import React from 'react'

function HufflePuffStudents(props){
  return(
    <div id = 'students'>
        {props.characters.filter(character => (character.house === 'Hufflepuff'))
        .map((character) => (
          <p id='students-ind' key={character._id}>{character.name} </p>
        ))
      }
    </div>
  )
}

export default HufflePuffStudents;
