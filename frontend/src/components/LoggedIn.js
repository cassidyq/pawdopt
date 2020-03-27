import React, { Component } from 'react';
import { NavLink, Redirect, Route, Link, NavItem } from 'react-router-dom';
import '../styles/Navbar.scss';
import Cookies from 'universal-cookie';
import { Button } from 'react-bootstrap'

class LoggedIn extends Component {
  state = {
    user_logged_in: false,
    shelter_logged_in: false,
    user_id: null,
    shelter_id: null
  };

  logout = () => {
    if (document.cookie) {
      const cookies = new Cookies();
      cookies.remove('user_id');
      cookies.remove('user_cookie');
      cookies.remove('shelter_cookie');
      cookies.remove('csrftoken');
      this.setState({
        user_logged_in: false,
        shelter_logged_in: false,
        user_id: null,
        shelter_id: null
      })
      window.location.href = '/';
    }
  }

  render() {
    // if (document.cookie) {
    //   const str = document.cookie.split('=')
    //   console.log('str: ', str)

    //   let toRemove = str[0];
    //   // const cookies = new Cookies();
    //   cookies.remove(toRemove);
    //   this.setState({
    //     user_logged_in: false,
    //     shelter_logged_in: false,
    //     user_id: null,
    //     shelter_id: null
    //   })
    // }

    return (
      <nav>
        <Button onClick={this.logout}>Logout</Button>
      </nav>
    )
  }
}

export default LoggedIn;