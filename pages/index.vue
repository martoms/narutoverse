<script lang="ts" setup>
import useCategoriesStore from '@/stores/categories'

const categoriesStore = useCategoriesStore()
const { data: d } = storeToRefs(categoriesStore)

const data = ref<Data>()

onMounted(() => data.value = d.value)
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
