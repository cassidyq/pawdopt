import React, { Component, useState } from 'react';


export default function Filter (props) {
  const [ animalType, setAnimalType ] = useState('Best Animal');
  const [ breed, setBreed ] = useState('');
  const [ age, setAge ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ shelterId, setShelterId ] = useState('');

  const reset = () => {
    setAnimalType('');
    setBreed('');
    setAge('');
    setGender('');
    setShelterId('');
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const params = {
      animal_type: animalType,
      breed,
      age,
      gender,
      shelter_id: shelterId
    }
    props.onFilterSubmit(params)
    reset();
  }

  return (
    <form>            
      <label htmlFor="animal_type">AnimalType</label>   
      <input onChange={e => setAnimalType(e.target.value)} type="text" name="animal-type" id="animal-type" value={animalType}/> 
      <label htmlFor="breed">Breed</label> 
      <input onChange={e => setBreed(e.target.value)} type="text" name="breed" id="breed" />
      <label htmlFor="age">Age</label> 
      <input onChange={setAge} type="text" name="age" id="age"  />    
      <label htmlFor="gender">Gender</label>         
      <input onChange={setGender} type="text" name="gender" id="gender"  />
      <label htmlFor="shelter_id">Shelter ID</label>         
      <input onChange={setShelterId} type="text" name="shelter-id" id="shelter-id"  />   
      <button onClick={onSubmit} type='submit'>Search</button>
    </form>  
  );
}; 