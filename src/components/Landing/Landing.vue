<template>
  <div>
    <!-- نمایش لودینگ اگر داده‌ها در حال بارگذاری هستند -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div> <!-- اسپیندر لودینگ -->
    </div>

    <!-- نمایش ماشین‌ها زمانی که داده‌ها بارگذاری شدند -->
    <div class="container" v-if="!isLoading && cars.length > 0">
      <Card
        v-for="car in cars"
        :key="car.id"
        :id="car.id"
        :name="car.name"
        :title="car.titel"
        :img="car.image"
      />
    </div>

    <!-- اگر هیچ داده‌ای وجود نداشته باشد -->
    <div v-else class="loading">
      No cars available at the moment.
    </div>
  </div>
</template>

<script>
import Card from '../card/Card.vue'
import { fetchCars } from '/src/services/api/getAllCar.api'; // ایمپورت سرویس API

export default {
  name: 'IndexPage',
  components: {
    Card
  },
  data() {
    return {
      cars: [],  // لیست ماشین‌ها
      isLoading: true,  // وضعیت لودینگ
    }
  },
  async created() {
    try {
      const carsData = await fetchCars(); // دریافت داده‌ها از API
      this.cars = carsData; // ست کردن داده‌ها در state
      this.isLoading = false;  // تغییر وضعیت لودینگ
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

/* استایل لودینگ */
.loading-overlay {
min-height: 100vh;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 8px solid #f3f3f3; /* رنگ پس زمینه */
  border-top: 8px solid #3498db; /* رنگ اسپینر */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite; /* انیمیشن چرخش */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* استایل پیغام عدم موجودی داده‌ها */
.loading {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: gray;
}
</style>
