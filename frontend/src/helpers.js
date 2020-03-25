
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
  let token = document.cookie.split('=')[1]
  console.log('token: ', token)
  console.log('new: ', newFavourite)

  //this line isn't waiting for the data.
  newFavourite.user_id = getUserID(token);
  console.log('new: ', newFavourite)

  // fetch('http://localhost:8000/api/auth/register', {
  //   method: 'POST', // or 'PUT'
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(newFavourite)
  // })
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
}

export const getUserID = function (token) {
  fetch('http://localhost:8000/api/auth/user', {
    method: 'GET', // or 'PUT'
    headers: {
      'Authorization': `Token ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      if (data.id) {
        let userID = data.id;
        // console.log(userID)
        return userID;
      } else {
        return undefined;
      }
    })
    .then(addToFavourites)
    .catch(error => {
      console.error('Error:', error);
    });
}