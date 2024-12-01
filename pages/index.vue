<script lang="ts" setup>
  import useCategories from '@/stores/categories'
  
  const categories = useCategories()
  const { data } = storeToRefs(categories)
</script>

<template>
  <div class="items">
    {{ data }}
  </div>
</template>

<style scoped>
  div.items {
    width: 100vw;
    height: 100%;
    overflow: hidden;
    @apply bg-stone-900;
  }
</style>