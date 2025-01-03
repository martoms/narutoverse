import { useStorage } from '@vueuse/core'
import { z } from 'zod'
import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#app'
import { DataSchema, DataCategorySchema } from '@/schemas/category'
import type { Categories, Data, dataCategory, Character } from '@/types/category'

const useCategoriesStore = defineStore('categories', () => {
  const API = useRuntimeConfig().public.api
  const activeCategory = useStorage<Categories>('activeCategory', 'Characters')
  const categories = ref<Categories[]>([
    'Characters',
    'Clans',
    'Kara',
    'Kekkeigenkai',
    'Tailed Beasts',
    'Teams',
    'Villages',
    'Akatsuki',
  ])
  const data = ref<Data>(null)
  const dataCategory = ref<dataCategory | null>(null)
  const dataCharacter = ref<Character>()
  const directSearch = ref(false)
  const keyword = ref('')
  const isPending = ref(false)
  const error = ref<Error | null>(null)

  const resource = computed(() => {
    switch (activeCategory.value) {
      case 'Characters':
        return 'character'
      case 'Clans':
        return 'clan'
      case 'Kara':
        return 'kara'
      case 'Kekkeigenkai':
        return 'kekkei-genkai'
      case 'Tailed Beasts':
        return 'tailed-beast'
      case 'Teams':
        return 'team'
      case 'Villages':
        return 'village'
      case 'Akatsuki':
        return 'akatsuki'
    }
  })

  const baseUrl = computed(() => `${API}/${resource.value}`)
  const pageUrl = (page: number = 1) => `${baseUrl.value}?page=${page}&limit=21`
  const searchUrl = (keyword: string) => {
    const k = keyword.replace(/\s/g, '%20')
    const name = k
      .split('%20')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join('%20')
    return `${baseUrl.value}/search?name=${name}`
  }

  const { data: initialData, error: fetchError } = useFetch(pageUrl())

  watch(
    activeCategory,
    () => {
      if (!directSearch.value) {
        fetchData(pageUrl())
      }
    },
    { immediate: true },
  )

  const get = async (payload: number | string) => {
    if (typeof payload === 'number') {
      directSearch.value = false
      await fetchData(pageUrl(payload))
    } else {
      directSearch.value = true
      keyword.value = payload
      await fetchData(searchUrl(payload))
    }
  }

  async function fetchData(url: string) {
    isPending.value = true
    error.value = null

    try {
      const response = await $fetch(url)
      const RawDataSchema = z.union([DataSchema, DataCategorySchema])
      const parsedData = RawDataSchema.safeParse(response)

      console.log('response', response)
      console.log('parsedData', parsedData)

      if (parsedData.success) {
        if (
          typeof parsedData.data === 'object' &&
          parsedData.data !== null &&
          'currentPage' in parsedData.data
        ) {
          data.value = parsedData.data
          dataCategory.value = null
        } else if (
          typeof parsedData.data === 'object' &&
          parsedData.data !== null &&
          'id' in parsedData.data
        ) {
          dataCategory.value = parsedData.data
          data.value = null
        } else {
          data.value = null
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        error.value = new Error('Failed to fetch data')
        if (directSearch.value) {
          if ('statusCode' in err) {
            error.value = new Error('Does not exist')
          }
        }
      }
    } finally {
      isPending.value = false
    }
  }

  if (!fetchError.value && initialData.value) {
    data.value = DataSchema.parse(initialData.value)
  }

  return {
    activeCategory,
    categories,
    data,
    dataCategory,
    dataCharacter,
    directSearch,
    keyword,
    isPending,
    error,
    fetchData,
    get,
  }
})

export default useCategoriesStore
