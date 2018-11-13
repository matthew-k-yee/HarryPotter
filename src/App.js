import React, { Component } from 'react';
import Welcome from './Welcome/Welcome.js';
import Nav from './Nav/Nav.js';
import Spells from './Spells/Spells.js';
import Houses from './Houses/Houses.js';
import Characters from './Characters/Characters.js';
import SortingHat from './SortingHat/SortingHat.js';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: 'Welcome'
    }
    this.setView = this.setView.bind(this)
  }

  getView(){
    const view = this.state.currentView;
    switch(view) {
      case 'sortinghat':
        return <SortingHat/>
      case 'houses':
        return <Houses />
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
