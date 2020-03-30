import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/UserProfile.scss';
import { Button } from 'react-bootstrap';
import Animals from './Animals';
import { updateFavourites } from '../helpers';
import EditUserProfile from './EditUserProfile';

class User extends Component {

  state = {
    username: '',
    email: '',
    photo_url: '',
    bio: '',
    user_id: null,
    profile_id: null,
    favourites: [],
    applications: [],
    animals: [],
    currentProfile: [],
    key: 0,
    showForm: false,
    user_name: '',
    user_address: '',
    user_city: '',
    user_postalCode: '',
    user_phone: '',
    user_email: '',
    user_birthdate: '',
    user_house: '',
    user_kids: '',
    user_otherPets: '',
    user_allergic: '',
    user_animalStay: '',
    user_activityLevel: '',
    user_why: '',
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

    console.log('id: ', userID)
    fetch('http://localhost:8000/api/auth/user', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          username: data.username,
          email: data.email,
        })
      })
      .catch(error => {
        console.error('Error:', error);
      });

    fetch('http://localhost:8000/api/profiles', {
      method: 'GET',
      'Authorization': `Token ${token}`
    })
      .then(response => response.json())
      .then(data => {
        // console.log("profile data: ", data)
        // let profile_info = {};
        for (const profile of data) {
          // console.log('profile: ', profile)
          if (profile.user_id === userID) {
            console.log('profile: ', profile)
            this.setState({
              photo_url: profile.photo_url,
              user_id: userID,
              user_name: profile.name,
              user_address: profile.address,
              user_city: profile.city,
              user_postalCode: profile.postalCode,
              user_phone: profile.phone,
              user_email: profile.email,
              user_birthdate: profile.birthdate,
              user_house: profile.house,
              user_kids: profile.kids,
              user_otherPets: profile.otherPets,
              user_allergic: profile.allergic,
              user_animalStay: profile.animalStay,
              user_activityLevel: profile.activityLevel,
              user_why: profile.why,
              profile_id: profile.id
            })
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log('user id: ', userID)
    fetch(`http://localhost:8000/api/favourites/get_favourited/${userID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("fave data:", data)
        this.setState({
          favourites: data.favourites,
          applications: data.applications,
          animals: data.animals
        })
        console.log('what in the heck? ', this.state)
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  updateProfile = (url, action, params) => {

    fetch(url, {
      method: action,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => response.json())
      .then(data => {
        console.log("data", data)
        this.setState({
          showForm: false,
          user_name: data.name,
          user_address: data.address,
          user_city: data.city,
          user_postalCode: data.postalCode,
          user_phone: data.phone,
          user_email: data.email,
          user_birthdate: data.birthdate,
          user_house: data.house,
          user_kids: data.kids,
          user_otherPets: data.otherPets,
          user_allergic: data.allergic,
          user_animalStay: data.animalStay,
          user_activityLevel: data.activityLevel,
          user_why: data.why,
        })
      });
  }

  togglePopup() {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  render() {
    return (
      <div className='user-profile'>
        <h1 className="welcome">Welcome {this.state.username}</h1>
          <div className="user-profile-container" >
            <div className="user-details">
              <div className="user-profile-imageclass">
                <img src={this.state.photo_url} alt="user profile image cap" />
              </div>
            </div>

            <div className="user-profile-caption">
              <div className="user-bio">
                <div className="user-profile-title">Email: {this.state.email}</div>
                <div className="user-bio-text">Edit your adoption application 
                  <Button
                    className='edit-bio-button'
                    onClick={() => {
                      this.setState({ showForm: !this.state.showForm, key: this.state.user_id })
                      console.log('state set: ', this.state)
                    }}
                    variant="primary"
                    >Edit Bio</Button>
                  {this.state.showForm ?
                    <EditUserProfile
                      closePopup={this.togglePopup.bind(this)}
                      name={this.state.user_name}
                      address={this.state.user_address}
                      city={this.state.user_city}
                      postalCode={this.state.user_postalCode}
                      phone={this.state.user_phone}
                      email={this.state.user_email}
                      birthdate={this.state.user_birthdate}
                      house={this.state.user_house}
                      kids={this.state.user_kids}
                      otherPets={this.state.user_otherPets}
                      allergic={this.state.user_allergic}
                      animalStay={this.state.user_animalStay}
                      activityLevel={this.state.user_activityLevel}
                      why={this.state.user_why}
                      user_id={this.state.user_id}
                      profile_id={this.state.profile_id}
                      onEditSubmit={this.updateProfile}
                    /> : null}
                </div>
              </div>
            </div>
          </div>
          <div className='profile-section'>
            <div className="title">Your favourite animals</div>
            <Animals
              animals={this.state.favourites}
            />
          </div>  
          <div className='profile-section-applications'>
            <div className="title">Pending Applications</div>
            <table >
              <thead>
                <tr>
                  <th>Created At</th>
                  <th>Animal</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {this.state.applications.map(application => (
                <tr key={application.id} >
                  <td>{Date(application.created_at).slice(0,25)}</td>
                  <td>{this.state.animals.filter(item => item.id === application.animal_id).map(item => item.name)}</td>
                  <td>{application.status}</td>
                </tr>
              ))}  
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}


export default User;