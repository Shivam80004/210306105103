import axios from 'axios';

const API_BASE_URL = 'https://'; // Replace with actual API base URL

const fetchNumber = async (type) => {
  try {
    const response = await axios.get(`http://20.244.56.144/numbers/${type}`, { timeout: 500 });
    return response.data.number;
  } catch (error) {
    console.error('API call failed or took too long:', error);
    return null;
  }
};

export { fetchNumber };
