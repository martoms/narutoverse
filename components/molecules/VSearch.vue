<template>
  <div class="relative flex items-center gap-2">
    <form @submit.prevent="emits('submit')">
      <AtomsVInput
        id="search"
        name="search"
        placeholder="Complete Name"
        v-model="model"
        class="w-full h-full rounded-full p-1 pb-2 pl-7 text-light bg-stone-800 focus:outline focus:outline-primary"
      />
    </form>
    <AtomsVIcon name="icon-search" class="absolute left-2 text-primary" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()
const emits = defineEmits(['submit'])
</script>
