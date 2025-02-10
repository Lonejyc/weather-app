import React from 'react';

import Wind from '../assets/images/Wind.svg';

const WindInfo = ({ data }) => {
  
  const WindSpeed = data.wind ? `${Math.round(data.wind.speed)}km/h` : "0km/h";
  const WindMaxSpeed = data.wind ? `${Math.round(data.wind.gust)}km/h` : "km/h";

  return (
    <div className="wind-info">
      <h3>Vent</h3>
      <div className="moy">
        <img src={Wind} className='icon' alt="Wind Icon" />
        <p className="name">Vitesse moyenne</p>
        <p className="content">{WindSpeed}</p>
      </div>
      <div className="max">
        <img src={Wind} className='icon' alt="Wind Icon" />
        <p className="name">Vitesse maximum</p>
        <p className="content">{WindMaxSpeed}</p>
      </div>
    </div>
  );
}

export default WindInfo;
