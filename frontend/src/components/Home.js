import React, { Component, useState } from 'react';
import '../styles/base-padding.scss';

import Animals from './Animals';

class Home extends Component {
  state = {
    animals: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/animals'); // fetching the data from api, before the page loaded
      const animals = await res.json();
      console.log('animals', animals);
      this.setState({
        animals
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <body>
        <div>
        Welcome to Pawdopt!
        <Animals
          animals={this.state.animals}
        />
        </div>

      </body>
    )
  }
}

export default Home;