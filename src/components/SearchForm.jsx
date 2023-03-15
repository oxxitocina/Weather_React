import {React, useState} from 'react'

export default function SearchForm(props) {
  const [value, setValue] = useState('');
  
  function changeInputValue(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.getCity(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="search">
        <input onChange={changeInputValue} id="city-name" className="search-input" type="text"/>
        <button type="submit" className="search-btn"></button>
    </form>
  )
}
