<template>
  <button
    :ref="(el) => (buttonEl = el)"
    :type="type"
    :class="[getVariation, disabled && getdisabledStyle, active && getActiveStyle]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variation?: 'rounded' | 'square'
  active?: boolean
}

const { variation, type = 'button' } = defineProps<Props>()

const buttonEl = ref()

const disabled = computed(() => variation && buttonEl.value?.disabled)

const getVariation = computed(() => {
  switch (variation) {
    case 'rounded':
      return 'flex items-center justify-center py-1 pb-2 px-3 text-sm text-light font-semibold bg-accent hover:bg-accent-hover rounded-md'
    case 'square':
      return 'flex items-center justify-center w-10 h-10 text-sm text-light font-semibold bg-tertiary hover:bg-accent rounded-md'
    default:
      return ''
  }
})

const getdisabledStyle = 'text-light/20 bg-accent/20 hover:!bg-accent/20'
const getActiveStyle = '!bg-accent hover:bg-accent'
</script>
