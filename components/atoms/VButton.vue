<template>
  <button :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
}

const { type = 'button' } = defineProps<Props>()
</script>
