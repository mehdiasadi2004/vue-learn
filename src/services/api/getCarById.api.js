// src/services/api/carDetailService.js
import axios from 'axios'

const API_URL = 'https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars'

export const fetchCarDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data 
  } catch (error) {
    console.error('Error fetching car detail:', error)
    throw error 
  }
}
