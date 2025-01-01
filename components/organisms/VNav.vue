<template>
  <nav class="p-10 bg-secondary text-light">
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        :class="{ [getActiveStyle]: isMounted && activeCategory === category }"
        @click="activeCategory = category"
        class="tracking-wider p-4 cursor-pointer hover:bg-secondary hover:rounded"
      >
        {{ category }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import useCategoriesStore from '@/stores/categories'
import type { Categories } from '@/types/category'

const categoriesStore = useCategoriesStore()
const { activeCategory, categories } = storeToRefs(categoriesStore)

let isMounted = ref(false)

const getActiveStyle = 'border-solid border-r-4 border-primary font-black text-primary'

onMounted(() => {
  isMounted.value = true
  activeCategory.value = useStorage<Categories>('activeCategory', 'Characters').value
})
</script>
