// import React from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';
// import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import * as actions from '../store/actions/auth';

// const Login = () => {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if(!err) {
//         console.log('Recieved: ', values);
//         this.props.onAuth(values.userName, values.password)
//       }
//     });
//     this.props.history.push('/');
//   }

//   render() {
//     let errorMessage = null;
//     if (this.props.error){
//       errorMessage = (
//         <p>{this.props.error.message}</p>
//       )
//     }
//     const {getFieldDecorator} = this.props.form;

//   return (
//     <div>
//       {errorMessage}
//       {this.props.loading ?
//         <Spin />
//       :

//         <Form
//           name='normal_login'
//           className='login-form'
//           initialValues={{
//             remember: true
//           }}
//           onFinish={onFinish}
//         >
//           <Form.Item
//             name='username'
//             rules={[
//               {
//                 required: true,
//                 message: 'Please input your Username!'
//               }
//             ]}
//           >
//             <Input
//               prefix={<UserOutlined className='site-form-item-icon' />}
//               placeholder='Username'
//             />
//           </Form.Item>

//           <Form.Item
//             name='password'
//             rules={[
//               {
//                 required: true,
//                 message: 'Please input your Password!'
//               }
//             ]}
//           >
//             <Input
//               prefix={<LockOutlined className='site-form-item-icon' />}
//               type='password'
//               placeholder='Password'
//             />
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type='primary'
//               htmlType='submit'
//               style={{ marginRight: '10px' }}
//             >
//               Login
//             </Button>
//             Or
//             <NavLink style={{ marginRight: '10px' }} to='register'>
//               Register
//             </NavLink>
//           </Form.Item>
//         </Form>
//       }
//     </div>
//   );
// };

// let WrappedNormalLoginForm = Form.create()(Login);
// const mapStateToProps = (state) => {
//   return {
//     loading: state.loading,
//     error: state.error
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     onAuth: (username, password) => dispatch(actions.authLogin(username, password))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
import React, { useState } from 'react';
import '../styles/base-padding.scss';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { Link, Route, Redirect } from 'react-router-dom';
import * as actions from '../store/actions/auth';
// import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('')
  const [id, setId] = useState('');

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = event => {
    event.preventDefault();

    const credentials = {
      username: username,
      password: password
    };
    // console.log('credentials: ', credentials);
    // actions.authLogin(username, password);
    fetch('http://localhost:8000/api/auth/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success1:', data);
        if (data.token) {
          setToken(data.token)
          setId(data.user.id);
          console.log("token: ", data.token)
          this.props.history.push(`/shelter/${data.user.id}`);
        } else {
          setToken('');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (

    <div className='Login'>
      <h1 className="page-title">Shelter Login</h1>
      <form>
        <FormGroup controlId='username' bsSize='large'>
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            type='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
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
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Link>
        Or
        <Link to='/register'> Register</Link>
      </form>
    </div>
  );
}

// export default Login();
// let WrappedNormalLoginForm = Form.create()(Login);
// const mapStateToProps = state => {
//   return {
//     loading: state.loading,
//     error: state.error
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     onAuth: (username, password) =>
//       dispatch(actions.authLogin(username, password))
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WrappedNormalLoginForm);
