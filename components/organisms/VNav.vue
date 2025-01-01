<template>
  <nav class="p-10 bg-stone-900 text-stone-200">
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        :class="{ [getActiveStyle]: isMounted && activeCategory === category }"
        @click="activeCategory = category"
        class="tracking-wider p-4 cursor-pointer hover:bg-stone-700 hover:rounded"
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

const getActiveStyle = 'border-solid border-r-4 border-yellow-400 font-black text-yellow-400'

onMounted(() => {
  isMounted.value = true
  activeCategory.value = useStorage<Categories>('activeCategory', 'Characters').value
})
</script>
