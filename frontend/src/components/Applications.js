import React, { useState } from 'react';
import '../styles/base-padding.scss';

export default function Application (props) {
  const [ user, setUser ] = useState({});
  const [ animal, setAnimal ] = useState({});
  const [ bio, setBio ] = useState([]);
  

  
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/applications/")
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(() => this.setState({ hasErrors: true }));
  }
}