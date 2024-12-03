import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { DataSchema } from '@/schemas/category.schema';
import type { Categories, Data } from '@/types/category';

const useCategoriesStore = defineStore('categories', () => {
  const API = useRuntimeConfig().public.api;
  const activeCategory = ref<Categories>('Characters');
  const categories = ref<Categories[]>([
    'Characters',
    'Clans',
    'Kara',
    'Kekkeigenkai',
    'Tailed Beasts',
    'Teams',
    'Villages',
    'Akatsuki',
  ]);
  const data = ref<Data | null>(null);
  const isPending = ref(false);
  const error = ref<Error | null>(null);

  const resource = computed(() => {
    switch (activeCategory.value) {
      case 'Characters': return 'character';
      case 'Clans': return 'clan';
      case 'Kara': return 'kara';
      case 'Kekkeigenkai': return 'kekkei-genkai';
      case 'Tailed Beasts': return 'tailed-beast';
      case 'Teams': return 'team';
      case 'Villages': return 'village';
      case 'Akatsuki': return 'akatsuki';
    }
  });

  const url = computed(() => `${API}/${resource.value}`);

  const { data: initialData, error: fetchError } = useFetch(url.value);

  watch(activeCategory, () => fetchData(), { immediate: true })

  async function fetchData() {
    isPending.value = true
    error.value = null

    try {
      const response = await $fetch(url.value);
      const parsedData = DataSchema.safeParse(response);

      if (parsedData.success) {
        data.value = parsedData.data;
      } else {
        data.value = null
      }
    } catch (err) {
      error.value = new Error('Failed to fetch data');
      console.error(err);
    } finally {
      isPending.value = false;
    }
  }

  if (!fetchError.value && initialData.value) {
    data.value = DataSchema.parse(initialData.value);
  }

  return {
    activeCategory,
    categories,
    data,
    isPending,
    error,
    fetchData
  };
});

export default useCategoriesStore;
