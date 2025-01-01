<template>
  <div class="h-full w-full overflow-hidden bg-stone-900">
    
  </div>
</template>

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
