import React from 'react';


function CharacterList(props){
  return(
    <div>
      <button onClick = {() => props.handleViewChange('Hufflepuff')}>Hufflepuff</button>
      <button onClick = {() => props.handleViewChange('Gryffindor')}>Gryffindor</button>
      <button onClick = {() => props.handleViewChange('Ravenclaw')}>Ravenclaw</button>
      <button onClick = {() => props.handleViewChange('Slytherin')}>Slytherin</button>
    </div>
  )
}

export default CharacterList;
