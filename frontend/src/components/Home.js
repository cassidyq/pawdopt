import React, { Component, useState } from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';

import Animals from './Animals';
import Filter from './Filter';
import Cookies from 'universal-cookie';

class Home extends Component {
  state = {
    animals: [],
    user_logged_in: false,
    shelter_logged_in: false,
    user_id: null,
    shelter_id: null,
    categories: []
  };

  async componentDidMount() {
    try {


      const res = await fetch('http://127.0.0.1:8000/api/animals'); // fetching the data from api, before the page loaded
      const animals = await res.json();
      this.setState({
        animals
      });
      const res2 = await fetch('http://127.0.0.1:8000/api/animals/categories');
      const categories = await res2.json();
      this.setState({
        categories
      });
      // console.log(this.state.animals)
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
        <div className='filter'>
          <Filter onFilterSubmit={this.getFilteredAnimals} categories={this.state.categories} />
        </div>
        <div className='animal-article'>
          <Animals animals={this.state.animals} />
        </div>
      </div>
    )
  }
}

export default Home;