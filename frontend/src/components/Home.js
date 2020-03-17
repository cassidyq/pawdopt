import React, { Component } from 'react';
import '../styles/base-padding.scss';

class Home extends Component {
  state = {
    adopters: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/adopters'); // fetching the data from api, before the page loaded
      const adopters = await res.json();
      console.log('testing');
      this.setState({
        adopters
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <body>
        <p>Welcome to Pawdopt!</p>
        {this.state.adopters.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </body>
    );
  }
}

export default Home;
