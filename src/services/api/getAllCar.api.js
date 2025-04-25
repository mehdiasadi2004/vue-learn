// src/services/api/carService.js
import axios from 'axios'

const API_URL = 'https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars'

export const fetchCars = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data // برمی‌گردونه داده‌ها رو از API
  } catch (error) {
    console.error('Error fetching cars:', error)
    throw error // خطا رو پرتاب می‌کنیم برای استفاده در کامپوننت
  }
}
