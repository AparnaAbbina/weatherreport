"use client";
import React, { useState } from 'react';
import './Weatherdata.css';

const Weatherdata = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getData = async (event) => {
    event.preventDefault();

    // Configuration of Url, lat, and lon values
    const weatherApiUrl = 'https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast';
    const apiKey = 'a2ef86c41a&amp';
    const lat = '27.987850';
    const lon = '86.925026';

    // Fetching weather data using Longitude and Latitude values
    try {
      const response = await fetch(`${weatherApiUrl}?appid=${apiKey}&lat=${lat}&lon=${lon}`);
      if (!response.ok) {
        throw new Error('Failed to fetch current weather data');
      }

      const data = await response.json();
      console.log(data);
      setWeather(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Unable to fetch weather data at this time.');
      setWeather(null);
    }
  };

  return (
    <div className="weather-data">
      <button onClick={getData}>Get Weather Data</button>
      {weather ? (
        <div id="weather-container" className="weather-container">
          <h2>Weather Report</h2>
          <p>Temperature: {weather.list[0].main.temp}°C</p>
          <p>Weather: {weather.list[0].weather[0].description}</p>
          <p>Humidity: {weather.list[0].main.humidity}%</p>
          <p>Wind Speed: {weather.list[0].wind.speed} m/s</p>
        </div>
      ) : (
        <p>{error ? error : 'No weather data available.'}</p>
      )}
    </div>
  );
};

export default Weatherdata;
