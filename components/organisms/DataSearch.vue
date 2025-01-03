<template>
  <div class="h-8">
    <form class="flex items-center h-full gap-2" @submit.prevent="handleSearch()">
      <div
        class="flex items-center h-full rounded-full overflow-hidden"
        :class="{ 'outline outline-1 outline-accent': isFocused }"
      >
        <MoleculesVSearch
          v-model="keyword"
          placeholder="Search"
          class="h-full"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
        <MoleculesToolTip v-if="isFocused" class="absolute top-[150px] right-30 w-[190px]">
          Must be a complete name
        </MoleculesToolTip>
        <select
          name="category"
          id="category"
          v-model="category"
          class="appearance-none h-full w-24 pl-3 bg-tertiary text-xs text-primary p-1 border-solid border-l border-neutral focus:outline-none"
        >
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      <AtomsVButton
        type="submit"
        class="h-full w-16 bg-tertiary hover:bg-accent text-xs text-light rounded-full"
        :disabled="!keyword"
      >
        Search
      </AtomsVButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import useCategoriesStore from '@/stores/categories'

const { activeCategory, categories } = storeToRefs(useCategoriesStore())
const { get } = useCategoriesStore()

const keyword = ref('')
const category = ref(activeCategory.value)
const isFocused = ref(false)

const handleSearch = () => {
  activeCategory.value = category.value
  get(keyword.value)
}
</script>
