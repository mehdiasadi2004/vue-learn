<template>
  <div>
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>

    <div v-else>
      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for a car..."
          class="search-input"
        />
      </div>

      <div v-if="filteredCars.length > 0" class="container">
        <Card
          v-for="car in filteredCars"
          :key="car.id"
          :id="car.id"
          :name="car.name"
          :title="car.title"
          :img="car.image"
        />
      </div>

      <div v-else class="loading">
        No cars found.
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../card/Card.vue';
import { fetchCars } from '/src/services/api/getAllCar.api';

export default {
  name: 'IndexPage',
  components: {
    Card
  },
  data() {
    return {
      cars: [],
      isLoading: true,
      searchQuery: '', 
    };
  },
  computed: {
    filteredCars() {
      if (!this.searchQuery) return this.cars;
      const query = this.searchQuery.toLowerCase();
      return this.cars.filter(car => car.name.toLowerCase().includes(query));
    }
  },
  async created() {
    try {
      const carsData = await fetchCars();
      this.cars = carsData;
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading cars:', error);
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
.container {
  padding: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}

/* استایل سرچ */
.search-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.search-input {
  width: 300px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #3498db;
}

.loading-overlay {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: gray;
  min-height: 80vh;
}
</style>
