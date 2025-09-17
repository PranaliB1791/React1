import React, { useState, useEffect } from 'react';

export default function ForecastApp() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    // Dummy 5-day forecast data
    const dummyData = [
      { date: '2025-09-01', temp: 20, description: 'Sunny' },
      { date: '2025-09-02', temp: 22, description: 'Cloudy' },
      { date: '2025-09-03', temp: 18, description: 'Rainy' },
      { date: '2025-09-04', temp: 21, description: 'Sunny' },
      { date: '2025-09-05', temp: 19, description: 'Windy' },
    ];
    setForecast(dummyData);
  }, []);

  if (!forecast || forecast.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h2>5-Day Forecast</h2>
      <ul>
        {forecast.map((f, idx) => (
          <li key={idx}>
            {f.date} - {f.temp}°C - {f.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
