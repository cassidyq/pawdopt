import React, { Component } from 'react';
import '../styles/base-padding.scss';

class User extends Component {

  state = {
    username: '',
    email: '',
    photo_url: '',
  } 

  componentDidMount() {
    const str = document.cookie.split('=');
    // const userID = Number(str[2]);
    const userID = str[1].split(';')[0];
    const token = str[2];
    console.log("id:", userID);
    console.log("str:", str);
    fetch('http://localhost:8000/api/auth/user', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("data:", data)
      this.setState({
        username: data.username,
        email: data.email,
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  render () {
    return (
      <div>
      <h1>User Page</h1>
      {this.state.username} <br/>
      {this.state.email}
      </div>
    )
  }
}


export default User;