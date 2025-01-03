<template>
  <div class="flex flex-col gap-5 h-full w-full p-10 pt-5 overflow-hidden bg-secondary">
    <OrganismsCurrentNavigation :data="data" />
    <div
      v-if="!directSearch"
      class="flex grow flex-wrap gap-10 justify-center w-full p-10 overflow-y-auto"
    >
      <OrganismsDataCard v-for="item in getItems" :key="item.id" :data="item" />
    </div>
    <OrganismsDataSearchError v-else-if="directSearch && error" />
    <template v-else>
      <component v-if="dataByName" :is="individualPage[getComponent]" :data="dataByName" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import DataCharacter from '@/components/organisms/DataCharacter.vue'
import useCategoriesStore from '@/stores/categories'
import type { Data } from '@/types/category'
import DataCategory from '@/components/organisms/DataCategory.vue'

const { data: d, dataByName, directSearch, error } = storeToRefs(useCategoriesStore())

const data = ref<Data>(null)
const individualPage = {
  character: DataCharacter,
  category: DataCategory,
}

const getItems = computed(() => {
  if (typeof data.value === 'object' && data.value !== null) {
    if ('characters' in data.value) return data.value.characters
    if ('clans' in data.value) return data.value.clans
    if ('kara' in data.value) return data.value.kara
    if ('kekkeigenkai' in data.value) return data.value.kekkeigenkai
    if ('tailedBeasts' in data.value) return data.value.tailedBeasts
    if ('teams' in data.value) return data.value.teams
    if ('villages' in data.value) return data.value.villages
    if ('akatsuki' in data.value) return data.value.akatsuki
  }
  return []
})

const getComponent = computed(() => {
  if (typeof dataByName.value === 'object' && dataByName.value !== null) {
    if ('characters' in dataByName.value) return 'category'
    else return 'character'
  } else return 'character'
})

onMounted(() => {
  watch(d, () => (data.value = d.value), { immediate: true })
})
</script>
