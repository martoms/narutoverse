<template>
  <div class="h-full w-full p-10 pt-5 overflow-hidden bg-secondary">
    <OrganismsCurrentNavigation />
  </div>
</template>

<script lang="ts" setup>
import useCategoriesStore from '@/stores/categories'
import type { Data } from '@/types/category'

const { data: d } = storeToRefs(useCategoriesStore())

const data = ref<Data>(null)

onMounted(() => {
  watch(d, () => (data.value = d.value), { immediate: true })
})
</script>
