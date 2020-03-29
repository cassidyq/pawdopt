import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/AnimalProfile.scss';
import '../styles/shelter.scss';
// import { Grid, Icon, Button } from 'semantic-ui-react';
import { IoIosHeart } from 'react-icons/io';
import NewApplications from './NewApplications';
import { addApplication } from '../helpers';

class AnimalProfile extends Component {
  state = {
    animal: {},
    user_id: '',
    app_info: '',
    showForm: false
  }

  componentDidMount() {
    const str = document.cookie.split('; ');
    const cookie1 = str[0].split('=');
    const cookie2 = str[1].split('=');
  
    let token = null;
    let userID = null;

    if (cookie1[0] === 'user_cookie') {
      token = cookie1[1];
      userID = Number(cookie2[1]);
    } else if (cookie2[0] === 'user_cookie') {
      token = cookie2[1];
      userID = Number(cookie1[1]);
    }
    this.setState ({
      user_id: userID
    })

    console.log('this.props: ', this.props)
    if (this.props.location.animal_info) {
      this.setState({
        animal: this.props.location.animal_info.animal
      })
      console.log('this.state: ', this.state)
    } else {
      fetch(`http://127.0.0.1:8000/api/animals/${this.props.match.params.id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('data: ', data)
          this.setState({
            animal: data
          })
          console.log('this.state: ', this.state)
        })
        .catch(err => console.log(err))
    }
  }

  togglePopup() {  
    this.setState({  
         showForm: !this.state.showForm 
    });  
  } 

  render() {
    console.log('this.state: ', this.state)
    if (!this.state.animal) {
      return <div></div>
    }
    let animal = this.state.animal;
    return (
      <div className="animal-profile-container" >
          <h1 className="animal-profile-title">Meet {animal.name} </h1>
        <div className="animal-details">

          <div className="animal-profile-imageclass">
            <img className="animal-profile-img-top" src={animal.photo_url} alt="animal profile image cap" />
          </div>
          <div className="animal-profile-caption">
            <div className="caption-categories">
              Type: {animal.animal_type} <br />
              Breed: {animal.breed}<br />
              Gender: {animal.gender} <br />
              Age: {animal.age}<br />
              Size: {animal.size}
    
            </div>

          </div>
          {/* <div className="animal-note">Note: {animal.description}</div> */}
        </div>

        <span className="animal-bio">
          <div className="about-me">About Me</div>
          <p className="animal-bio-text">{animal.description}</p>
          <div className="pawdopt-me">
            <button onClick={() => this.setState({ showForm: !this.state.showForm })} className='adopt-me-button' variant="primary">Pawdopt Me</button>
            {this.state.showForm ?
              <NewApplications
                closePopup={this.togglePopup.bind(this)}  
                animal_id={animal.id}
                animal_name={animal.name}
                user_id={this.state.user_id}
                status='new'
                onApplicationSubmit={addApplication}
              />: null}
          </div>
        </span>
      </div>
    )
  }
}

export default AnimalProfile;

// () => addApplication(animal.id, this.state.user_id, 'new')