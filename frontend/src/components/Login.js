import React from 'react';
import '../styles/base-padding.scss';
import { Button } from 'react-bootstrap';
import '../styles/Login.scss';
import { Link } from 'react-router-dom';

export default function Login(props) {

  return (
    <div className='LoginAs'>
      <Link to='/LoginUser' className='login-user'>
        <Button block bsSize='large' type='submit'>
          Login as a user
        </Button>
      </Link>

      <Link to='/LoginShelter' className='login-shelter'>
        <Button block bsSize='large' type='submit'>
          Login as an organization
        </Button>
      </Link>
    </div>
  );
}

