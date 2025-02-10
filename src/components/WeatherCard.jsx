import React from 'react';

import Cloud from '../assets/images/Cloud.svg';
import DoubleCloud from '../assets/images/Double-cloud.svg';
import MoonCloud from '../assets/images/Moon-cloud.svg';
import Moon from '../assets/images/Moon.svg';
import Rain from '../assets/images/Rainy.svg';
import Rainy from '../assets/images/Rainy2.svg';
import Snow from '../assets/images/Snowy.svg';
import SunCloud from '../assets/images/Sun-cloud.svg';
import Sun from '../assets/images/Sun.svg';
import Thunder from '../assets/images/Thunder.svg';
import Mist from '../assets/images/Mist.svg';

import location from '../assets/images/Location.svg';

const WeatherCard = ({ data }) => {
  const date = new Date();
  const day = date.toLocaleDateString('fr-FR', { weekday: 'long' });
  const month = date.toLocaleDateString('fr-FR', { month: 'long' });
  const dayNumber = date.getDate();
  const year = date.getFullYear();
  const today = `${dayNumber} ${month} ${year}`;

  const locationName = data.name || 'France';
  const weatherDescription = data.weather ? data.weather[0].description : 'Nuageux & Ensoleillé';
  const temperature = data.main ? `${Math.round(data.main.temp)}°C` : '27°C';
  const tempHigh = data.main ? `${Math.round(data.main.temp_max)}°` : '29°';
  const tempLow = data.main ? `${Math.round(data.main.temp_min)}°` : '15°';

  const weatherIcon = data.weather ? data.weather[0].icon : "02d";
  let weatherImage;
  switch (weatherIcon) {
    case "01d": weatherImage = Sun; break;
    case "01n": weatherImage = Moon; break;
    case "02d": weatherImage = SunCloud; break;
    case "02n": weatherImage = MoonCloud; break;
    case "03d":
    case "03n": weatherImage = Cloud; break;
    case "04d":
    case "04n": weatherImage = DoubleCloud; break;
    case "09d":
    case "09n": weatherImage = Rain; break;
    case "10d":
    case "10n": weatherImage = Rainy; break;
    case "11d":
    case "11n": weatherImage = Thunder; break;
    case "13d":
    case "13n": weatherImage = Snow; break;
    case "50d":
    case "50n": weatherImage = Mist; break;
    default: weatherImage = SunCloud;
  }

  return (
    <div className="weather-card">
      <div className="head">
        <div className="day">
          <h2>{day}</h2>
          <p className='subtitle'>{today}</p>
        </div>
        <div className="location">
          <img src={location} alt="location icon" className='icon' />
          <p className='value'>{locationName}</p>
        </div>
      </div>
      <div className="content">
        <div className="weather">
        <img src={weatherImage} alt="weather icon" className='icon' />
          <p className="description">{weatherDescription}</p>
        </div>
        <div className="temperature">
          <p className='value'>{temperature}</p>
          <p className='infos'>Haut: {tempHigh} Bas: {tempLow}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
