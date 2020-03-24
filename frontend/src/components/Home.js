import React, { Component, useState } from 'react';
import '../styles/base-padding.scss';

import Animals from './Animals';
import Filter from './Filter';

class Home extends Component {
  state = {
    animals: [],
    categories: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/animals'); // fetching the data from api, before the page loaded
      const res2 = await fetch('http://127.0.0.1:8000/api/animals/categories'); 
      const animals = await res.json();
      const categories = await res2.json();
      this.setState({
        animals,
        categories
      });
    } catch (e) {
      console.log(e);
    }
  };

  getFilteredAnimals = (filterParams) => {
    let url = 'http://127.0.0.1:8000/api/animals/filter?';
    const activeParams = Object.keys(filterParams).filter(key => filterParams[key] !== '');
    activeParams.forEach(key => {
      url += `${key}=${filterParams[key]}&`;
    });
    fetch(url, {
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
        <h1>Filter:</h1>
        <Filter onFilterSubmit={this.getFilteredAnimals} categories={this.state.categories}/>
        <h1>Results: </h1>
        <Animals
          animals={this.state.animals}
        />
      </div>
    )
  }
}

export default Home;