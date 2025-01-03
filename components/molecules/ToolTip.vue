<template>
  <div
    v-if="show"
    class="flex items-center p-2 text-xs text-primary bg-tertiary border-solid border border-neutral rounded-md"
  >
    <AtomsVIcon name="icon-info-solid" class="mr-2" />
    <AtomsVText> <slot /> </AtomsVText>
  </div>
</template>
<script lang="ts" setup>
import { useTimeoutFn } from '@vueuse/core'

const show = ref(true)

const { start } = useTimeoutFn(() => (show.value = false), 3000)

onMounted(() => start())
</script>
