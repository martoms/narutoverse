<template>
  <div class="relative flex items-center gap-2">
    <AtomsVInput
      id="search"
      name="search"
      :placeholder
      v-model="model"
      class="w-full h-full box-border pl-8 text-sm text-light bg-stone-800 focus:outline-none"
      @focus="emits('focus')"
      @blur="emits('blur')"
    />
    <AtomsVIcon name="icon-search" class="absolute left-2 text-primary" />
  </div>
</template>

<script setup lang="ts">
type Props = { placeholder?: string }

defineProps<Props>()

const model = defineModel<string>()
const emits = defineEmits(['submit', 'focus', 'blur'])
</script>
