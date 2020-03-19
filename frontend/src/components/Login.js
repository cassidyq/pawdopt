import React, { useState } from 'react';
import '../styles/base-padding.scss';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // function registerNewUser() {
  //   console.log('submiting');
  //   fetch('http://127.0.0.1:8000/api/users', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       first_name: firstName,
  //       last_name: lastName,
  //       email: email,
  //       password: password
  //     })
  //   });
  // }

  function verifyLogin(email, password) {
    return fetch('http://127.0.0.1:8000/api/users')
      .then(response => response.json())
      .then(userData => {
        console.log(userData);
        userData.filter(x => {
          console.log(x);
          if (x.password === password && x.email === email) {
            return x;
          }
        });
      })
      .catch(error => {
        console.log('user not in db');
        console.error(error);
      });
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='email' bsSize='large'>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </FormGroup>
        <Link to='/' className='login-submit'>
          <Button
            block
            bsSize='large'
            disabled={!validateForm()}
            type='submit'
            onClick={verifyLogin(email, password)}
          >
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
}

// export default Login;
