<template>
  <div>
    <AtomsVText tag="h3" class="text-light text-2xl font-bold">
      {{ data.name }}
    </AtomsVText>
  </div>
</template>
<script setup lang="ts">
import type { Character } from '@/types/category'

type Props = { data: Character }

defineProps<Props>()
</script>
