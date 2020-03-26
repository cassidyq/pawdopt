import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/UserProfile.scss';
import { Button } from 'react-bootstrap';

class User extends Component {

  state = {
    username: '',
    email: '',
    photo_url: '',
  }

  componentDidMount() {
    const str = document.cookie.split(';');
    // const userID = Number(str[2]);
    const cookie1 = str[0].split('=');
    const cookie2 = str[1].split('=');
    console.log("cookie1:", cookie1);
    console.log("cookie2:", cookie2);
    let token = null;
    let userID = null;

    if (cookie1[0] === 'user_cookie') {
      token = cookie1[1];
      userID = Number(cookie2[1]);
    } else {
      token = cookie2[1];
      userID = Number(cookie1[1]);
    }

    fetch('http://localhost:8000/api/profiles', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log("data:", data)
        let profile_info = {};
        for (const profile of data) {
          console.log(profile.user_id, userID)
          if (profile.user_id === userID) {
            this.setState({
              photo_url: profile.photo_url
            })
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className="user-profile-container" >
        <div className="user-details">
          <h1 className="user-profile-title">USERNAME </h1>

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
          <p className="user-bio-text">Doggo ipsum shooberino bork what a nice floof fat boi tungg, corgo mlem. long woofer h*ck fat boi. Borkdrive what a nice floof shooberino bork doing me a frighten heckin angery woofer big ol pupper heckin angery woofer waggy wags wow such tempt, h*ck very good spot noodle horse doing me a frighten dat tungg tho very taste wow thicc. Noodle horse adorable doggo length boy corgo very taste wow, heckin good boys long doggo borking doggo. Long water shoob boofers sub woofer doggo fluffer waggy wags snoot, long woofer the neighborhood pupper porgo pupperino. Such treat pats stop it fren bork, you are doing me the shock aqua doggo.</p>
          <div className="edit-bio"><Button>Edit Bio</Button></div>
        </span>

      </div>

    )
  }
}


export default User;