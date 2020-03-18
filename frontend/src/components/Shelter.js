import React, { Component } from 'react';
import '../styles/base-padding.scss';

class Home extends Component {
  state = {
    shelters: [],
    animals: [],
    current_shelter: [],
    shelter_animals: []
  };

  async componentDidMount() {
    try {
      const res1 = await fetch('http://127.0.0.1:8000/api/shelters'); // fetching the data from api, before the page loaded
      const res2 = await fetch('http://127.0.0.1:8000/api/animals'); // fetching the data from api, before the page loaded
      const shelters = await res1.json();
      const animals = await res2.json();
      const current_shelter = shelters.filter(shelter => shelter.id === 2 )// <--set this to be the shelter id from cookie
      const shelter_animals = animals.filter(animal => animal.shelter_id === 2)

      console.log(current_shelter)
      console.log(shelter_animals)

      this.setState({
        shelters,
        animals,
        current_shelter,
        shelter_animals
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {

    return (
      <body>
   
        {this.state.current_shelter.map(item => (
          <div key={item.id}>
            <h1>Welcoms to {item.name}'s dashboard!</h1>
            <h4>{item.description}</h4>
          </div>
        ))}
         <h1>Your Posted Animals</h1>
        {this.state.shelter_animals.map(animal => (
          <div key={animal.id}>
            <h2>{animal.name}</h2>
            <h4>{animal.description}</h4>
            <h4>{animal.breed}</h4>
          </div>
        ))}
      </body>
    )
  }
}

export default Home;