<template>
  <div class="pb-5 border-solid border-b border-primary">
    <AtomsVText tag="h2" class="text-primary tracking-widest text-xl font-bold">
      {{ activeCategory }}
    </AtomsVText>
  </div>
</template>

<script lang="ts" setup>
import useCategoriesStore from '@/stores/categories'

const { activeCategory } = storeToRefs(useCategoriesStore())
</script>
