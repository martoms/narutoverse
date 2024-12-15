<script lang="ts" setup>
import useCategoriesStore from '@/stores/categories'
import type { Data } from '@/types/category'

const categoriesStore = useCategoriesStore()
const { data: d } = storeToRefs(categoriesStore)

const data = ref<Data>(null)

onMounted(() => {
  watch(d, () => data.value = d.value, { immediate: true })
})
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
