import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const TemperatureChart = ({ data }) => {
  if (!data || !data.list || data.list.length === 0) {
    data = { list: Array(7).fill({ main: { temp: 0 } }) };
  }

  const temperatureData = [];
  data.list.slice(0, 7).forEach(entry => {
    temperatureData.push(Math.round(entry.main.temp));
  });

  const chartData = {
    labels: ['+00H00', '+03H00', '+06H00', '+09H00', '+12H00', '+15H00', '+18H00'],
    datasets: [{
      label: 'Température',
      data: temperatureData.length > 0 ? temperatureData : [0, 0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: 'rgb(116, 163, 252)',
    }]
  };
  const minTemp = Math.min(...temperatureData);
  const maxTemp = Math.max(...temperatureData);

  const adjustedMin = minTemp % 2 === 0 ? minTemp - 4 : minTemp - 5;
  const adjustedMax = maxTemp % 2 === 0 ? maxTemp + 4 : maxTemp + 5;

  const config = {
    type: 'line',
    data: chartData,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: {
          min: adjustedMin,
          max: adjustedMax,
        }
      }
    }
  };

  useEffect(() => {
    const ctx = document.querySelector('.chart').getContext('2d');
    if (ctx) {
      const chartInstance = new Chart(ctx, config);
      return () => {
        chartInstance.destroy();
      };
    }
  }, [data]);

  return (
    <div className="temperature-chart">
      <h3>Évolution de la température</h3>
      <canvas className="chart"></canvas>
    </div>
  );
}

export default TemperatureChart;
