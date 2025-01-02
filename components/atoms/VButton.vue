<template>
  <button
    :type="type"
    :class="[getVariation, disabled && getdisabledStyle, active && getActiveStyle]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variation?: 'rounded' | 'rounded-hover' | 'square'
  active?: boolean
  disabled?: boolean
}

const { variation, type = 'button' } = defineProps<Props>()

const getVariation = computed(() => {
  switch (variation) {
    case 'rounded':
      return 'flex items-center justify-center py-1 pb-2 px-3 text-sm text-light font-semibold bg-accent hover:bg-accent-hover rounded-md'
    case 'rounded-hover':
      return 'flex items-center justify-center py-1 pb-2 px-3 text-sm text-light font-semibold border-solid border-2 border-stone-800 hover:bg-accent rounded-md'
    case 'square':
      return 'flex items-center justify-center w-10 h-10 text-sm text-light font-semibold bg-tertiary hover:bg-accent rounded-md'
    default:
      return ''
  }
})

const getdisabledStyle = computed(() => {
  if (variation === 'rounded-hover') {
    return 'text-light/20 bg-transparent hover:bg-transparent'
  } else return 'text-light/20 !bg-accent/20 hover:!bg-accent/20'
})
const getActiveStyle = '!bg-accent hover:bg-accent'
</script>
