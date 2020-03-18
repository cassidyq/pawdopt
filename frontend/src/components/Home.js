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
      console.log('testing');
      this.setState({
        animals
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <body>
        <p>Welcome to Pawdopt!</p>
        {this.state.animals.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </body>
    );
  }
}

export default Home;
