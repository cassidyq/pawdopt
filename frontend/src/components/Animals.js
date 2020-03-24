import React from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
// import { Grid, Icon, Button } from 'semantic-ui-react';
import { IoIosHeart } from 'react-icons/io';
// import { addToFavourites } from '../helpers';
import { NavLink } from 'react-router-dom';



export default function Animals(props) {
  const { animals } = props

  console.log(animals)


  return (
    <div className="animal-grid">
      {animals.map(animal => (
        < div className="card" key={animal.id} >
          <NavLink to={`/animals/${animal.id}`} props={animal}>
            <div className="imageclass">
              <img className="card-img-top" src={animal.photo_url} alt="Card image cap" />
            </div>
          </NavLink>

          <div className="card-body">
            <h1 className="card-title">{animal.name} </h1>
            <p className="card-text">
              {animal.breed} <br />
              {animal.animal_type} <br />
              {animal.age} years old.<br />
              <IoIosHeart size={40} />
            </p>
          </div>
        </div>
      )).reverse()
      }
    </div >
  )
}