import React from 'react';

import Cloud from '../assets/images/Cloud.svg';
import DoubleCloud from '../assets/images/Double-cloud.svg';
import Rain from '../assets/images/Rainy.svg';
import Rainy from '../assets/images/Rainy2.svg';
import Snow from '../assets/images/Snowy.svg';
import SunCloud from '../assets/images/Sun-cloud.svg';
import Sun from '../assets/images/Sun.svg';
import Thunder from '../assets/images/Thunder.svg';
import Mist from '../assets/images/Mist.svg';

const WeeklyForecast = ({ data }) => {
  const calculateDailyTemperature = (data) => {
    if (!data || !data.list || data.list.length === 0) {
      return [];
    }

    const dailyTemperature = {};
    const dailyIcon = {};

    data.list.forEach(entry => {
      const date = new Date(entry.dt * 1000);
      const day = date.toLocaleDateString('fr-FR', { weekday: 'short' }).charAt(0).toUpperCase() + date.toLocaleDateString('fr-FR', { weekday: 'short' }).slice(1, 3);
      
      if (!dailyTemperature[day]) {
        dailyTemperature[day] = [];
      }

      if (!dailyIcon[day]) {
        dailyIcon[day] = [];
      }
      
      dailyTemperature[day].push(entry.main.temp);
      dailyIcon[day].push(entry.weather[0].icon);
    });

    const dailyAverages = Object.keys(dailyTemperature).map(day => {
      let temperature = [];
      if (dailyTemperature[day].length < 8) {
        temperature = dailyTemperature[day];
      } else {
        temperature = dailyTemperature[day].slice(3, 7);
      }
      const averageTemperature = Math.round(temperature.reduce((sum, value) => sum + value, 0) / temperature.length);
      return { day, averageTemperature };
    });

    const dailyIcons = Object.keys(dailyIcon).map(day => {
      const icon = dailyIcon[day];
      const averageIcon = icon.filter(i => !i.includes('n')).sort((a, b) =>
        icon.filter(v => v === a).length - icon.filter(v => v === b).length
      ).pop();
      let weatherImage;
      switch (averageIcon) {
        case "01d": weatherImage = Sun; break;
        case "02d": weatherImage = SunCloud; break;
        case "03d": weatherImage = Cloud; break;
        case "04d": weatherImage = DoubleCloud; break;
        case "09d": weatherImage = Rain; break;
        case "10d": weatherImage = Rainy; break;
        case "11d": weatherImage = Thunder; break;
        case "13d": weatherImage = Snow; break;
        case "50d": weatherImage = Mist; break;
        default: weatherImage = SunCloud;
      }
      return { day, weatherImage };
    });

    console.log(dailyAverages);
    console.log(dailyIcons);

    return dailyAverages && dailyIcons ? dailyAverages.map((daily, index) => ({ ...daily, ...dailyIcons[index] })) : [];
  };

  const dailyTemperatureAverages = calculateDailyTemperature(data);

  return (
    <div className="weekly-forecast">
      <h3>Météo de la semaine</h3>
      <div className="container">
        {dailyTemperatureAverages.map((daily, index) => (
          <div key={index} className="day">
            <p className='day-name' >{daily.day}</p>
            <img src={daily.weatherImage} className='icon' alt="weather" />
            <p className='temperature' >{daily.averageTemperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;
