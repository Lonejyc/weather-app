import React from 'react';

const PrecipitationLevel = ({ data }) => {
  const calculateDailyHumidityAverages = (data) => {
    if (!data || !data.list || data.list.length === 0) {
      return [];
    }

    const dailyHumidity = {};

    data.list.forEach(entry => {
      const date = new Date(entry.dt * 1000);
      const day = date.toLocaleDateString('fr-FR', { weekday: 'short' }).charAt(0).toUpperCase() + date.toLocaleDateString('fr-FR', { weekday: 'short' }).slice(1, 3);
      
      if (!dailyHumidity[day]) {
        dailyHumidity[day] = [];
      }
      
      dailyHumidity[day].push(entry.main.humidity);
    });

    const dailyAverages = Object.keys(dailyHumidity).map(day => {
      const humidities = dailyHumidity[day];
      const averageHumidity = humidities.reduce((sum, value) => sum + value, 0) / humidities.length;
      return { day, averageHumidity };
    });

    return dailyAverages;
  };

  const dailyHumidityAverages = calculateDailyHumidityAverages(data);
  // console.log(dailyHumidityAverages);
  return (
    <div className="precipitation-level">
      <h3>Niveau d'humidité</h3>
      <div className="container">
        <div className="y-axis">
          {[100, 80, 60, 40, 20, 0].map(value => (
            <div key={value} className="y-axis-label">{value}%</div>
          ))}
        </div>
        <div className="bars">
          {dailyHumidityAverages.map(({ day, averageHumidity }) => (
            <div key={day} className="bar-container">
              <div className="bar">
                <div className="back"></div>
                <div className="fill" style={{ height: `${averageHumidity}%` }}></div>
              </div>
              <div className="day-label">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrecipitationLevel;
