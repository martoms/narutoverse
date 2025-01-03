<template>
  <div>
    <AtomsVText tag="h3" class="text-light text-2xl font-bold">
      <AtomsVButton class="text-light hover:underline" @click="dataCharacter = undefined">
        {{ dataCategory?.name }}
      </AtomsVButton>
      {{ dataCharacter?.name && '/' }} {{ data.name }}
    </AtomsVText>
  </div>
</template>
<script setup lang="ts">
import useCategoriesStore from '@/stores/categories'
import type { Character } from '@/types/category'

type Props = { data: Character }
defineProps<Props>()

const { dataCategory, dataCharacter } = storeToRefs(useCategoriesStore())
</script>
