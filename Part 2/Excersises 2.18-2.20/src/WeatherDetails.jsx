// WeatherDetails.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDetails = ({ capital, latlng }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    if (latlng) {
      const [lat, lon] = latlng;
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [latlng, API_KEY]);

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>temperature {weather.main.temp} °C</p>
      <p>wind {weather.wind.speed} m/s</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
    </div>
  );
};

export default WeatherDetails;
