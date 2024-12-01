import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useRuntimeConfig } from '#app'
import type { Categories } from '@/types/category'

const useCategoriesStore = defineStore('categories', () => {
  const API = useRuntimeConfig().public.api
  const activeCategory = useStorage('activeCategory', 'Characters')
  const categories = ref<Categories[]>([
    'Characters',
    'Clans',
    'Kara',
    'Kekkeigenkai',
    'Tailed Beasts',
    'Teams',
    'Villages',
    'Akatsuki'
  ])
  const data = ref({})
  const resource = computed(() => {
    let res
    switch (activeCategory.value) {
      case 'Characters':
        res = 'character'
        break
      case 'Clans':
        res = 'clan'
        break
      case 'Kara':
        res = 'kara'
        break
      case 'Kekkeigenkai':
        res = 'kekkei-genkai'
        break
      case 'Tailed Beasts':
        res = 'tailed-beast'
        break
      case 'Teams':
        res = 'team'
        break
      case 'Village':
        res = 'village'
        break
      case 'Akatsuki':
        res = 'akatsuki'
        break
    }
    return res
  })

  const url = computed(() => `${API}/${resource.value}`)

  watch(
    resource,
    async () => {
      const { error, data: d } = await useFetch(url.value, { key: resource.value })

      if (!error.value) {
        data.value = d.value
      }
    },
    { immediate: true },
  )

  return {
    // states
    activeCategory,
    categories,
    data,
  }
})

export default useCategoriesStore
