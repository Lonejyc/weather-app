import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const TemperatureChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Looping tension',
      data: [15, 25, 30, 20, 35, 28, 22],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  };
  const config = {
    type: 'line',
    data: data,
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
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 40
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
  }, []);

  return (
    <div className="temperature-chart">
      <h3>Évolution de la température</h3>
      <canvas className="chart"></canvas>
    </div>
  );
}

export default TemperatureChart;
