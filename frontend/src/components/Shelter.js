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
    applications: [],
    showForm: false,
    key: 0
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/shelters'); // fetching the data from api, before the page loaded
      const shelters = await res.json();
      const current_shelter = shelters.filter(shelter => shelter.id === 2); // <--set this to be the shelter id from cookie
      const animals = current_shelter[0].animals;
      const applications= animals.map(val => val.applications).filter(item => item.length !== 0);
      console.log('applications', applications);
      console.log('animals', animals);
      this.setState({
        shelters,
        current_shelter,
        animals,
        applications
      });
    } catch (e) {
      console.log(e);
    }
  }

  togglePopup() {  
    this.setState({  
         showForm: !this.state.showForm 
    });  
  } 

  updateAnimal = (url, action, params) => {
    fetch(url, {
      method: action,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
       .then (data => {
          const animalsArr = this.state.animals
          const index = animalsArr.findIndex(p => p.id == data.id)
          animalsArr[index] = data
         this.setState({ 
           showForm: false,
           animals: animalsArr
         })
    });
  }

  createAnimal = (url, action, params) => {
    fetch(url, {
      method: action,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
       .then (data => {
         console.log("post response data", data)
         let test = [ data, ...this.state.animals]
         console.log(test)
         this.setState({ 
           showForm: false,
           animals: test

         })
    });
  }

  updateShelter = (url, action, params) => {

    fetch(url, {
      method: action,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
       .then (data => {
         console.log("data", data)
         this.setState({ 
          showForm: false,
          shelter: data
         })
    });
  }

  render() {
    return (
      <article className='shelter-page'>
        <div>
          <div className='shelter-profile'>
            {this.state.current_shelter.map(item => (
              <div key={item.id}>
                <img src={item.photo_url} className='shelter-logo' alt='shelterlogo'></img>
                <div class='shelter-name title'>{item.name}</div>
                <Button 
                  className='edit-shelter-button' 
                  onClick={() => this.setState({ showForm: !this.state.showForm, key: this.state.current_shelter.id })} 
                  variant="primary"
                >Edit Shelter Info</Button>
                {this.state.showForm && this.state.key === this.state.current_shelter.id ? 
                  <EditShelter 
                    closePopup={this.togglePopup.bind(this)} 
                    shelter={this.state.current_shelter[0]} 
                    onEditSubmit={this.updateShelter} 
                  /> : null}
              </div>
            ))}
          </div>
       <br></br>
          <span class='title'>Active Animals &nbsp; 
            <Button 
              onClick={() => this.setState({ showForm: !this.state.showForm, key: 0 })} 
              variant="primary">
              + New Animal
            </Button>
          </span>
          {this.state.showForm && this.state.key === 0 ? 
            <EditAnimal 
              closePopup={this.togglePopup.bind(this)}  
              animal={{ shelter_id: 2 }} 
              onCreateSubmit={this.createAnimal} 
            /> : null}
        <div className='shelter-animals'>
          {this.state.animals.map(animal => (
            <div key={animal.id} class="animal-card">
              <div className='card-header'>{animal.name}</div>
              <img src={animal.photo_url} className='animalphoto' alt='animalphoto'></img>
              <br></br>
              <Button 
                className='edit-animal-button' 
                onClick={() => this.setState({ showForm: !this.state.showForm, key: animal.id })} 
                variant="primary"
              > Edit {animal.name}'s Info</Button>
              {this.state.showForm && this.state.key === animal.id ? 
              <EditAnimal 
                closePopup={this.togglePopup.bind(this)} 
                animal={animal} 
                onEditSubmit={this.updateAnimal} 
              /> : null}
            </div>
          ))}
          </div>
        <div className='shelter-applications'>
          <div className='title'>Applications for your animals</div>
          {this.state.applications.map(application => (
            <div key={application[0].id}>
              <div>{application[0].user_id}</div>
              <div>{application[0].animal_id}</div>
              <div>{application[0].info}</div>
            </div>
          ))}
          </div>
        </div>
      </article>
    )
  }
}

export default Shelter;
