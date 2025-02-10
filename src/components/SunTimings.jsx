import React from 'react';

import Sunrise from '../assets/images/Sunrise.png';
import Sunset from '../assets/images/Sunset.png';

const SunTimings = ({ data }) => {

  const SunriseH = data.sys ? new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "6h43";
  const SunsetH = data.sys ? new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "19h15";

  return (
    <div className="sun-timings">
      <h3>Soleil</h3>
      <div className="sunrise">
        <img src={Sunrise} className='icon' alt="Sunrise Icon" />
        <div className="content">
          <p className='text'>Lever</p>
          <p className='time'>{SunriseH}</p>
        </div>
      </div>
      <div className="sunset">
        <img src={Sunset} className='icon' alt="Sunset Icon" />
        <div className="content">
          <p className='text'>Coucher</p>
          <p className='time'>{SunsetH}</p>
        </div>
      </div>
    </div>
  );
}

export default SunTimings;
