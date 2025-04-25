<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>
<style scoped>
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
}

.main {
  width: 100%;
  height: 90%;
}
</style>