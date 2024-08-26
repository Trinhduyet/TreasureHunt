import axios from 'axios';

const API_BASE_URL = 'http://localhost:5107'; // Update with your backend URL

export const calculateMinimumFuel = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/api/TreasureHunt`, data);
    return response.data.minFuel;
};
