// src/services/api/deleteCarById.api.js
import axios from 'axios'

export async function deleteCar(id) {
  const url = `https://66e3fba7d2405277ed128b1e.mockapi.io/api/brand/cars/${id}`

  try {
    const response = await axios.delete(url)
    return response.data
  } catch (error) {
    console.error('Error deleting car:', error)
    throw error
  }
}
