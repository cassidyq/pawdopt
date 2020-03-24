import React, { Component, useState } from 'react';
import '../styles/base-padding.scss';

import Animals from './Animals';
import Filter from './Filter';
import Cookies from 'universal-cookie';

class Home extends Component {
  state = {
    animals: [],
    user_logged_in: false,
    shelter_logged_in: false,
    user_id: null,
    shelter_id: null
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/animals'); // fetching the data from api, before the page loaded
      // const user_cookie = cookies.get('user_cookie');
      // const shelter_cookie = cookies.get('shelter_cookie')
      // console.log(req.headers.user_cookie)
      // const saved_cookie = new Cookies(req.headers.user_cookie);

      // console.log('getting cookie?', saved_cookie)
      if (document.cookie) {
        const str = document.cookie.split('=')
        // console.log('str: ', str)
        if (str[0] === 'user_cookie') {
          this.setState({ user_logged_in: true, user_id: Number(str[1]) })
        }
        if (str[0] === 'shelter_cookie') {
          this.setState({ shelter_logged_in: true, shelter_id: Number(str[1]) })
        }
      }
      const animals = await res.json();
      this.setState({
        animals
      });
      console.log(this.state)
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
      // <LoggedIn />
      <div>
        Welcome to Pawdopt!
        <h1>Filter</h1>
        <div className="filter-bar"><Filter onFilterSubmit={this.getFilteredAnimals} /></div>
        <h1>Recently Added</h1>
        <div className="animal-container">
          <Animals
            animals={this.state.animals}
          />
        </div>
      </div>
    )
  }
}

export default Home;