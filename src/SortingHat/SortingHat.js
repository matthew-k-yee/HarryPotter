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

  componentDidMount(){
    this.randomHouse();
  }

  render(){
    return(
    <div>
      <h1>Which legendary school do you belong in</h1>
      <button type = 'submit' onClick = {this.randomHouse}>Submit</button>
      <h3>{this.state.random}</h3>
    </div>
  )}
}

export default SortingHat;
