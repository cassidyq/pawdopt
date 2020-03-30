import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/base-padding.scss';
import '../styles/shelter.scss';
import EditAnimal from './EditAnimal';
import EditShelter from './EditShelter';

class Shelter extends Component {
  state = {
    shelter: [],
    animals: [],
    applications: [],
    profiles: [],
    showForm: false,
    key: 0,
    shelterID: null,
  };

  async componentDidMount() {
    const str = document.cookie.split('; ');
    const cookie1 = str[0].split('=');
    const cookie2 = str[1].split('=');
    let token = null;
    let shelterID = null;

    if (cookie1[0] === 'shelter_cookie') {
      token = cookie1[1];
      shelterID = Number(cookie2[1]);
    } else if (cookie2[0] === 'shelter_cookie') {
      token = cookie2[1];
      shelterID = Number(cookie1[1]);
    }
    
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/shelters/shelterpageinfo/${shelterID}`); // fetching the data from api, before the page loaded
      const info = await res.json();
      console.log(info)
      const shelter = info.shelter[0];
      const animals = info.animals;
      const applications = info.applications;
      const profiles = info.profiles;
      console.log('shelter', shelter);
      console.log('applications', applications);
      console.log('animals', animals);
      console.log('profiles', profiles);
      const animalIds = animals.map(animal => animal.id)
      const animalApps = applications.filter(e => animalIds.includes(e.animal_id));
      this.setState({
        shelter,
        animals,
        applications: animalApps,
        profiles
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
      .then(data => {
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
      .then(data => {
        let test = [data, ...this.state.animals]
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
      .then(data => {
        this.setState({
          showForm: false,
          shelter: data
        })
      });
  }
  render() {
    const shelter = this.state.shelter;
    return (
      <article className='shelter-page'>
        <div>
          <div className='shelter-profile'>
            
              <div key={shelter.id}>
                <img src={shelter.photo_url} className='shelter-logo' alt='shelterlogo'></img>
                <div className='shelter-name title'>{shelter.name}</div>
                <Button 
                  className='edit-shelter-button' 
                  onClick={() => this.setState({ showForm: !this.state.showForm, key: this.state.shelter.id })} 
                  variant="primary"
                >Edit Shelter Info</Button>
                {this.state.showForm && this.state.key === this.state.shelter.id ? 
                  <EditShelter 
                    closePopup={this.togglePopup.bind(this)} 
                    shelter={shelter} 
                    onEditSubmit={this.updateShelter} 
                  /> : null}
              </div>
          </div>
       <br></br>
        <div className="shelter-animal-section">
          <span className='title'>Active Animals &nbsp; 
            <Button style={ {fontFamily:'sans-serif' }}
              onClick={() => this.setState({ showForm: !this.state.showForm, key: 0 })} 
              variant="primary">
              + New Animal
            </Button>
          </span>
          {this.state.showForm && this.state.key === 0 ? 
            <EditAnimal 
              closePopup={this.togglePopup.bind(this)}  
              animal={{ shelter_id: this.state.shelter.id }} 
              onCreateSubmit={this.createAnimal} 
            /> : null}
        <div className='shelter-animals'>
          {this.state.animals.map(animal => (
            <div key={animal.id} className="animal-card">
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
          </div>
        <div className='shelter-applications'>
          <div className='title'>Applications for your animals</div>
            <table >
              <thead>
                <tr>
                  <th>Created At</th>
                  <th>Animal</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
                <tbody>
            {this.state.applications.map(application => (

                <tr key={application.id} >
                  <td>{Date(application.created_at).slice(0,25)}</td>
                  <td>{this.state.animals.filter(item => item.id === application.animal_id).map(item => item.name)}</td>
                  <td>{application.status}</td>
                  <td><Button>View</Button></td>
                </tr>
            ))}  
              </tbody>
            </table>
          </div>
        </div>
      </article>
    )
  }
}

export default Shelter;
