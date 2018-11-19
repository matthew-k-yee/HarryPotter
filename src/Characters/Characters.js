import React from 'react';
import CharacterList from '../CharacterList/CharacterList.js';
import GryffindorStudents from '../CharacterList/GryffindorStudents.js';
import HufflepuffStudents from '../CharacterList/HufflepuffStudents.js';
import RavenclawStudents from '../CharacterList/RavenclawStudents.js';
import SlytherinStudents from '../CharacterList/SlytherinStudents.js';
import axios from 'axios'

const BASE_URL = 'https://www.potterapi.com/v1/'
const key = '$2a$10$yhKWuhNKTAFPc21t6zyT3.O1zpj56cJkz8SHnSHzmUnuDwGecoZBe'

class Characters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: '',
      currentView: 'GryffindorStudents'
    }
    this.setView = this.setView.bind(this);
  }

  getView(){
    const view = this.state.currentView;
    switch(view) {
      case 'Gryffindor':
        return <GryffindorStudents characters = {this.state.characters}/>
      case 'Hufflepuff':
        return <HufflepuffStudents characters = {this.state.characters}/>
      case 'Ravenclaw':
        return <RavenclawStudents characters = {this.state.characters}/>
      case 'Slytherin':
        return <SlytherinStudents characters = {this.state.characters}/>
      default:
        return ''
    }
  }

  setView(view){
    this.setState({
      currentView: view
    })
  }

  async hpCharacters(){
    const response = await axios.get(`${BASE_URL}characters?key=${key}`)
      this.setState({
        characters: response.data
      })
  }

  componentDidMount(){
    this.hpCharacters();
  }

  render(){
    return(
      <div>
        <h1 className = 'character-title'>HOGWARTS ALUMNI</h1>
        <CharacterList className = 'character-container'
          handleViewChange = {this.setView}
        />
        {this.getView()}
      </div>
    )
  }
}
export default Characters;
