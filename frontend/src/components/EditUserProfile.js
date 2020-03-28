import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/base-padding.scss';

export default function EditUserProfile(props) {
  console.log('edit user profile: ', props)
  const { photo_url, bio, user_id, profile_id } = props;

  const [profileId, setProfileId] = useState(profile_id || '');
  const [photoURL, setPhotoURL] = useState(photo_url || '');
  const [userBio, setUserBio] = useState(bio || '');
  // const [photoUrl, setPhotoUrl] = useState(props.animal.photo_url || '');
  // const [animalType, setAnimalType] = useState(props.animal.animal_type || '');
  // const [breed, setBreed] = useState(props.animal.breed || '');
  // const [age, setAge] = useState(props.animal.age || '');
  // const [size, setSize] = useState(props.animal.size || '');
  // const [gender, setGender] = useState(props.animal.gender || '');
  // const [shelterId, setShelterId] = useState(props.animal.shelter_id || '');

  const onSubmit = (e) => {
    e.preventDefault();
    const params = {
      photo_url: photoURL,
      bio: userBio,
      user_id: user_id,
    };
    console.log('params: ', params)
    if (!profileId) {
      // props.onCreateSubmit(`http://127.0.0.1:8000/api/animals/`, 'POST', params);
      // props.closePopup()
    } else {
      params["id"] = profileId;
      props.onEditSubmit(`http://127.0.0.1:8000/api/profiles/${profileId}`, 'PUT', params);
      props.closePopup()
    }
  }

  return (
    <div className='popup' >
      <div className='popup-content'>
        <form >
          <FormGroup controlId='name' bsSize='small'>
            <ControlLabel>Photo URL</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={photoURL}
              onChange={e => setPhotoURL(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='description' bsSize='large'>
            <ControlLabel>Bio</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={userBio}
              onChange={e => setUserBio(e.target.value)}
            />
          </FormGroup>
          <Button onClick={onSubmit} variant="primary">Save</Button>
          <Button onClick={props.closePopup} variant="primary">Cancel</Button>
        </form>
      </div>
    </div >
  )
};
