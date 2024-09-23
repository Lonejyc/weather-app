import React from 'react'

const Header = () => {
  return (
    <header class="header">
        <div className="left">
            <h1>Suivi Météo</h1>
            <p><span>Vendredi 20 septembre 2024</span></p>
        </div>
        <div className="mid">
            <input type="search" className="search-bar" placeholder="Rechercher une ville" />
        </div>
        <div className="right">
            <input type="checkbox" name="theme" />
        </div>
    </header>
  )
}

export default Header