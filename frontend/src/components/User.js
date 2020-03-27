import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/UserProfile.scss';
import { Button } from 'react-bootstrap';
import Animals from './Animals';
import { addToFavourites } from '../helpers';


class User extends Component {

  state = {
    username: '',
    email: '',
    photo_url: '',
    bio: '',
    user_id: null,
    favourites: [],
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

    // console.log('id: ', userID)
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
        // console.log("data: ", data)
        // let profile_info = {};
        for (const profile of data) {
          // console.log('profile: ', profile)
          if (profile.user_id === userID) {

            this.setState({
              photo_url: profile.photo_url,
              user_id: userID,
              bio: profile.bio,
            })
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    fetch(`http://localhost:8000/api/favourites/get_favourited/${userID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log("fave data:", data)
        this.setState({
          favourites: data
        })
      })
      .catch(error => {
        console.error('Error:', error);
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

          </div>
        </div>

        <span className="user-bio">
          <div className="about-me">Favourites</div>
          <Animals
            animals={this.state.favourites}
          />

          <p className="user-bio-text"></p>

          <p>{this.state.bio}</p>
          <div className="edit-bio"><Button>Edit Bio</Button></div>
        </span>

      </div>

    )
  }
}


export default User;