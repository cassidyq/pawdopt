import React from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
// import { Grid, Icon, Button } from 'semantic-ui-react';
import { IoIosHeart } from 'react-icons/io';
import { addToFavourites } from '../helpers';
import { NavLink, Route, Link } from 'react-router-dom';
import AnimalProfile from './AnimalProfile';



export default function Animals(props) {
  const { animals } = props

  return (
    <div className="animal-grid">
      {animals.map(animal => (
        < div className="card" key={animal.id} >
          <NavLink to={{ pathname: `/animals/${animal.id}`, animal_info: { animal } }}>
            <div className="imageclass">
              <img className="card-img-top" src={animal.photo_url} alt="Card image cap" />
            </div>
          </NavLink>
          <div className="card-body">
            <div className="card-title">{animal.name} </div>
            <p className="card-text">
              {animal.gender} | {animal.breed} <br />
              Age: {animal.age}
            </p>
            <div className='card-footer'>
            <span>Victoria, BC</span><IoIosHeart size={40} onClick={() => addToFavourites(animal.id)} />
            </div>
          </div>
        </div>
      )).reverse()
      }
    </div >
  )
}