import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/base-padding.scss';

export default function EditUserProfile(props) {
  console.log('edit user profile: ', props)
  const { photo_url, bio, user_id, profile_id } = props;

  const [profileId, setProfileId] = useState(profile_id || '');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [house, setHouse] = useState('');
  const [kids, setKids] = useState('');
  const [otherPets, setOtherPets] = useState('');
  const [allergic, setAllergic] = useState('');
  const [animalStay, setAnimalStay] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [why, setWhy] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const params = {
      name,
      address,
      city,
      postalCode,
      phone,
      email,
      birthdate,
      house,
      kids,
      otherPets,
      allergic,
      animalStay,
      activityLevel,
      why,
    };
    console.log('params: ', params)
    if (!profileId) {
      // props.onCreateSubmit(`http://127.0.0.1:8000/api/animals/`, 'POST', params);
      // props.closePopup()
    } else {
      params["id"] = profileId;
      console.log('id: ', profileId)
      props.onEditSubmit(`http://127.0.0.1:8000/api/profiles/${profileId}`, 'PUT', params);
      props.closePopup()
    }
  }

  return (
    <div className='popup' >
      <div className='popup-content'>
        <form >
          <FormGroup controlId='name' bsSize='large'>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='address' bsSize='large'>
            <ControlLabel>Address</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='city' bsSize='large'>
            <ControlLabel>City</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='postalCode' bsSize='large'>
            <ControlLabel>Postal Code</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={postalCode}
              onChange={e => setPostalCode(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='phone' bsSize='large'>
            <ControlLabel>Phone</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='email' bsSize='large'>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='birthdate' bsSize='large'>
            <ControlLabel>Birthdate</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={birthdate}
              onChange={e => setBirthdate(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='house' bsSize='large'>
            <ControlLabel>What do you live in? (House, appartment, van, etc.)</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={house}
              onChange={e => setHouse(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='kids' bsSize='large'>
            <ControlLabel>How many kids do you have?</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={kids}
              onChange={e => setKids(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='otherPets' bsSize='large'>
            <ControlLabel>Do you have other pets? If yes, what kinds?</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={otherPets}
              onChange={e => setOtherPets(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='allergic' bsSize='large'>
            <ControlLabel>Is anyone in your home allergic to dogs/cats?</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={allergic}
              onChange={e => setAllergic(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='animalStay' bsSize='large'>
            <ControlLabel>Where will your animal stay when you are not home?</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={animalStay}
              onChange={e => setAnimalStay(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='activityLevel' bsSize='large'>
            <ControlLabel>How active is your lifestyle?</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={activityLevel}
              onChange={e => setActivityLevel(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='why' bsSize='large'>
            <ControlLabel>What sets you appart as a good animal caregiver?</ControlLabel>
            <FormControl
              required
              autoFocus
              type='text'
              value={why}
              onChange={e => setWhy(e.target.value)}
            />
          </FormGroup>
          <Button onClick={onSubmit} variant="primary">Save</Button>
          <Button onClick={props.closePopup} variant="primary">Cancel</Button>
        </form>
      </div>
    </div >
  )
};
