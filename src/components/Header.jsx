import React from 'react'
import search from '../assets/images/Search.svg'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header class="header">
        <div className="left">
            <h1>Suivi Météo</h1>
            <p><span>Vendredi 20 septembre 2024</span></p>
        </div>
        <div className="mid">
            <img src={search} alt="search icon" className="icon" />
            <input type="search" className="search-bar" placeholder="Rechercher une ville" />
        </div>
        <div className="right">
            <ThemeSwitcher />
        </div>
    </header>
  )
}

export default Header