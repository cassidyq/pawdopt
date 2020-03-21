import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { authRegister } from '../store/actions/auth';
// import { createMessage } from '../actions/messages';

class RegisterShelter extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    auth: false,
    token: null,
    id: null
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
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
      // this.props.register(newUser);
      fetch('http://localhost:8000/api/auth/register', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          if (data.token) {
            this.setState({
              auth: true,
              id: data.user.id,
              token: data.token
            });
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
      return <Redirect to={`/shelter/${this.state.id}`} />;
    }
    const { username, email, password, confirmpassword } = this.state;

    return (
      <div className='col-md-6 m-auto'>
        <div className='card card-body mt-5'>
          <h2 className='text-center'>Organization Registration</h2>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                name='email'
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className='form-group'>
              <label>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                name='confirmpassword'
                onChange={this.onChange}
                value={confirmpassword}
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary'>
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default RegisterShelter;
