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
                <div className="user-bio-text">Edit your adoption application <Button>Edit Bio</Button></div>
        
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
              <tr>
                <th>Created At</th>
                <th>Animal</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>2020-01-22</td>
                <td>Chapstick</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>2020-01-03</td>
                <td>Jackson</td>
                <td>Closed</td>
              </tr>
            </table>
          </div>
      </div>
    )
  }
}


export default User;