<template>
  <nav>
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        class="category"
        :class="{ active: isMounted && activeCategory === category }"
        @click="activeCategory = category"
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

onMounted(() => {
  isMounted.value = true
  activeCategory.value = useStorage<Categories>('activeCategory', 'Characters').value
})
</script>

<style scoped>
nav {
  width: 300px;
  @apply bg-stone-900 text-stone-200;
  @apply p-10;
}

li {
  cursor: pointer;
  @apply tracking-wider;
  @apply p-4;
}

li:hover {
  @apply bg-stone-700;
  @apply rounded;
}

.active {
  @apply border-solid border-r-4 border-yellow-400;
  @apply font-black text-yellow-400;
}
</style>
