<template>
  <div class="pt-3">
    <AtomsVText class="text-light">
      No results for
      <AtomsVText tag="span" class="font-bold text-primary">"{{ keyword }}." </AtomsVText>
      Try to change search category or make sure to seach for the right name.
    </AtomsVText>
    <div class="flex gap-10 w-2/4 flex-wrap mt-10">
      <AtomsVButton
        v-for="category in categories"
        :key="category"
        class="p-5 w-36 bg-tertiary text-primary rounded-md hover:scale-110 transition duration-300 ease-in-out"
        @click="handleClick(category)"
      >
        {{ category }}
      </AtomsVButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCategoriesStore from '@/stores/categories'
import type { Categories } from '@/types/category'

const { keyword, categories, activeCategory } = storeToRefs(useCategoriesStore())
const { get } = useCategoriesStore()

const handleClick = (category: Categories) => {
  activeCategory.value = category
  get(keyword.value)
}
</script>
