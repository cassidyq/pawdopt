import React, { useState, useEffect } from 'react';
import Select  from 'react-select';
import { Button } from 'react-bootstrap';
import makeAnimated from 'react-select/animated';
import '../styles/Filter.scss';

export default function Filter (props) {
  const [ animalType, setAnimalType ] = useState([]);
  const [ breed, setBreed ] = useState([]);
  const [ age, setAge ] = useState([]);
  const [ gender, setGender ] = useState([]);
  const [ shelterId, setShelterId ] = useState([]);
  const [ filterClass, setFilterClass ] = useState('set-filter');

  const formatOptions = (optionsArray) => {
    let output = [{'value': '', 'label': 'any'}]
    if(optionsArray) {
      optionsArray.forEach( val => {
        output.push({ 'value': val, 'label': val })
      });
    }
    return output;
  }

  const reset = () => {
    setAnimalType([]);
    setBreed([]);
    setAge([]);
    setGender([]);
    setShelterId([]);
  }

  useEffect(() => {
    const filter = document.getElementsByClassName("set-filter");
    
    console.log(filter)
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 320) {
        setFilterClass('set-filter sticky');
      } else {
        setFilterClass('set-filter');
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const params = {
      animal_type: animalType.value,
      breed: breed.value,
      age: age.value,
      gender: gender.value,
      shelter_id_id: Number(shelterId.value),
    }
    for(const p in params) {
      if (params[p] === undefined) params[p] = ""
    }
    console.log("params", params)
    props.onFilterSubmit(params)
    reset();
  }

  return (
    <div>
      <div className='header'>
      <p className='slogan'>Find your next best friend.</p>
      </div>
      <div className={filterClass}>
        <Select options={formatOptions(props.categories.typeList)} placeholder='type' onChange={setAnimalType} isSearchable={false} className="category-selector" />
        <Select options={formatOptions(props.categories.breedList)} placeholder='breed' onChange={setBreed} value={breed} isSearchable={false} className="category-selector"/>
        <Select options={formatOptions(props.categories.ageList)} placeholder='age' onChange={setAge} value={age} isSearchable={false} className="category-selector"/>
        <Select options={formatOptions(props.categories.genderList)} placeholder='gender' onChange={setGender} value={gender} isSearchable={false} className="category-selector"/>
        <Select options={formatOptions(props.categories.shelterList)} placeholder='shelter' onChange={setShelterId} value={shelterId} isSearchable={false} className="category-selector"/>
        <Button onClick={onSubmit} variant="primary" type='submit' className="category-selector">search</Button>
      </div>
    </div>
  );
}; 

