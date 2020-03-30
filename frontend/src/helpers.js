export const updateFavourites = function (animalID, callBackToggleFavourite) {
  let userID = null;
  let user_favourites;
  if (document.cookie.includes('user_id')) {
    const str = document.cookie.split('; ');
    const cookie1 = str[0].split('=');
    const cookie2 = str[1].split('=');

    if (cookie1[0].includes('user_id')) {
      userID = Number(cookie1[1])
    } else if (cookie2[0].includes('user_id')) {
      userID = Number(cookie2[1])
    }
  }

  fetch('http://localhost:8000/api/favourites/', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      let user_favourite = data.filter(favourite => favourite.user_id === userID && favourite.animal_id === animalID);

      if (user_favourite.length === 0) { //create new favourite object
        fetch('http://localhost:8000/api/favourites/', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "user_id": userID,
            "animal_id": animalID,
            "active": true
          })
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            callBackToggleFavourite(data)
          })

      } else { //update existing favourite
        let opposite_of = user_favourite[0].active;
        let favourite_object_id = user_favourite[0].id;
        let update_body = {
          "user_id": userID,
          "animal_id": animalID,
          "active": !opposite_of
        }
        fetch(`http://localhost:8000/api/favourites/${favourite_object_id}`, {
          method: 'PUT', // or 'PUT'
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(update_body)
        })
          .then(response => response.json())
          .then(data => {
            callBackToggleFavourite(data)
          })

      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

export const addApplication = function (animalId, userId, status, applicationInfo) {
  fetch('http://localhost:8000/api/applications/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userId,
      animal_id: animalId,
      status,
      info: applicationInfo
    })
  })
    .then(response => response.json())
    .then(data => {
<<<<<<< HEAD
      console.log('new app', data)
=======
      // console.log('new app', data)
      // console.log('added')
>>>>>>> master
    })
    .catch(error => {
      console.error('Error:', error);
    });
}