import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

// import About from './About';
import '../styles/Navbar.scss';
import Logo from '../images/pawdopt_white_logo.png';

class Navbar extends Component {
  state = {
    user_logged_in: false,
    shelter_logged_in: false,
    user_id: null,
    shelter_id: null,
  };

  // checkForUser = () => {
  //   if (document.cookie) {
  //     // console.log('document.cookie: ', document.cookie)
  //     const str = document.cookie.split('=')
  //     // console.log('str: ', str)
  //     let userToken = str[1];
  //     fetch('http://localhost:8000/api/auth/user', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Token ${userToken}`
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         // console.log('response data: ', data)
  //         if (data.username) {
  //           if (str[0] === 'user_cookie') {
  //             // this.setState({ user_logged_in: true, user_id: Number(data.id) })
  //           }
  //           if (str[0] === 'shelter_cookie') {
  //             // this.setState({ shelter_logged_in: true, shelter_id: Number(str[1]) })
  //           }
  //         }
  //       })
  //       .catch(err => console.log(err))

  //   }
  // }

  render() {
    let user = <Route component={LoggedOut} />;
    let profile = null;
    if (document.cookie) {
      const str = document.cookie.split(';');
      const cookie1 = str[0].split('=')[0];
      const cookie2 = str[1].split('=')[0];
      if (cookie1.includes('user_cookie') || cookie2.includes('user_cookie')) {
        user = <Route component={LoggedIn} />;
        profile = <Link to='/user' className="to-profile-page">Profile</Link>
      } else if (cookie1.includes('shelter_cookie') || cookie2.includes('shelter_cookie')) {
        user = <Route component={LoggedIn} />;
        profile = <Link to='/shelter' className="to-profile-page">Profile</Link>
      }
    }

    return (
      <div className="navbar">
        <Link to='/' className="navbar-logo"><img src={Logo} /></Link>
        <div className="navbar-items">

          <Link to='/' className="navbar-about">Browse</Link>

          {profile}
          {user}
        </div>
      </div>
    )
  }
}

export default Navbar;
