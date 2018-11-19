import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://www.potterapi.com/v1/sortingHat'

  class SortingHat extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        random: ''
      }
    this.randomHouse = this.randomHouse.bind(this)
    }

  async randomHouse(){
    const response = await axios.get(`${BASE_URL}`);
    console.log(response.data);
    this.setState({
      random: response.data
    })
  }

  render(){
    return(
      <div className = 'sortinghat-div'>
        <h1 className = 'sortinghat-header'>Which legendary school do you belong in</h1>
        <button className = 'sortinghat-button' type = 'submit' onClick = {this.randomHouse}>Found Out!</button>
        <div className = 'sortinghat-result'>
          <h3>TEAM {this.state.random}</h3>
        </div>
      </div>
    )
  }
}

export default SortingHat;
