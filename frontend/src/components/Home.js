import React, { Component, useState } from 'react';
import '../styles/base-padding.scss';

import Animals from './Animals';
import Filter from './Filter';

class Home extends Component {
  state = {
    animals: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/animals'); // fetching the data from api, before the page loaded
      const animals = await res.json();
      this.setState({
        animals
      });
    } catch (e) {
      console.log(e);
    }
  };

  getFilteredAnimals = (filterParams) => {
    console.log(filterParams)
    let url = 'http://127.0.0.1:8000/api/animals/filter?';
    const activeParams = Object.keys(filterParams).filter(key => filterParams[key] !== '');
    activeParams.forEach(key => {
      url += `${key}=${filterParams[key]}&`;
    });
    fetch( url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => this.setState({ animals: data }));

  }

  render() {
    return (
        <div>
        Welcome to Pawdopt!
        <h1>filter:</h1>
        <Filter onFilterSubmit={this.getFilteredAnimals}/>
        <h1>Recent: </h1>
        <Animals
          animals={this.state.animals}
        />
        </div>
    )
  }
}

export default Home;