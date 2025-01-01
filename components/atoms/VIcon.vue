<template>
  <i class="v-icon" :class="[name, getSizes]"></i>
</template>

<script lang="ts" setup>
interface Props {
  name: string
  size?: 'xs' | 'sm' | 'lg' | 'xl'
}

const { size = 'md' } = defineProps<Props>()

const getSizes = computed(() => (size === 'md' ? 'text-base' : 'text-' + size))
</script>

<style>
@import url('/assets/css/icons.css');
</style>
