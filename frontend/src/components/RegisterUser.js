import React, { Component, useState } from 'react';
import '../styles/base-padding.scss';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';

export default function RegisterUser(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const [photoURL, setPhotoURL] = useState('');

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && password === confirmPassword
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function registerNewUser() {
    console.log('submiting');
    fetch('http://127.0.0.1:8000/registerUser/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      })
    });
  }

  // async registerNewUSer() {
  //   try {
  //     const res = await fetch('http://127.0.0.1:8000/api/user'); // fetching the data from api, before the page loaded
  //     const animals = await res.json();
  //     console.log('testing');
  //     this.setState({
  //       animals
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  return (
    <div className='register-user'>
      <form onSubmit={handleSubmit} method='post'>
        <FormGroup controlId='firstName' bsSize='large'>
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            autoFocus
            type='firstName'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='lastName' bsSize='large'>
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            autoFocus
            type='lastName'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
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
        <FormGroup controlId='confirmPassword' bsSize='large'>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type='password'
          />
        </FormGroup>
        <Link to='/' className='login-submit'>
          <Button
            block
            bsSize='large'
            disabled={!validateForm()}
            type='submit'
            onClick={registerNewUser}
          >
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
}
