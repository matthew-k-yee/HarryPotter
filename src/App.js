import React, { Component } from 'react';
import Welcome from './Welcome/Welcome.js';
import Nav from './Nav/Nav.js';
import Spells from './Spells/Spells.js';
import Houses from './Houses/Houses.js';
import Characters from './Characters/Characters.js';
import SortingHat from './SortingHat/SortingHat.js';
import axios from 'axios'
import './App.css';

const House_URL = 'https://www.potterapi.com/v1/'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: 'Welcome',
      nameInput: '',
      houses: '',
      characters: ''
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
          houses = {this.state.houses}
         />
      case 'characters':
        return <Characters />
      case 'spells':
        return <Spells />
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
      const response = await axios.get(`${House_URL}houses?/houses&key=${process.env.REACT_APP_API_KEY}`)
      console.log(response.data)
        this.setState({
          houses: response.data
        })
    }

    componentDidMount(){
      this.hpHouses();
    }


  render() {
    return (
      <div className="App">
        <Nav handleViewChange = {this.setView} />
        {this.getView()}
      </div>
    );
  }
}

export default App;
