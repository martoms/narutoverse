<script setup lang="ts">
  const API = useRuntimeConfig().public.api;

  const { activeCategory } = useCategory();

  const resource = computed(() => {
    let res;
    switch (activeCategory.value) {
      case 'Characters': res = 'character'; break;
      case 'Clans': res = 'clan'; break;
      case 'Kara': res = 'kara'; break;
      case 'Kekkeigenkai': res = 'kekkei-genkai'; break;
      case 'Tailed Beasts': res = 'tailed-beast'; break;
      case 'Teams': res = 'team'; break;
      case 'Village': res = 'village'; break;
      case 'Akatsuki': res = 'akatsuki'; break;
    }
    return res
  })

  const url = computed(() => `${API}/${resource.value}`)

  const { error, data } = await useFetch(url, { key: resource.value });
</script>

<template>
  <div class="items">
    {{ data }}
  </div>
</template>

<style scoped>
  div.items {
    width: 100vw;
    height: 100%;
    overflow: hidden;
    @apply bg-stone-900;
  }
</style>