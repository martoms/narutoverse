<template>
  <div class="flex gap-2">
    <AtomsVButton variation="rounded-hover" :disabled="disablePrev" @click="$emit('prev')">
      prev
    </AtomsVButton>
    <AtomsVButton
      v-for="i in availablePages"
      :key="i"
      :active="activePage === i"
      variation="square"
      @click="$emit('update:activePage', i)"
    >
      {{ i }}
    </AtomsVButton>
    <AtomsVButton variation="rounded-hover" :disabled="disableNext" @click="$emit('next')">
      next
    </AtomsVButton>
  </div>
</template>

<script setup lang="ts">
interface Props {
  availablePages: Array<number>
  activePage: number
  disablePrev: boolean
  disableNext: boolean
}

defineProps<Props>()

defineEmits(['update:activePage', 'prev', 'next'])
</script>
