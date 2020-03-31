import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/Login.scss';
import '../styles/base-padding.scss';

class RegisterUser extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    auth: false,
    token: null,
    id: null
  };

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, confirmpassword } = this.state;
    if (password !== confirmpassword) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        email,
        password
      };
      console.log('newUser: ', newUser)
      fetch('http://localhost:8000/api/auth/register', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          if (data.token) {
            this.setState({
              auth: true,
              id: data.user.id,
              token: data.token
            });
            //setting cookie?
            const cookies = new Cookies();
            cookies.set('user_id', `${data.user.id}`, { path: '/' })
            cookies.set('user_cookie', `${data.token}`, { path: '/' });
            window.location.href = '/';
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.state.auth) {
      return <Redirect to={`/user/${this.state.id}`} />;
    }
    const { username, email, password, confirmpassword } = this.state;

    return (
      <div className='Register'>
        <h1 className='page-title'>User Registration</h1>
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
          <FormGroup controlId='email' bsSize='large'>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type='username'
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
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
          <FormGroup controlId='confirmpassword' bsSize='large'>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={confirmpassword}
              onChange={e => this.setState({ confirmpassword: e.target.value })}
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
            Register
          </Button>
        Or
        <Link to='/login'> Login</Link>
        </form>
      </div>
    );
  }
}
export default RegisterUser;