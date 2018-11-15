import React from 'react';


function CharacterList(props){
  return(
    <div>
      <button onClick = {() => props.handleViewChange('Hufflepuff')}>Hufflepuff</button>
      <button onClick = {() => props.handleViewChange('Gryffindor')}>Gryffindor</button>
      <button onClick = {() => props.handleViewChange('Ravenclaw')}>Ravenclaw</button>
      <button onClick = {() => props.handleViewChange('Slytherin')}>Slytherin</button>


      {/* <div>
        <h1>HOGWART ALUMNUS</h1>
        <button type='submit'>Hufflepuff</button>
        <button type='submit'>Gryffindor</button>
        <button type='submit'>Ravenclaw</button>
        <button type='submit'>Slytherin</button>

        <h1>Hufflepuff</h1>
        {props.characters.filter(character => (character.house === 'Hufflepuff'))
          .map((character) => (
            <p key={character._id}>{character.name}</p>
          ))
        }

        <h1>Gryffindor</h1>
          {props.characters.filter(character => (character.house === 'Gryffindor'))
          .map((character) => (
            <p key={character._id}>{character.name}</p>
          ))
        }

        <h1>Ravenclaw</h1>
          {props.characters.filter(character => (character.house === 'Ravenclaw'))
          .map((character) => (
            <p key={character._id}>{character.name}</p>
          ))
        }

        <h1>Slytherin</h1>
          {props.characters.filter(character => (character.house === 'Slytherin'))
          .map((character) => (
            <p key={character._id}>{character.name}</p>
          ))
        }
        <CharacterList />
      </div> */}
    </div>
  )
}

export default CharacterList;
