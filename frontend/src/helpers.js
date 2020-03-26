
import Cookies from 'universal-cookie';

// const cookies = new Cookies();


export const addToFavourites = function (animalID) {
  console.log('animal ID: ', animalID)
  const newFavourite = {
    user_id: null,
    animal_id: animalID,
    active: true
  };
  console.log('document: ', document.cookie)
  // let token = document.cookie.split('=')[1]
  if (document.cookie) {
    let str = document.cookie.split('=');
    let userID = Number(str[2]);
    let token = str[1].split(';')[0];

    console.log('str: ', str)
    console.log('token: ', token)
    console.log('userID: ', userID)
    newFavourite.user_id = userID;
    console.log('newFave: ', newFavourite)
  }



  fetch('http://localhost:8000/api/favourites/', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newFavourite)
  })
    .then(response => response.json())
    .then(data => {
      console.log('data:', data)
      console.log('added')
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

