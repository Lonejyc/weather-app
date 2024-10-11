import React, { useState } from 'react'
import search from '../assets/images/Search.svg'

const Searchbar = ({ onSearch }) => {

    const [location, setLocation] = useState('');

    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            onSearch(location);
            setLocation('');
        }
    };
    
  return (
    <>
        <img src={search} alt="search icon" className="icon" />
        <input 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={searchLocation}
            type="text" 
            className="search-bar" 
            placeholder="Rechercher une ville" 
        />
    </>
  )
}

export default Searchbar