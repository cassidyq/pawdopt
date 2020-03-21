import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/base-padding.scss';
import '../styles/shelter.scss';
import EditAnimal from './EditAnimal';
import EditShelter from './EditShelter';

class Shelter extends Component {
  state = {
    shelters: [],
    current_shelter: [],
    animals: [],
    showForm: false,
    key: 0
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/shelters'); // fetching the data from api, before the page loaded
      const shelters = await res.json();
      const current_shelter = shelters.filter(shelter => shelter.id === 2); // <--set this to be the shelter id from cookie
      const animals = current_shelter[0].animals;
      // const applications = current_shelter[0].applications
      console.log(current_shelter);
      console.log('animals', animals);
      this.setState({
        shelters,
        current_shelter,
        animals
      });
    } catch (e) {
      console.log(e);
    }
  }

  updateDB = (url, action, params) => {

    fetch(url, {
      method: action,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => {
      this.setState({ showForm: false })
      response.json()
    });
  }

  render() {
    return (
      <div>
        <div className='shelter-profile'>
          {this.state.current_shelter.map(item => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.photo_url} className='shelter-logo' alt='shelterlogo'></img>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
        <Button onClick={() => this.setState({ showForm: !this.state.showForm, key: this.state.current_shelter.id })} variant="primary">Edit Shelter Info</Button>
        {this.state.showForm && this.state.key === this.state.current_shelter.id ? <EditShelter shelter={this.state.current_shelter[0]} onEditSubmit={this.updateDB} /> : null}
        <div className='shelter-animals'>
          <Button onClick={() => this.setState({ showForm: !this.state.showForm, key: 0 })} variant="primary">+ New Animal</Button>
          {this.state.showForm && this.state.key === 0 ? <EditAnimal animal={{ shelter_id: 2 }} onCreateSubmit={this.updateDB} /> : null}
          <h1>Active Animals</h1>
          {this.state.animals.map(animal => (
            <div key={animal.id}>
              <h1>{animal.name}</h1>
              <img src={animal.photo_url} className='animalphoto' alt='animalphoto'></img>
              <div>{animal.description}</div>
              <Button onClick={() => this.setState({ showForm: !this.state.showForm, key: animal.id })} variant="primary">Edit {animal.name}'s Info</Button>
              {this.state.showForm && this.state.key === animal.id ? <EditAnimal animal={animal} onEditSubmit={this.updateDB} /> : null}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Shelter;
