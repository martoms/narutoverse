<template>
  <div
    class="flex flex-none items-center justify-between h-20 pb-5 border-solid border-b border-accent"
  >
    <AtomsVText tag="h2" class="text-primary w-[190px] tracking-widest text-xl font-bold">
      {{ activeCategory }}
    </AtomsVText>
    <MoleculesVPagination
      v-if="data?.pageSize < totalItems"
      :availablePages
      :activePage
      :disablePrev
      :disableNext
      @update:activePage="activePage = $event"
      @prev="activePage--"
      @next="activePage++"
    />
    <OrganismsDataSearch />
  </div>
</template>

<script lang="ts" setup>
import useCategoriesStore from '@/stores/categories'
import type { Data } from '@/types/category'

interface Props {
  data: Data
}

const props = defineProps<Props>()

const { activeCategory } = storeToRefs(useCategoriesStore())
const { get } = useCategoriesStore()

const totalItems = computed<number>(() => {
  if (typeof props.data === 'object' && props.data !== null) {
    if ('totalCharacters' in props.data) return props.data.totalCharacters
    if ('totalClans' in props.data) return props.data.totalClans
    if ('totalKara' in props.data) return props.data.totalKara
    if ('totalKekkeiGenkai' in props.data) return props.data.totalKekkeiGenkai
    if ('totalTailedBeasts' in props.data) return props.data.totalTailedBeasts
    if ('totalTeams' in props.data) return props.data.totalTeams
    if ('totalVillages' in props.data) return props.data.totalVillages
    if ('totalAkatsuki' in props.data) return props.data.totalMembers
  }
  return 0
})

const getPages = computed(() => {
  if (!props.data) return []
  const partition = Math.ceil(totalItems.value / props.data.pageSize)
  return Array.from({ length: partition }, (_, i) => i + 1)
})

const disablePrev = computed(() => {
  if (activePage.value === 1) return true
  return false
})
const disableNext = computed(() => {
  if (activePage.value === getPages.value[getPages.value.length - 1]) return true
  return false
})

const availablePages = ref<Array<number>>([])
const activePage = ref<number>(1)

watch(activePage, () => {
  get(activePage.value)
  updateAvailablePages()
})

watch(
  () => props.data,
  (newData, oldData) => {
    if (compareKeys(newData, oldData)) return
    availablePages.value = getPages.value.slice(0, 5)
    activePage.value = 1
  },
  { immediate: true, deep: true },
)

function compareKeys(newObj: Data, oldObj: Data) {
  if (!newObj || !oldObj) return false
  const a = Object.keys(newObj)
  const b = Object.keys(oldObj)
  if (a.length !== b.length) return false
  return a.every((value, index) => value === b[index])
}

function updateAvailablePages() {
  const index = availablePages.value.indexOf(activePage.value)
  const i = getPages.value.indexOf(activePage.value)

  if (index === 4 && activePage.value !== getPages.value[getPages.value.length - 1]) {
    availablePages.value = getPages.value.slice(i - 3, i + 2)
  } else if (index === 0 && activePage.value !== getPages.value[0]) {
    availablePages.value = getPages.value.slice(i - 1, i + 4)
  }
}
</script>
