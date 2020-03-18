import React, { Component, useState } from 'react';
import '../styles/base-padding.scss';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

export default function Login(props) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='RegisterAs'>
      <Link to='/RegisterUser' className='register-user'>
        <Button block bsSize='large' type='submit'>
          User
        </Button>
      </Link>
      <Link to='/RegisterShelter' className='register-shelter'>
        <Button block bsSize='large' type='submit'>
          Organization
        </Button>
      </Link>
    </div>
  );
}

// export default Register;
