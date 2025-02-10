import React, { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Searchbar from './Searchbar'

const Header = ({ onSearch }) => {

  const [location, setLocation] = useState('');
  
  const handleSearch = (location) => {
    setLocation(location);
    onSearch(location);
    // console.log(location);
  }
  return (
    <header className="header">
        <div className="left">
            <h1>Suivi Météo</h1>
            <p><span>Vendredi 20 septembre 2024</span></p>
        </div>
        <div className="mid">
            <Searchbar onSearch={handleSearch} />
        </div>
        <div className="right">
            <ThemeSwitcher />
        </div>
    </header>
  )
}

export default Header