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
