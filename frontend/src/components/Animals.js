import React from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
import { Grid } from 'semantic-ui-react';


export default function Animals(props) {

  return (
    <div>
  {props.animals.map(animal => (
  <div className="temp" key={animal.id}>
    <div className="imageclass">
    <img className="card-img-top" src={animal.photo_url} alt="Card image cap"/>
    </div>
    <div className="card-body">
    <h1 className="card-title">{animal.name} </h1>
    <p className="card-text">
    {animal.breed} <br/>
    {animal.animal_type} <br/>
    </p>
    </div>
  </div>

)).reverse()}
  </div>
    )

}