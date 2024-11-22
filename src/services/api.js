import axios from 'axios';

const BASE_URL = 'https://meddata-backend.onrender.com';

export const fetchStates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/states`);
    return response.data;
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error;
  }
};

export const fetchCities = async (state) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${state}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const fetchMedicalCenters = async (state, city) => {
  try {
    const response = await axios.get(`${BASE_URL}/data?state=${state}&city=${city}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching medical centers:', error);
    throw error;
  }
};
