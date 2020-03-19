import React from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
import { Grid } from 'semantic-ui-react';

export default function Animals(props) {
  let show = 5; // shows 5 - 1
  const filterRecent = props.animals.filter((x, i) => {
    if (i > props.animals.length - show) return x;
  });

  /*
    The idea here would be to have a conditional to check if 
    any search filters are selected, if not display with filterRecent
  */

  return (
    <Grid>
      {filterRecent
        .map(animal => (
          <div className='four wide col' key={animal.id}>
            <div className='ui segment'>
              <img className='animal-img' src={animal.photo_url} /> <br />
              {animal.name} <br />
              {animal.breed} <br />
              {animal.age} <br />
            </div>
          </div>
        ))
        .reverse()}
    </Grid>
  );
}

/*{
  /* <img className="animal-img"src='https://www.traditionsvetcenters.com/sites/default/files/styles/large/adaptive-image/public/miniature-schnauzer-dog-breed-infp.jpg?itok=BUA05j1p'/> <br/> */
// }

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
