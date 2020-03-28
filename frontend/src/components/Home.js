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
    categories: [],
    favourite_animal_ids: [],
  };


  async componentDidMount() {
    //  useconstr_id = getCookieData('user_id')
    // console.log(user_id)
    let str;
    let cookie1;
    let cookie2;
    let token;
    let userID;
    if (document.cookie) {
      str = document.cookie.split('; ');
      cookie1 = str[0].split('=');
      cookie2 = str[1].split('=');
      console.log('str', str);
      // console.log('cookie1', cookie1);
      // console.log('cookie2', cookie2);
      token = null;
      userID = null;

      if (cookie1[0] === 'user_cookie') {
        token = cookie1[1];
        userID = Number(cookie2[1]);
      } else if (cookie2[0] === 'user_cookie') {
        token = cookie2[1];
        userID = Number(cookie1[1]);
      }
    }
    // console.log('userrr: ', userID)
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
      const res3 = await fetch(`http://127.0.0.1:8000/api/favourites/get_favourited/${userID}`);
      const favourites = await res3.json();
      console.log('favey: ', favourites)

      // console.log('fave from prop: ', favourites)
      const favourite_animal_ids = [];
      for (const favourite of favourites) {
        console.log('item: ', favourite)
        favourite_animal_ids.push(favourite.id)
      }
      console.log('fave animal id: ', favourite_animal_ids)
      console.log('state before: ', this.state)
      this.setState({
        favourite_animal_ids
      })
      console.log('state after: ', this.state)

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
          <Animals animals={this.state.animals} favourite_animal_ids={this.state.favourite_animal_ids} />
          {/* <Animals animals={this.state.animals} /> */}
        </div>
      </div>
    )
  }
}

export default Home;