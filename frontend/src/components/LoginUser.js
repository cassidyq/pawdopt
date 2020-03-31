import React, { Component } from 'react';
import '../styles/base-padding.scss';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/Login.scss';
import { Link, NavLink, Redirect } from 'react-router-dom';
// import * as actions from '../store/actions/auth';
// import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

class LoginUser extends Component {
  state = {
    username: '',
    password: '',
    auth: false,
    token: null,
    id: null
  }

  // static propTypes = {
  //   register: PropTypes.func.isRequired,
  //   isAuthenticated: PropTypes.bool
  // };

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = event => {
    event.preventDefault();

    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    fetch('http://localhost:8000/api/auth/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success1:', data);
        if (data.token) {

          const cookies = new Cookies();
          cookies.set('user_cookie', `${data.token}`, { path: '/' });
          cookies.set('user_id', `${data.user.id}`, { path: '/' })
          this.setState({
            auth: true,
            id: data.user.id,
            token: data.token
          });
          window.location.href = '/';

        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  render() {
    if (this.state.auth) {
      return <Redirect to={`/`} />
    }

    const { username, password } = this.state;

    return (
      <div className='Login' >
        <h1 className="page-title">User Login</h1>
        <form>
          <FormGroup controlId='username' bsSize='large'>
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type='username'
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='password' bsSize='large'>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type='password'
            />
          </FormGroup>
          <Button
            block
            bsSize='large'
            disabled={!this.validateForm()}
            type='submit'
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        Or
        <Link to='/register'> Register</Link>
        </form>
      </div>
    );
  }
}
export default LoginUser;