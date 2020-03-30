import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/AnimalProfile.scss';
import '../styles/shelter.scss';
import NewApplications from './NewApplications';
import { addApplication } from '../helpers';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, Route } from 'react-router-dom';


class AnimalProfile extends Component {
  state = {
    animal: {},
    user_id: '',
    app_info: '',
    showForm: false
  }

  componentDidMount() {
    if (document.cookie && document.cookie.includes('user_id')) {
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
      this.setState({
        user_id: userID
      })

      if (this.props.location.animal_info) {
        this.setState({
          animal: this.props.location.animal_info.animal
        })
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
            this.setState({
              animal: data
            })
          })
          .catch(err => console.log(err))
      }
    } else if (this.props.location.animal_info) {
      this.setState({
        animal: this.props.location.animal_info.animal
      })
    }
  }
  togglePopup() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    if (!this.state.animal) {
      return <div></div>
    }
    let animal = this.state.animal;
    return (
      <div className="animal-profile-container" >

        <Link to='/' className="back">
          <IoIosArrowBack size={40} />
        </Link>
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
        </div>
        <span className="animal-bio">
          <div className="about-me">About Me</div>
          <p className="animal-bio-text">{animal.description}</p>
          <div className="pawdopt-me">
            <button onClick={() => this.setState({ showForm: !this.state.showForm })} className='adopt-me-button' variant="primary">Pawdopt Me</button>
            {this.state.showForm ?
              <NewApplications
                closePopup={this.togglePopup.bind(this)}
                animal_id
                animal_name={animal.name}
                user_id={this.state.user_id}
                status='new'
                onApplicationSubmit={addApplication}
              /> : null}
          </div>
        </span>
      </div>
    )
  }
}

export default AnimalProfile;

