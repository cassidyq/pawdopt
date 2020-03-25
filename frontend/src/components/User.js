import React, { Component } from 'react';
import '../styles/base-padding.scss';

class User extends Component {

  state = {
    username: '',
  } 

  componentDidMount() {
    const token = document.cookie.split('=')[1];
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
        username: data.username
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
      {this.state.username}
      </div>
    )
  }
}


export default User;