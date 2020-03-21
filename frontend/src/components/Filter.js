import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import '../styles/Filter.scss';

export default function Filter (props) {
  const [ animalType, setAnimalType ] = useState([]);
  const [ breed, setBreed ] = useState([]);
  const [ age, setAge ] = useState([]);
  const [ gender, setGender ] = useState([]);
  // const [ shelterId, setShelterId ] = useState([]);

  // Temp data - hard coded values
  const typeList = [
    {value: '', label: 'any'},
    {value: 'dog', label: 'dog'},
    {value: 'cat', label: 'cat'}
  ];

  const breedList = [
    {value: '', label: 'any'},
    {value: 'schnauzer', label: 'schnauzer'},
    {value: 'Shitzhu', label: 'Shitzhu'},
    {value: 'Siamese', label: 'Siamese'},
    {value: 'Jackrabbit', label: 'Jackrabbit'},
    {value: 'persian', label: 'persian'},
  ];

  const ageList = [
    {value: '', label: 'any'},
    {value: 'puppy', label: 'puppy'},
    {value: 'kitten', label: 'kitten'},
  ];

  const genderList = [
    {value: '', label: 'any'},
    {value: 'male', label: 'male'},
    {value: 'female', label: 'female'},
  ];

  const shelterList = [
    {value: '', label: 'any'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
  ];

  const reset = () => {
    setAnimalType([]);
    setBreed([]);
    setAge([]);
    setGender([]);
    // setShelterId([]);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const params = {
      animal_type: animalType.value,
      breed: breed.value,
      age: age.value,
      gender: gender.value,
      // shelter_id_id: Number(shelterId.value),
    }
    for(const p in params) {
      if (params[p] === undefined) params[p] = ""
    }
    console.log("params", params)
    props.onFilterSubmit(params)
    reset();
  }

  return (
    <div className="set-filter">
      <Select options={typeList} placeholder='type' onChange={setAnimalType} isSearchable={false} className="category-selector" />
      <Select options={breedList} placeholder='breed' onChange={setBreed} value={breed} isSearchable={false} className="category-selector"/>
      <Select options={ageList} placeholder='age' onChange={setAge} value={age} isSearchable={false} className="category-selector"/>
      <Select options={genderList} placeholder='gender' onChange={setGender} value={gender} isSearchable={false} className="category-selector"/>
      {/* <Select options={shelterList} placeholder='shelter' onChange={setShelterId} value={shelterId} isSearchable={false} className="category-selector"/> */}
      <button onClick={onSubmit} type='submit' className="category-selector">search</button>
    </div>
  );
}; 

