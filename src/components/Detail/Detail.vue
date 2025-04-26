<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="spinner"></div> 
  </div>

  <div v-else-if="car" class="detail-page">
    <div class="car-info">
      <img :src="car.image" :alt="car.name" class="car-image" />
      <div class="info-overlay">
        <h1 class="car-name">{{ car.name }}</h1>
        <p class="car-title">{{ car.titel }}</p>
        <p class="car-date">Date: {{ car.date }}</p>
      </div>
    </div>

    <div class="car-details">
      <h1 class="details-title">Details</h1>
      <p class="details-desc">{{ car.desc }}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic aliquid dolorem eos maxime dolorum fugiat expedita eaque in incidunt? Adipisci a illum ducimus distinctio repellendus inventore molestias non doloribus, tempore doloremque ratione repudiandae porro modi rem officia suscipit. Fugiat delectus dolores sint repellendus dolorem illo totam consequatur cupiditate doloremque odit, quibusdam et ipsam laudantium dignissimos tenetur itaque possimus voluptatum neque necessitatibus, eveniet alias corporis ut aliquam? Officiis at tenetur natus rerum, quam dolorem aut quod repellat eveniet consequatur dignissimos! Perferendis praesentium impedit accusantium molestias eligendi quaerat facilis, et veritatis magni rem inventore omnis repudiandae ex minus exercitationem, sint expedita mollitia iure ullam sit eius molestiae? Assumenda molestiae ut officiis tempora magnam numquam molestias! Tempora esse atque aspernatur, culpa, odio fugiat cumque pariatur quos quod magnam non maiores asperiores qui excepturi! Alias architecto porro optio similique natus? Vel dolores in ratione vero porro ab, autem ad, voluptatum nobis consequuntur laboriosam voluptatem similique corrupti assumenda perspiciatis, tempora enim unde magnam dolorem nesciunt. Assumenda ducimus, ab tenetur dolorum iusto eveniet harum aperiam natus! Reiciendis amet soluta illum dignissimos rem aspernatur quod, tenetur exercitationem repellendus officia ut maxime nisi totam. Odit nesciunt nemo eligendi. Provident fugiat similique necessitatibus eaque esse fugit neque, possimus magni repellat asperiores laboriosam tempora iure reprehenderit quia commodi nulla cupiditate debitis error maiores rerum ad iusto exercitationem temporibus architecto! Quaerat blanditiis id consectetur. In consectetur dignissimos et nostrum cumque sequi veritatis! Quidem molestias modi voluptas nesciunt inventore maxime voluptate ducimus vero animi facere. Quis magnam natus velit quos numquam nobis modi debitis harum ea, dolorem rem nulla alias magni, et ex inventore quisquam? Quam distinctio temporibus accusantium hic aliquid officiis error ea est natus sit voluptatem mollitia, cum possimus corrupti voluptatum minima eum pariatur voluptas cumque, a non, harum deleniti quas. Deleniti corrupti quis odit similique obcaecati. Aliquam consectetur recusandae tenetur non tempore laborum fugit repudiandae architecto cum quisquam dolores inventore tempora dicta, earum sint perferendis dolor eaque itaque optio id sit, quam odit similique numquam. Fugit atque ipsam tempora eum, aut quo aliquid, repellendus soluta iste rem est explicabo repudiandae pariatur cum porro alias architecto eius totam ducimus asperiores dolore quod ea! Nam, ab. Molestiae ipsam architecto ipsum, cum corporis obcaecati minima quis, nostrum, officia sunt laborum. Dignissimos facilis natus eveniet aliquam quasi porro veniam error similique eos libero! Facilis quidem perferendis aliquid illo! Tempora, doloribus! Error illo neque earum mollitia, distinctio voluptatem sed, tenetur itaque laudantium iure adipisci fugiat eum assumenda provident, consequuntur impedit? Vel voluptas recusandae quisquam ipsa vitae veritatis. Sint, repellendus ab nihil placeat quaerat alias animi obcaecati repudiandae facilis vero, esse eveniet dolore exercitationem modi. Rem expedita quas nesciunt itaque sunt natus, voluptate asperiores quibusdam blanditiis iure nobis dolor laboriosam at dicta animi quaerat vitae laudantium obcaecati inventore fugit ex veritatis saepe beatae! Voluptates aut quas quisquam labore laboriosam consectetur omnis illo ipsam modi fugiat laudantium illum distinctio deleniti possimus officiis est vel, amet tenetur? Dolore amet commodi, magni debitis quia ratione fugiat nulla perferendis vel veritatis quod, a molestiae corrupti eveniet, nesciunt aperiam!</p>
    </div>

    <button class="delete-button" @click="deleteCar">Delete</button>
  </div>
</template>

<script>
import { fetchCarDetail } from '/src/services/api/getCarById.api'; 
import { deleteCar } from '/src/services/api/deleteCarById.api'; 

export default {
  name: 'DetailPage',
  data() {
    return {
      car: null,
      isLoading: true,
    }
  },
  async created() {
    const carId = this.$route.params.id;
    try {
      const carData = await fetchCarDetail(carId);
      this.car = carData;
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading car details:', error);
      this.isLoading = false;
    }
  },
  methods: {
    async deleteCar() {
      const confirmDelete = confirm('Are you sure you want to delete this car?');
      if (!confirmDelete) return;

      try {
        await deleteCar(this.car.id); 
        alert('Car deleted successfully!');
        this.$router.push('/'); 
      } catch (error) {
        alert('Error deleting the car.');
      }
    }
  }
}
</script>

<style scoped>
.detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  padding: 2rem;
  padding-left: 8rem;
  padding-right: 8rem;
}

.car-info {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 700px;
  
  border-radius: 1rem;
  overflow: hidden;
}

.car-image {
  width: 100%;
  object-fit: cover;
}

.info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #e6ecf1;
  padding: 1rem;
  text-align: left;
}

.car-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.car-title {
  margin-top: 0.5rem;
}

.car-date {
  margin-top: 0.5rem;
}

.car-details {
    
  margin-top: 2rem;
  text-align: left;
  width: 100%;
  max-width: 1200px;
}

.details-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.details-desc {
  margin-top: 1rem;
}

.delete-button {
  margin-top: 2rem;
  background-color: #ff4d4d;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #e60000;
}

/* لودینگ استایل‌ها */
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
</style>
