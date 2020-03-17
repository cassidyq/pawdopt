import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';



class App extends Component {
  state = {
    users: []
  };


  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/users'); // fetching the data from api, before the page loaded
      const users = await res.json();
      console.log('testing');
      this.setState({
        users
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/register" component={Register}/>

        {/* {this.state.users.map(item => (
          <div key={item.id}>
            <h1>{item.first_name}</h1>
            <h1>{item.last_name}</h1>
            <h1>{item.email}</h1>
            <h1>{item.password}</h1>
          </div>
        ))} */}
      </BrowserRouter>
    );
  }
}

export default App;
