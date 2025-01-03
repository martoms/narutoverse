<template>
  <div class="flex flex-col gap-5 h-full w-full p-10 pt-5 overflow-hidden bg-secondary">
    <OrganismsCurrentNavigation :data="data" />
    <template v-if="!dataCharacter">
      <div
        v-if="!directSearch"
        class="flex grow flex-wrap gap-10 justify-center w-full p-10 overflow-y-auto"
      >
        <OrganismsDataCard v-for="item in getItems" :key="item.id" :data="item" />
      </div>
      <OrganismsDataSearchError v-else-if="directSearch && error" />
      <template v-else>
        <component v-if="dataCategory" :is="individualPage[getComponent]" :data="dataCategory" />
      </template>
    </template>
    <OrganismsDataCharacter v-else :data="dataCharacter" />
  </div>
</template>

<script lang="ts" setup>
import slugify from 'slugify'
import DataCharacter from '@/components/organisms/DataCharacter.vue'
import useCategoriesStore from '@/stores/categories'
import type { Data } from '@/types/category'
import DataCategory from '@/components/organisms/DataCategory.vue'

const {
  data: d,
  dataCategory,
  dataCharacter,
  directSearch,
  error,
  categories,
  activeCategory,
} = storeToRefs(useCategoriesStore())

const data = ref<Data>(null)
const { category } = useRoute().params
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
  if (typeof dataCategory.value === 'object' && dataCategory.value !== null) {
    if ('characters' in dataCategory.value) return 'category'
    else return 'character'
  } else return 'character'
})

onBeforeMount(() => {
  const resource = categories.value.map((c) => slugify(c, { replacement: '-', lower: true }))
  if (category === undefined) {
    navigateTo('/')
  } else {
    if (!Array.isArray(category)) {
      if (!resource.includes(category)) {
        throw createError({
          statusCode: 404,
          message: 'Category does not exist',
        })
      }
    }
  }

  navigateTo(`/${slugify(activeCategory.value, { replacement: '-', lower: true })}`)
})

onMounted(() => {
  watch(d, () => (data.value = d.value), { immediate: true })
})
</script>
