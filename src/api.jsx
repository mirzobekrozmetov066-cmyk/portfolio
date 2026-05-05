import React, { useState } from 'react';
import './api.css';

function App() {
  // 1. Ma'lumotlarni saqlash uchun State-lar
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = '07e9502cf9acab3b59d606a3207695d7'; // Oxiridagi 'w' ni olib tashladim (OpenWeather uchun)
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  // 2. Ma'lumot olish funksiyasi
  const getWeatherData = async (searchCity) => {
    try {
      const response = await fetch(apiUrl + searchCity + `&appid=${apiKey}`);
      const data = await response.json();

      if (data.cod === 200) {
        setWeatherData(data);
        setError(""); // Xatolikni tozalash
      } else {
        setError("Shahar topilmadi!");
        setWeatherData(null);
      }
    } catch (err) {
      setError("Server bilan bog'lanishda xatolik!");
      setWeatherData(null);
    }
  };

  // 3. Qidirish tugmasi bosilganda
  const handleSearch = () => {
    if (city.trim()) {
      getWeatherData(city);
    } else {
      setError("Iltimos, shahar nomini kiriting!");
    }
  };

  return (
    <div className="container">
      <h1>Ob-havo ma'lumotlari</h1>
      
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Shahar nomini kiriting"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Qidirish</button>
      </div>

      {/* 4. Xatolik xabarini ko'rsatish */}
      {error && <p className="error" style={{color: 'red'}}>{error}</p>}

      {/* 5. Ma'lumotlar bor bo'lganda UI ni ko'rsatish */}
      {weatherData && (
        <div className="weather-info">
          <h1>{weatherData.name}</h1>
          <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
          <p className="desc">{weatherData.weather[0].description}</p>
          <div className="details">
            <p>Namlik: {weatherData.main.humidity}%</p>
            <p>Shamol: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;