import React from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
// import { Grid, Image } from 'semantic-ui-react';

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
    <div className="ui grid">
    {filterRecent.map(item => (
      <div className="four wide column"key={item.id}>
        <div className="ui segment">
          <img className="animal-img"src='https://www.traditionsvetcenters.com/sites/default/files/styles/large/adaptive-image/public/miniature-schnauzer-dog-breed-infp.jpg?itok=BUA05j1p'/> <br/>
          {item.name} <br/>
          {item.breed} <br/>
          {item.age} <br/>
          </div>
      </div>
    )).reverse()}
      </div>
    )

}

