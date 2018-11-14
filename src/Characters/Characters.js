import React from 'react';

function Characters(props){
  return(
    <div>
      <h1>Harry Potter Characters</h1>
      <form>
        <input />
      </form>
      {props.characters.map(character => (
        <div key = {character._id}>
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Characters;
