<template>
  <div class="flex flex-col gap-5 h-full w-full p-10 pt-5 overflow-hidden bg-secondary">
    <OrganismsCurrentNavigation :data="data" />
    <div
      v-if="data && category in data"
      class="flex grow flex-wrap gap-10 justify-center w-full p-10 overflow-y-auto"
    >
      <OrganismsDataCard v-for="item in items" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import useCategoriesStore from '@/stores/categories'

type Props = {
  category:
    | 'characters'
    | 'clans'
    | 'kara'
    | 'kekkeigenkai'
    | 'tailedBeasts'
    | 'teams'
    | 'villages'
    | 'akatsuki'
}
const { category } = defineProps<Props>()

const { data } = storeToRefs(useCategoriesStore())

const items = computed(() => {
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
})
</script>
