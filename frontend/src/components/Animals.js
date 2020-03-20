import React from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
import { Grid } from 'semantic-ui-react';


export default function Animals(props) {

  let show = 9; // shows 5 - 1
  const filterRecent = props.animals.filter((x, i) => {
    if (i > props.animals.length - show) return x;
  });


  const dogFilter = props.animals.filter((x, i) => {
    if (x.animal_type.toLowerCase() === "dog") return x;
  })

  /*
    The idea here would be to have a conditional to check if 
    any search filters are selected, if not display with filterRecent
    1. get bootstrap card to show on screen
  */

  return (
    <div>
{dogFilter.map(animal => (
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



/* <img className="animal-img"src='https://www.traditionsvetcenters.com/sites/default/files/styles/large/adaptive-image/public/miniature-schnauzer-dog-breed-infp.jpg?itok=BUA05j1p'/> <br/> */

// {filterRecent.map(animal => (
//   <div className="row" key={animal.id}>
//     <div>
//       {animal.photo_url} <br/>
//       {animal.name} <br/>
//       {animal.breed} <br/>
//       {animal.age} <br/>
//       </div>
//   </div>
// )).reverse()}

{/* <div className="four wide col" key={animal.id}>
<div className="ui segment">
  <img className="animal-img" src={animal.photo_url}/> <br/>
  {animal.name} <br/>
  {animal.breed} <br/>
  {animal.age} <br/>
  </div>
</div> */}
