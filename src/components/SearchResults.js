import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMedicalCenters } from '../services/api';

const SearchResults = () => {
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [searchParams] = useSearchParams();
  const state = searchParams.get('state');
  const city = searchParams.get('city');

  useEffect(() => {
    const loadMedicalCenters = async () => {
      try {
        const data = await fetchMedicalCenters(state, city);
        setMedicalCenters(data);
      } catch (error) {
        console.error('Error loading medical centers:', error);
      }
    };
    if (state && city) {
      loadMedicalCenters();
    }
  }, [state, city]);

  return (
    <div>
      <h2>Medical Centers in {city}, {state}</h2>
      <ul>
        {medicalCenters.map((center) => (
          <li key={center['Hospital Name']}>
            <h3>{center['Hospital Name']}</h3>
            <p>{center['Hospital Address']}</p>
            <p>{center.City}, {center.State} {center['ZIP Code']}</p>
            <p>Rating: {center['Hospital overall rating'] || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
