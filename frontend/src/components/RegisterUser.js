import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { authRegister } from '../store/actions/auth';
// import { createMessage } from '../actions/messages';

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
      return <Redirect to={`/user/${this.state.id}`} />;
    }
    const { username, email, password, confirmpassword } = this.state;

    return (
      <div className='col-md-6 m-auto'>
        <div className='card card-body mt-5'>
          <h2 className='text-center'>User Registration</h2>
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
export default RegisterUser;

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { authRegister })(RegisterUser);
//###################
// import React, { Component, useState } from 'react';
// import '../styles/base-padding.scss';
// import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
// import './Login.css';
// import { Link } from 'react-router-dom';

// export default function RegisterUser(props) {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // const [photoURL, setPhotoURL] = useState('');

//   function validateForm() {
//     return (
//       email.length > 0 && password.length > 0 && password === confirmPassword
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   function registerNewUser() {
//     console.log('submiting');
//     fetch('http://127.0.0.1:8000/registerUser/', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         first_name: firstName,
//         last_name: lastName,
//         email: email,
//         password: password
//       })
//     });
//   }

//   // async registerNewUSer() {
//   //   try {
//   //     const res = await fetch('http://127.0.0.1:8000/api/user'); // fetching the data from api, before the page loaded
//   //     const animals = await res.json();
//   //     console.log('testing');
//   //     this.setState({
//   //       animals
//   //     });
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }
//   return (
//     <div className='register-user'>
//       <form onSubmit={handleSubmit} method='post'>
//         <FormGroup controlId='firstName' bsSize='large'>
//           <ControlLabel>First Name</ControlLabel>
//           <FormControl
//             autoFocus
//             type='firstName'
//             value={firstName}
//             onChange={e => setFirstName(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId='lastName' bsSize='large'>
//           <ControlLabel>Last Name</ControlLabel>
//           <FormControl
//             autoFocus
//             type='lastName'
//             value={lastName}
//             onChange={e => setLastName(e.target.value)}
//           />
//         </FormGroup>
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
//         <FormGroup controlId='confirmPassword' bsSize='large'>
//           <ControlLabel>Confirm Password</ControlLabel>
//           <FormControl
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//             type='password'
//           />
//         </FormGroup>
//         <Link to='/' className='login-submit'>
//           <Button
//             block
//             bsSize='large'
//             disabled={!validateForm()}
//             type='submit'
//             onClick={registerNewUser}
//           >
//             Login
//           </Button>
//         </Link>
//       </form>
//     </div>
//   );
// }
