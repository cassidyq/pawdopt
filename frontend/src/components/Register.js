import React from 'react';
import '../styles/base-padding.scss';
import { Button } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login(props) {
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <div className='RegisterAs'>
      <Link to='/RegisterUser' className='register-user'>
        <Button block bsSize='large' type='submit'>
          Register a new user
        </Button>
      </Link>

      <Link to='/RegisterShelter' className='register-shelter'>
        <Button block bsSize='large' type='submit'>
          Register a new organization
        </Button>
      </Link>
    </div>
  );
}

// export default Register;
