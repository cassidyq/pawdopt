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
    // fave_obj_ids: [],
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
    // console.log('str', str);
    // console.log('cookie1', cookie1);
    // console.log('cookie2', cookie2);
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
          favourites: data,
          // fave_obj_ids: data[1]
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
      <div className="user-profile-container" >
        <div className="user-details">
          <h1 className="user-profile-title">{this.state.username}</h1>
          <h1 className="user-profile-title">{this.state.email}</h1>


          <div className="user-profile-imageclass">
            <img className="user-profile-img-top" src={this.state.photo_url} alt="user profile image cap" />
          </div>
          <div className="user-profile-caption">
            <div className="caption-categories">
              Pending Applications: <br />

            </div>
            <span className="user-profile-text">
              RED <br />
              GREEN <br />
              SMALL <br />
              BLUE <br />
              GIANT <br />
            </span>

            <div className="edit-bio">
              <Button
                className="edit-bio-button"
                onClick={() => {
                  this.setState({ showForm: !this.state.showForm, key: this.state.user_id })
                  console.log('state set: ', this.state)
                }}
                variant="primary"
              >Edit Info</Button>
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

        <span className="user-bio">
          <div className="about-me">Favourites</div>
          <Animals animals={this.state.favourites} />

          <p className="user-bio-text"></p>


        </span>
      </div >

    )
  }
}


export default User;