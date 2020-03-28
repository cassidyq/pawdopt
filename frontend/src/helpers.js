
import Cookies from 'universal-cookie';

export const removeFromFavourites = function (animalID) {
  console.log('need to remove: ', animalID)
}


export const addToFavourites = function (animalID) {
  // console.log('animal ID: ', animalID)
  const newFavourite = {
    user_id: null,
    animal_id: animalID,
    active: true
  };
  // console.log('document: ', document.cookie)
  // let token = document.cookie.split('=')[1]
  if (document.cookie.includes('user_id')) {
    const str = document.cookie.split('; ');
    const cookie1 = str[0].split('=');
    const cookie2 = str[1].split('=');

    if (cookie1[0].includes('user_id')) {
      newFavourite.user_id = Number(cookie1[1])
    } else if (cookie2[0].includes('user_id')) {
      newFavourite.user_id = Number(cookie2[1])
    }
    // console.log('newFave: ', newFavourite)
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
      // console.log('added to Faves:', data)
      // console.log('added')
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

