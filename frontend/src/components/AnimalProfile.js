import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/AnimalProfile.scss';
// import { Grid, Icon, Button } from 'semantic-ui-react';
import { IoIosHeart } from 'react-icons/io';
import { Button } from 'react-bootstrap';

// import { addToFavourites } from '../helpers';

class AnimalProfile extends Component {
  state = {
    animal: {}
  }


  componentDidMount() {
    console.log('this.props: ', this.props)
    if (this.props.location.animal_info) {
      this.setState({
        animal: this.props.location.animal_info.animal
      })
      console.log('this.state: ', this.state)
    } else {
      fetch(`http://127.0.0.1:8000/api/animals/${this.props.match.params.id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('data: ', data)
          this.setState({
            animal: data
          })
          console.log('this.state: ', this.state)
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    console.log('this.state: ', this.state)
    if (!this.state.animal) {
      return <div></div>
    }
    let animal = this.state.animal;
    return (
      <div className="animal-profile-container" >
          <h1 className="animal-profile-title">Meet {animal.name} </h1>
        <div className="animal-details">

          <div className="animal-profile-imageclass">
            <img className="animal-profile-img-top" src={animal.photo_url} alt="animal profile image cap" />
          </div>
          <div className="animal-profile-caption">
            <div className="caption-categories">
              Type: {animal.animal_type} <br />
              Breed: {animal.breed}<br />
              Gender: {animal.gender} <br />
              Age: {animal.age}<br />
              Description: {animal.description} <br />
            </div>

          </div>
          {/* <div className="animal-note">Note: {animal.description}</div> */}
        </div>

        <span className="animal-bio">
          <div className="about-me">About Me</div>
          <p className="animal-bio-text">Doggo ipsum shooberino bork what a nice floof fat boi tungg, corgo mlem. long woofer h*ck fat boi. Borkdrive what a nice floof shooberino bork doing me a frighten heckin angery woofer big ol pupper heckin angery woofer waggy wags wow such tempt, h*ck very good spot noodle horse doing me a frighten dat tungg tho very taste wow thicc. Noodle horse adorable doggo length boy corgo very taste wow, heckin good boys long doggo borking doggo. Long water shoob boofers sub woofer doggo fluffer waggy wags snoot, long woofer the neighborhood pupper porgo pupperino. Such treat pats stop it fren bork, you are doing me the shock aqua doggo.</p>
          <div className="pawdopt-me">
            <button className='adopt-me-button' variant="primary">Pawdopt Me</button>
          </div>
        </span>
      </div>
    )
  }
}

export default AnimalProfile;

