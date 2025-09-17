import React, { useState, useEffect } from 'react';

export default function TodayApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Dummy data instead of API call
    const dummyData = {
      name: 'London',
      main: { temp: 20 },
      weather: [{ description: 'Sunny' }]
    };
    setWeather(dummyData);
  }, []);

  if (!weather || !weather.main) return <p>Loading...</p>;

  return (
    <div>
      <h2>Today in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}
