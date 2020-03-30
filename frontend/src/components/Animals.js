import React, { useState } from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
// import { Grid, Icon, Button } from 'semantic-ui-react';
import { IoIosHeart } from 'react-icons/io';
import ClipLoader from "react-spinners/ClipLoader";
import { updateFavourites } from '../helpers';
import { NavLink, Route, Link } from 'react-router-dom';
import AnimalProfile from './AnimalProfile';



export default function Animals(props) {
  const { animals, favourite_animal_ids, toggleFavourite, loading } = props

  return (
    <div className="animal-grid">
            <div className="loading-status">
            <ClipLoader
              size={150}
              color={"#7091E2"}
              loading={loading}
            />
          </div>

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
                  <span>Victoria, BC</span>{(favourite_animal_ids.includes(animal.id)) ? <IoIosHeart size={40} color={'red'} onClick={() => toggleFavourite(animal.id)} /> : <IoIosHeart size={40} onClick={() => toggleFavourite(animal.id)} />}
                </div>
              </div>
            </div>
          )).reverse()
          }
    </div >
  )
}