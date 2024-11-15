<script setup lang="ts">
  const links = ref([
      'Characters', 'Clans', 'Kara', 'Kekkeigenkai', 'Tailed Beasts',
      'Teams', 'Villages', 'Akatsuki'
  ])

  const { activeCategory } = useCategory();

  let isMounted = ref(false);

  onMounted(() => {
    isMounted.value = true;
  });

  
</script>

<template>
  <nav>
    <ul>
      <li
        v-for='link in links'
        :key='link'
        class="link"
        :class='{ active: isMounted && activeCategory === link }'
        @click='activeCategory = link'
      >
        {{ link }}
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    width: 300px;
    @apply bg-stone-900 text-stone-200;
    @apply p-10;
  }

  li {
    cursor: pointer;
    @apply tracking-wider;
    @apply p-4
  }

  li:hover {
    @apply bg-stone-700;
    @apply rounded;
  }

  .active {
    @apply border-solid border-r-4 border-yellow-400;
    @apply font-black text-yellow-400;
  }
</style>