<template>
  <div @click="goToDetail" class="card">
    <div class="card-img">
      <img :src="img" class="img" />
    </div>
    <div class="card-content">
      <span class="name">{{ name }}</span>
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Card',
  props: {
    name: String,
    title: String,
    img: String,
    id: String,
  },
  setup(props) {
    const router = useRouter()
    const goToDetail = () => {
      router.push(`/detail/${props.id}`)
    }
    return { goToDetail }
  },
}
</script>

<style scoped>
.card {
  background-color: #0f0f0f; /* معادل LightGrayBlue فرضی */
  height: 250px;
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: 0px 1px 18px 5px rgb(0, 216, 245);
}

.card-img {
  height: 70%;
  width: 100%;
}

.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card-content {
  padding: 2px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.name {
  font-size: 1.125rem; /* text-lg */
  font-weight: bold;
  color: #f1f1f1;
}

.title {
  font-size: 0.875rem; /* text-sm */
  line-height: 16px;
  color: #b3b3b3; /* معادل text-BoxBg فرضی */
}
</style>
