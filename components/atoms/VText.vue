<template>
  <component :is="tag" :class="getStyles">
    <slot />
  </component>
</template>

<script lang="ts" setup>
interface Props {
  tag?: 'p' | 'span' | 'h1' | 'h2'
}

const { tag = 'p' } = defineProps<Props>()

const getStyles = computed(() => {
  switch (tag) {
    case 'h1':
      return 'text-2xl font-bold'
    default:
      return ''
  }
})
</script>
