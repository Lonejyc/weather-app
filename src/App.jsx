import React, { useState, useEffect } from 'react';
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
  const [forecastData, setForecastData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=fr&units=metric`;

  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&lang=fr&units=metric`;

  const defaultLocation = 'Aix-Les-Bains';

  const searchLocation = (location) => {
    setLocation(location);
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    axios.get(urlForecast).then((response) => {
      setForecastData(response.data);
      console.log(response.data);
    });
  }

  useEffect(() => {
    setLocation(defaultLocation);
    axios.get(url.replace('${location}', defaultLocation)).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    axios.get(urlForecast.replace('${location}', defaultLocation)).then((response) => {
      setForecastData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header onSearch={searchLocation} />
        <div className="bento">
          <WeatherCard data={data}/>
          <TemperatureChart data={forecastData} />
          <WeeklyForecast data={forecastData} />
          <SunTimings data={data}/>
          <WindInfo data={data} />
          <WeatherAlert data={forecastData} />
          <PrecipitationLevel data={forecastData} />
        </div>
      </div>
    </div>
  );
}

export default App;
