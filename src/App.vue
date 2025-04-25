<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './Layout/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout
  }
}
</script>
