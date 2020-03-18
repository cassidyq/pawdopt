import React, { Component } from 'react';
import '../styles/base-padding.scss';
import '../styles/Animals.scss';
import { Grid, Image } from 'semantic-ui-react';

export default function Animals(props) {
  // state = {
  //   animals: []
  // };
  console.log('animals prop:', props.animals);

    return (
      <div className="ui grid">
      {props.animals.map(item => (
        <div className="four wide column"key={item.id}>
          <div className="ui segment">
            <img className="animal-img"src='https://www.traditionsvetcenters.com/sites/default/files/styles/large/adaptive-image/public/miniature-schnauzer-dog-breed-infp.jpg?itok=BUA05j1p'/> <br/>
            {item.name} <br/>
            {item.breed} <br/>
            </div>
        </div>
      
      ))}
        </div>
    )

}