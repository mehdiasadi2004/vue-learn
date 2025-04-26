<template>
  <div class="header" @click="goHome">
    <span class="logo">MOTOR SPORT</span>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup() {
    const router = useRouter()
    const goHome = () => {
      router.push('/')
    }
    return { goHome }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding:1% 20% ;
  box-shadow: 10px 5px 5px 0px rgba(211, 211, 211, 0.1);
}

.logo {
  font-weight: 800;
  font-size: 2.25rem; 
  font-family: serif;
}
</style>
