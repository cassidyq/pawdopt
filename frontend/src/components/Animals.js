import React from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
// import { Grid, Icon, Button } from 'semantic-ui-react';
import { IoIosHeart } from 'react-icons/io';
import { addToFavourites } from '../helpers';

export default function Animals(props) {
  const { animals } = props

  console.log(animals)


  return (
    <div className="animal-grid">
      {animals.map(animal => (
        < div className="card" key={animal.id} >
          <div className="imageclass">
            <img className="card-img-top" src={animal.photo_url} alt="Card image cap" />
          </div>
          <div className="card-body">
            <h1 className="card-title">{animal.name} </h1>
            <p className="card-text">
              {animal.breed} <br />
              {animal.animal_type} <br />
              <IoIosHeart size={40} onClick={addToFavourites} />
            </p>
          </div>
        </div>
      )).reverse()
      }
    </div >
  )
}