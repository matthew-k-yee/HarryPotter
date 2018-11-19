import React, { Component } from 'react';
import Welcome from './Welcome/Welcome.js';
import Nav from './Nav/Nav.js';
import Spells from './Spells/Spells.js';
import Houses from './Houses/Houses.js';
import Characters from './Characters/Characters.js';
import SortingHat from './SortingHat/SortingHat.js';
import axios from 'axios'
import Music from './Music/Music.js'
import './App.css';

const BASE_URL = 'https://www.potterapi.com/v1/'
const key = '$2a$10$yhKWuhNKTAFPc21t6zyT3.O1zpj56cJkz8SHnSHzmUnuDwGecoZBe'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: 'Welcome',
      houses: '',
      spells: ''
    }
    this.setView = this.setView.bind(this)
  }

  getView(){
    const view = this.state.currentView;
    switch(view) {
      case 'sortinghat':
        return <SortingHat/>
      case 'houses':
        return <Houses
          houses = {this.state.houses}/>
      case 'characters':
        return <Characters/>
      case 'spells':
        return <Spells
        spells = {this.state.spells}
        />
      default:
        return <Welcome />
    }
  }

  setView(view){
    this.setState({
      currentView: view
    })
  }

  async hpHouses() {
    const response = await axios.get(`${BASE_URL}houses?/houses&key=${key}`)
      this.setState({
        houses: response.data
      })
    }

  async hpSpells() {
    const response = await axios.get(`${BASE_URL}spells/?key=${key}`)
      this.setState({
        spells: response.data
      })
    }

  componentDidMount(){
      this.hpHouses();
      this.hpSpells();
    }


  render() {
    return (
      <div className="App">
        <Music />
        <Nav handleViewChange = {this.setView} />
        {this.getView()}
      </div>
    );
  }
}

export default App;
