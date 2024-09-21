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
        <WeatherCard />
        <div className="temperature-and-alerts">
          <TemperatureChart />
          <WeatherAlert />
        </div>
        <div className="weekly-and-precipitation">
          <WeeklyForecast />
          <PrecipitationLevel />
        </div>
        <div className="sun-and-wind">
          <SunTimings />
          <WindInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
