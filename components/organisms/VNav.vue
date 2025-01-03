<template>
  <nav class="p-10 bg-secondary text-light">
    <ul class="pt-20">
      <li
        v-for="category in categories"
        :key="category"
        :class="{ [getActiveStyle]: isMounted && activeCategory === category }"
        @click="handleClick(category)"
        class="tracking-wider p-4 cursor-pointer hover:bg-secondary hover:rounded"
      >
        <AtomsVButton>{{ category }}</AtomsVButton>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import slugify from 'slugify'
import useCategoriesStore from '@/stores/categories'
import type { Categories } from '@/types/category'

const categoriesStore = useCategoriesStore()
const { dataCharacter, activeCategory, categories, directSearch, keyword } =
  storeToRefs(categoriesStore)
const { get } = useCategoriesStore()

let isMounted = ref(false)

const getActiveStyle = 'border-solid border-r-4 border-primary font-black text-primary'

const handleClick = (category: Categories) => {
  if (category === activeCategory.value) get(1)
  activeCategory.value = category
  directSearch.value = false
  dataCharacter.value = undefined
  keyword.value = ''
  navigateTo(`/${slugify(category, { replacement: '-', lower: true })}`)
}

onMounted(() => (isMounted.value = true))
</script>
