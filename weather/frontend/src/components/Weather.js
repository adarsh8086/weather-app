// import React, { useState, useEffect } from 'react';
// import '../styles/Weather.css';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState('');  // To hold the city name
//   const [loading, setLoading] = useState(false);  // To show loading state

//   // Function to fetch weather data based on the city entered
//   const fetchWeatherData = (city) => {
//     setLoading(true);  // Set loading to true when fetching starts
//     fetch(`http://127.0.0.1:8000/api/weather/?city=${city}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherData(data);
//         setLoading(false);  // Set loading to false when data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);
//         setLoading(false);  // Set loading to false in case of error
//       });
//   };

//   // Handle the submit event to fetch data for the entered city
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (city) {
//       fetchWeatherData(city);  // Fetch weather data for the entered city
//     }
//   };

//   // If no weather data is available, show loading text
//   if (loading) {
//     return <div>Loading weather data...</div>;
//   }

//   return (
//     <div className="weather-container">
//       <h2>Weather App</h2>
      
//       {/* Form to enter the city */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}  // Update city state on input change
//         />
//         <button type="submit">Get Weather</button>
//       </form>

//       {/* Display weather data if available */}
//       {weatherData && (
//         <div>
//           <h3>Weather in {weatherData.name}</h3>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Condition: {weatherData.weather[0].description}</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;






import React, { useState, useEffect } from 'react';
import '../styles/Weather.css';
import { FaSun, FaCloudRain, FaCloud, FaWind, FaTint } from 'react-icons/fa';  // Importing React Icons

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');  // To hold the city name
  const [loading, setLoading] = useState(false);  // To show loading state

  // Function to fetch weather data based on the city entered
  const fetchWeatherData = (city) => {
    setLoading(true);  // Set loading to true when fetching starts
    fetch(`http://127.0.0.1:8000/api/weather/?city=${city}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);  // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);  // Set loading to false in case of error
      });
  };

  // Handle the submit event to fetch data for the entered city
  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      fetchWeatherData(city);  // Fetch weather data for the entered city
    }
  };

  // Function to display weather icon based on the description
  const getWeatherIcon = (description) => {
    if (description.includes('clear') || description.includes('sun')) {
      return <FaSun style={{ fontSize: '50px', margin: '10px' }} color="yellow" />;
    } else if (description.includes('rain')) {
      return <FaCloudRain style={{ fontSize: '50px', margin: '10px' }} color="blue" />;
    } else if (description.includes('cloud')) {
      return <FaCloud style={{ fontSize: '50px', margin: '10px' }} color="gray" />;
    } else {
      return <FaCloud style={{ fontSize: '50px', margin: '10px' }} color="black" />;
    }
  };

  // If no weather data is available, show loading text
  if (loading) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      
      {/* Form to enter the city */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}  // Update city state on input change
        />
        <button type="submit">Get Weather</button>
      </form>

      {/* Display weather data if available */}
      {weatherData && (
        <div>
          <h3>Weather in {weatherData.name}</h3>
          <div>{getWeatherIcon(weatherData.weather[0].description)}</div>
          
          <p className="temperature">
            <FaSun style={{ fontSize: '30px', marginRight: '10px' }} />
            Temperature: {weatherData.main.temp}°C
          </p>

          <p className="condition">
            Condition: {weatherData.weather[0].description}
          </p>

          <div className="weather-info">
            <p>
              <FaTint style={{ fontSize: '30px', marginRight: '10px' }} />
              Humidity: {weatherData.main.humidity}%
            </p>

            <p>
              <FaWind style={{ fontSize: '30px', marginRight: '10px' }} />
              Wind Speed: {weatherData.wind.speed} m/s
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;



