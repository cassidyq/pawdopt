import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
// import { Grid, Icon, Button } from 'semantic-ui-react';
import { IoIosHeart } from 'react-icons/io';
// import { addToFavourites } from '../helpers';


export default function AnimalProfile(props) {
  // const { animal } = props;
  console.log('props: ', props)
  // async componentDidMount() {
  //   try {
  //     const res = await fetch('http://127.0.0.1:8000/api/animals'); // fetching the data from api, before the page loaded
  //     // const res2 = await fetch('http://127.0.0.1:8000/api/animals/categories');
  //     const animals = await res.json();
  //     // const categories = await res2.json();
  //     this.setState({
  //       animals
  //       // categories
  //     });
  //     console.log(this.state)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // getFilteredAnimals = (filterParams) => {
  //   let url = 'http://127.0.0.1:8000/api/animals/filter?';
  //   const activeParams = Object.keys(filterParams).filter(key => filterParams[key] !== '');
  //   activeParams.forEach(key => {
  //     url += `${key}=${filterParams[key]}&`;
  //   });
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => response.json())
  //     .then(data => this.setState({ animals: data }));
  // }



  return (
    <div>
      Animal Profile
    </div>
  )

}

