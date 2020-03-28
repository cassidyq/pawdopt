import React, { useState } from 'react';
import '../styles/base-padding.scss';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default function NewApplication (props) {
 
  const [ applicationInfo, setApplicationInfo ] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    props.onApplicationSubmit(props.animal_id, props.user_id, props.status, applicationInfo);
    props.closePopup();
  }

  return (
    <div className='popup'>  
      <div className='popup-content'>  
        <form>
          <FormGroup controlId='name' bsSize='small'>
            <ControlLabel>Tell us why you want to adopt {props.animal_name}</ControlLabel>
            <FormControl
              autoFocus
              type='text'
              onChange={e => setApplicationInfo(e.target.value)}
            />
          </FormGroup> 
          <Button onClick={onSubmit} variant="primary">Save</Button>
          <Button onClick={props.closePopup} variant="primary">Cancel</Button>
        </form>
      </div>
    </div>
  )
 
}