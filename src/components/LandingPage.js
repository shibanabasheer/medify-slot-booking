import React, { useState, useEffect } from 'react';
import { fetchStates, fetchCities } from '../services/api';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadStates = async () => {
      try {
        const data = await fetchStates();
        setStates(data);
      } catch (error) {
        console.error('Error loading states:', error);
      }
    };
    loadStates();
  }, []);

  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity('');
    if (state) {
      try {
        const citiesData = await fetchCities(state);
        setCities(citiesData);
      } catch (error) {
        console.error('Error loading cities:', error);
      }
    }
  };

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      navigate(`/search?state=${selectedState}&city=${selectedCity}`);
    }
  };

  return (
    <div>
      <h1>MEDIFY Platform</h1>
      <div>
        <label>State:</label>
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <label>City:</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button onClick={handleSearch} disabled={!selectedCity}>
          Search
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
