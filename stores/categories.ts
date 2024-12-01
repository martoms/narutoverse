import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#app'
import { DataSchema } from '@/schemas/category.schema'
import type { Categories, Data } from '@/types/category'

const useCategoriesStore = defineStore('categories', () => {
  const API = useRuntimeConfig().public.api
  const activeCategory = ref<Categories>('Characters')
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
  const data = ref<Data | {}>({})
  const isPending = ref(false)
  const error = ref<Error | null>(null)
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
      case 'Villages':
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
    activeCategory, () => fetchData(),
    { immediate: true }
  )

  async function fetchData () {
    isPending.value = true

    const { error, data: d } = await useFetch(url.value)

    if (error.value) {
      error.value = new Error('Failed to fetch data')
    } else {
      const parsedData = DataSchema.safeParse(d.value)

      if (parsedData.success) {
          data.value = parsedData.data
      } else {
          data.value = {}
          console.log('fsdfsdf')
          console.log('data.value', data.value)
      }
    }

    isPending.value = false
  }

  return {
    // states
    activeCategory,
    categories,
    data,
    isPending,
    error
  }
})

export default useCategoriesStore
