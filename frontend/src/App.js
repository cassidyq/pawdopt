import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    adopters: []
  };

  // function App() {
  //   return (
  //     <div className='App'>
  //       <header className='App-header'>
  //         <img src={logo} className='App-logo' alt='logo' />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className='App-link'
  //           href='https://reactjs.org'
  //           target='_blank'
  //           rel='noopener noreferrer'
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/adopters'); // fetching the data from api, before the page loaded
      const adopters = await res.json();
      console.log('adopters: ', adopters);
      this.setState({
        adopters
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.adopters.map(item => (
          <div key={item.id}>
            <h1>{item.first_name}</h1>
            <h1>{item.last_name}</h1>
            <h1>{item.email}</h1>
            <h1>{item.password}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
