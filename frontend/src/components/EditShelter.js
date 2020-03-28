import React, { useState } from 'react';
import { Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/base-padding.scss';

export default function EditShelter (props) {
  const [ id, setId ] = useState(props.shelter.id || '');
  const [ name, setName ] = useState(props.shelter.name || '');
  const [ email, setEmail ] = useState(props.shelter.email || '');
  const [ password, setPassword ] = useState(props.shelter.password || '');
  const [ description, setDescription ] = useState(props.shelter.description || '');
  const [ photoUrl, setPhotoUrl ] = useState(props.shelter.photo_url || '');
  const [ website, setWebsite ] = useState(props.shelter.website || '');
  const [ country, setCountry ] = useState(props.shelter.country || '');
  const [ province, setProvince ] = useState(props.shelter.province || '');
  const [ city, setCity ] = useState(props.shelter.city || '');
  const [ street, setStreet ] = useState(props.shelter.street || '');
  const [ postalCode, setPostalCode ] = useState(props.shelter.postal_code || '');

  const onSubmit = (e) => {
    e.preventDefault();
    const params = {
      name,
      email,
      password,
      description,
      photo_url: photoUrl,
      website,
      country,
      province,
      city,
      street,
      postal_code: postalCode
    };

    if(!id) {
      props.onCreateSubmit(`http://127.0.0.1:8000/api/shelters`, 'POST', params);
      props.closePopup()
    } else {
      params[id] = id;
      props.onEditSubmit(`http://127.0.0.1:8000/api/shelters/${id}`, 'PUT', params);
      props.closePopup()
    }
  }

  return (
    <div className='popup'>  
    <div className='popup-content'>  
    <form>
      <FormGroup controlId='name' bsSize='small'>
        <ControlLabel>Name</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormGroup> 
      <FormGroup controlId='email' bsSize='small'>
        <ControlLabel>Email</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>  
      <FormGroup controlId='description' bsSize='small'>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </FormGroup>  
      <FormGroup controlId='shelterPhoto' bsSize='small'>
        <ControlLabel>Photo URL</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={photoUrl}
          onChange={e => setPhotoUrl(e.target.value)}
        />
      </FormGroup>  
      <FormGroup controlId='website' bsSize='small'>
        <ControlLabel>Website</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </FormGroup>  
      <FormGroup controlId='country' bsSize='small'>
        <ControlLabel>Country</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      </FormGroup>  
      <FormGroup controlId='province' bsSize='small'>
        <ControlLabel>Province</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={province}
          onChange={e => setProvince(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId='city' bsSize='small'>
        <ControlLabel>City</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId='street' bsSize='small'>
        <ControlLabel>Street</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </FormGroup>   
      <FormGroup controlId='postalcode' bsSize='small'>
        <ControlLabel>Postal Code</ControlLabel>
        <FormControl
          autoFocus
          type='text'
          value={postalCode}
          onChange={e => setPostalCode(e.target.value)}
        />
      </FormGroup>          
      <Button onClick={onSubmit} variant="primary">Save</Button>
      <Button onClick={props.closePopup} variant="primary">Cancel</Button>
    </form>  
    </div>
    </div>
  );
};