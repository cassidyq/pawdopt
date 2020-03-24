import React, { Component } from 'react';
import '../styles/base-padding.scss';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { Link, NavLink, Redirect } from 'react-router-dom';
// import * as actions from '../store/actions/auth';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

class LoginUser extends Component {
  state = {
    username: '',
    password: '',
    auth: false,
    token: null,
    id: null
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = event => {
    event.preventDefault();

    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
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
          this.setState({
            auth: true,
            id: data.user.id,
            token: data.token
          });
          const cookies = new Cookies();
          cookies.set('user_cookie', `${data.user.id}`, { path: '/' });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  render() {
    if (this.state.auth) {
      return <Redirect to={`/user/${this.state.id}`} />
    }

    const { username, password } = this.state;

    return (
      <div className='Login' >
        <h1 className="page-title">User Login</h1>
        <form>
          <FormGroup controlId='username' bsSize='large'>
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type='username'
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='password' bsSize='large'>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type='password'
            />
          </FormGroup>
          <NavLink to='' className='login-submit'>
            <Button
              block
              bsSize='large'
              disabled={!this.validateForm()}
              type='submit'
              onClick={this.handleSubmit}
            >
              Login
          </Button>
          </NavLink>
        Or
        <Link to='/register'> Register</Link>
        </form>
      </div>
    );
  }
}
export default LoginUser;

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
