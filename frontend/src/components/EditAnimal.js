import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/base-padding.scss';

export default function EditAnimal(props) {
  const [id, setId] = useState(props.animal.id || '');
  const [name, setName] = useState(props.animal.name || '');
  const [description, setDescription] = useState(props.animal.description || '');
  const [photoUrl, setPhotoUrl] = useState(props.animal.photo_url || '');
  const [animalType, setAnimalType] = useState(props.animal.animal_type || '');
  const [breed, setBreed] = useState(props.animal.breed || '');
  const [age, setAge] = useState(props.animal.age || '');
  const [size, setSize] = useState(props.animal.size || '');
  const [gender, setGender] = useState(props.animal.gender || '');
  const [shelterId, setShelterId] = useState(props.animal.shelter_id || '');

  const onSubmit = (e) => {
    e.preventDefault();
    const params = {
      name,
      description,
      photo_url: photoUrl,
      animal_type: animalType,
      breed,
      age,
      size,
      gender,
      shelter_id: shelterId
    };
    if (!id) {
      props.onCreateSubmit(`http://127.0.0.1:8000/api/animals/`, 'POST', params);
    } else {
      params[id] = id;
      props.onEditSubmit(`http://127.0.0.1:8000/api/animals/${id}`, 'PUT', params);
    }
  }

  return (
    <form>
      <FormGroup controlId='name' bsSize='small'>
        <ControlLabel>Name</ControlLabel>
        <FormControl
          required
          autoFocus
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId='description' bsSize='small'>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          required
          autoFocus
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId='photo' bsSize='small'>
        <ControlLabel>Photo URL</ControlLabel>
        <FormControl
          required
          autoFocus
          type='text'
          value={photoUrl}
          onChange={e => setPhotoUrl(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId='type' bsSize='small'>
        <ControlLabel>Animal Type</ControlLabel>
        <FormControl
          required
          autoFocus
          type='text'
          value={animalType}
          onChange={e => setAnimalType(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId='breed' bsSize='small'>
        <ControlLabel>Breed</ControlLabel>
        <FormControl
          required
          autoFocus
          type='text'
          value={breed}
          onChange={e => setBreed(e.target.value)}
        />
      </FormGroup>

      <FormGroup controlId='age' bsSize='small'>
        <ControlLabel>Age</ControlLabel>
        <FormControl 
          required 
          componentClass="select" 
          placeholder="Choose..." 
          value={"0-1"} 
          onChange={e => setAge(e.target.value)} >
            <option>0-1</option>
            <option>1-3</option>
            <option>3-6</option>
            <option>6-10</option>
            <option>10+</option>
      </FormControl>
      </FormGroup>

      <FormGroup controlId='size' bsSize='small'>
        <ControlLabel>Size</ControlLabel>
        <FormControl
          required
          autoFocus
          type='text'
          value={size}
          onChange={e => setSize(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId='gender' bsSize='small'>
        <ControlLabel>Gender</ControlLabel>
        <FormControl
          required
          autoFocus
          type='text'
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
      </FormGroup>
      <Button onClick={onSubmit} variant="primary">Save</Button>
    </form>
  );
};
