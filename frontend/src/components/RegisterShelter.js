import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authRegister } from '../store/actions/auth';
// import { createMessage } from '../actions/messages';

class RegisterShelter extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
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
      fetch('/api/auth/register', {
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
            this.props.history.push('/shelter');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/shelter' />;
    }
    const { username, email, password, confirmpassword } = this.state;

    return (
      <div className='col-md-6 m-auto'>
        <div className='card card-body mt-5'>
          <h2 className='text-center'>Register</h2>
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
// import React, { Component, useState } from 'react';
// import '../styles/base-padding.scss';
// import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
// import './Login.css';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// export default function Login(props) {
//   const [name, setName] = useState('');

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className='register-shelter'>
//       <form onSubmit={handleSubmit}>
//       <FormGroup controlId='Name' bsSize='large'>
//           <ControlLabel>Name</ControlLabel>
//           <FormControl
//             autoFocus
//             type='email'
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         <FormGroup controlId='email' bsSize='large'>
//           <ControlLabel>Email</ControlLabel>
//           <FormControl
//             autoFocus
//             type='email'
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId='password' bsSize='large'>
//           <ControlLabel>Password</ControlLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type='password'
//           />
//         </FormGroup>
//         <Link to='/' className='login-submit'>
//           <Button block bsSize='large' disabled={!validateForm()} type='submit'>
//             Login
//           </Button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// // export default Login;
