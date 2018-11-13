import React from 'react';

function Nav(props){
  return(
    <div>
      <button onClick = {() => props.handleViewChange('sortinghat')}>Sorting Hat</button>
      <button onClick = {() => props.handleViewChange('houses')}>Houses</button>
      <button onClick ={() => props.handleViewChange('characters')}>Characters</button>
      <button onClick = {() => props.handleViewChange('spell')}>Spells</button>
    </div>
  )
}

export default Nav;
