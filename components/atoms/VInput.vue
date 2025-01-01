<template>
  <input :type="type" :id="id" :name="name" :placeholder="placeholder" v-model.trim="model" />
</template>

<script setup lang="ts">
interface Props {
  type?: 'text' | 'password'
  id: string
  name: string
  placeholder?: string
}

defineProps<Props>()

const model = defineModel<string | number>()
</script>
