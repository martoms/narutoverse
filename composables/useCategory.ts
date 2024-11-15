import { useStorage } from '@vueuse/core'

const useCategory = () => {
  const API = useRuntimeConfig().public.api;
  const activeCategory = useStorage('activeCategory', 'Characters');

  const data = ref({})

  return { activeCategory, data }
}

export default useCategory