import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://www.potterapi.com/v1/sortingHat'

  class SortingHat extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        random: ''
      }
    }
  async randomHouse(){
    const response = await axios.get(`${BASE_URL}`);
    console.log(response);
    // this.setState({
    //   random: response
    // })
  }

  componentDidMount(){
    this.randomHouse();
  }

  render(){
    return(
    <div>
      <h1>Which legendary school do you belong in</h1>
      <button type = 'submit'>Submit</button>
    </div>
  )}
}

export default SortingHat;
