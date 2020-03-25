import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  // Hashrouter,
  // Switch,
  // Redirect
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Register from './Register';
import Shelter from './Shelter';
import Login from './Login';
import LoginUser from './LoginUser';
import LoginShelter from './LoginShelter';
import RegisterUser from './RegisterUser';
import RegisterShelter from './RegisterShelter';
import Cookies from 'universal-cookie';
import AnimalProfile from './AnimalProfile';

// import PrivateRoute from './common/PrivateRoute';
// import { loadUser } from '../actions/auth';
class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  cookies = new Cookies();


  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/register' exact component={Register} />
        <Route exact path='/shelter' exact component={Shelter} />
        <Route exact path='/login' exact component={Login} />
        <Route exact path='/loginShelter' exact component={LoginShelter} />
        <Route exact path='/loginUser' exact component={LoginUser} />
        <Route
          exact
          path='/RegisterShelter'
          exact
          component={RegisterShelter}
        />
        <Route
          exact
          path='/RegisterUser'
          exact
          component={RegisterUser}
        />
        <Route exact path='/animals/:id' exact component={AnimalProfile} />
      </BrowserRouter>
    );
  }
}

export default App;
