import React from 'react';

import WeatherCard from './components/WeatherCard';
import TemperatureChart from './components/TemperatureChart';
import WeeklyForecast from './components/WeeklyForecast';
import PrecipitationLevel from './components/PrecipitationLevel';
import SunTimings from './components/SunTimings';
import WeatherAlert from './components/WeatherAlert';
import WindInfo from './components/WindInfo';
import Sidebar from './components/Sidebar';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        {/* <WeatherCard />
        <TemperatureChart />
        <WeatherAlert />
        <WeeklyForecast />
        <PrecipitationLevel />
        <SunTimings />
        <WindInfo /> */}
      </div>
    </div>
  );
}

export default App;
