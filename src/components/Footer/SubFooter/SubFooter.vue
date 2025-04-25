<template>
  <div>
    <ul>
      <span class="section-title">About us</span>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubFooter',
  data() {
    return {
      items: [
        "blog",
        "business",
        "shop",
        "none",
        "content",
        "blog",
        "business",
        "shop",
        "none",
        "content",
      ]
    }
  }
}
</script>

<style scoped>
.section-title {
  font-weight: 600;
  font-size: 1.25rem; /* text-xl */
}

.item {
  cursor: pointer;
  margin-left: 0.5rem;
  transition: color 0.2s ease;
}

.item:hover {
  color: #06b6d4; /* cyan-500 */
}
</style>
