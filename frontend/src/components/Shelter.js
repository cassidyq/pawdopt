import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/shelter.scss';

class Home extends Component {
  state = {
    shelters: [],
    current_shelter: [],
    animals: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/shelters'); // fetching the data from api, before the page loaded
      const shelters = await res.json();
      const current_shelter = shelters.filter(shelter => shelter.id === 2); // <--set this to be the shelter id from cookie
      const animals = current_shelter[0].animals;
      // const applications = current_shelter[0].applications
      console.log(current_shelter);
      console.log('animals', animals);
      this.setState({
        shelters,
        current_shelter,
        animals
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <body>
        <div class='shelter-profile'>
          {this.state.current_shelter.map(item => (
            <div>
              <div key={item.id}>
                <h1>{item.name}</h1>
                <img
                  src={item.photo_url}
                  class='shelter-logo'
                  alt='shelter logo'
                ></img>
                <div>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div class='shelter-animals'>
          <h1>Active Animals</h1>
          {this.state.animals.map(animal => (
            <div>
              <div key={animal.id}>
                <h1>{animal.name}</h1>
                <img
                  src={animal.photo_url}
                  class='shelter-logo'
                  alt='animal'
                ></img>
                <div>{animal.description}</div>
              </div>
            </div>
          ))}
        </div>
      </body>
    );
  }
}

export default Home;
