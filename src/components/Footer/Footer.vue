<template>
  <div class="footer">
    <SubFooter />
    <SubFooter />
    <SubFooter />
    <SubFooter />
  </div>
</template>

<script>
import SubFooter from './SubFooter/SubFooter.vue'

export default {
  name: 'Footer',
  components: {
    SubFooter
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 350px;
  border-top: 2px solid #f0f4f8; /* معادل border-LightGrayBlue */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
</style>
