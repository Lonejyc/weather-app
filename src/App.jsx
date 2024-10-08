import React, { useState } from 'react';
import axios from 'axios';

import WeatherCard from './components/WeatherCard';
import TemperatureChart from './components/TemperatureChart';
import WeeklyForecast from './components/WeeklyForecast';
import PrecipitationLevel from './components/PrecipitationLevel';
import SunTimings from './components/SunTimings';
import WeatherAlert from './components/WeatherAlert';
import WindInfo from './components/WindInfo';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import './App.css';

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=fr&units=metric`;

  const searchLocation = (location) => {
    setLocation(location);
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header onSearch={searchLocation} />
        <div className="bento">
          <WeatherCard data={data}/>
          <TemperatureChart />
          <WeeklyForecast />
          <SunTimings data={data}/>
          <WindInfo />
          <WeatherAlert />
          <PrecipitationLevel />
        </div>
      </div>
    </div>
  );
}

export default App;
