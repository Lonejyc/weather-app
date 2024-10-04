import React from 'react';
import suncloud from '../assets/images/Sun-cloud.svg';
import location from '../assets/images/location.svg';

const WeatherCard = () => {
  const date = new Date();
  const day = date.toLocaleDateString('fr-FR', { weekday: 'long' });
  const month = date.toLocaleDateString('fr-FR', { month: 'long' });
  const dayNumber = date.getDate();
  const year = date.getFullYear();
  const today = `${dayNumber} ${month} ${year}`;

  return (
    <div className="weather-card">
      <div className="head">
        <div className="day">
          <h2>{day}</h2>
          <p className='subtitle'>{today}</p>
        </div>
        <div className="location">
          <img src={location} alt="location icon" className='icon' />
          <p className='value'>France</p>
        </div>
      </div>
      <div className="content">
        <div className="weather">
          <img src={suncloud} alt="weather icon" className='icon' />
          <p className="description">Nuageux & Ensoleillé</p>
        </div>
        <div className="temperature">
          <p className='value'>27°C</p>
          <p className='infos'>Haut: 29° Bas: 15°</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
