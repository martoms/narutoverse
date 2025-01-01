<template>
  <div
    class="flex flex-col gap-2 items-center justify-center w-80 bg-tertiary p-5 py-8 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:shadow-glow"
  >
    <AtomsVText
      class="w-full text-center text-light text-lg font-semibold"
      :class="'images' in data && data.images[0] && 'border-solid border-b border-primary pb-2'"
    >
      {{ data.name }}
    </AtomsVText>
    <div
      v-if="'images' in data && data.images[0]"
      class="flex items-center justify-center max-h-40 py-2 w-full overflow-hidden rounded"
    >
      <img :src="data.images[0]" class="w-full h-auto" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  Character,
  Clan,
  Kara,
  KekkeiGenkai,
  TailedBeast,
  Team,
  Village,
  Akatsuki,
} from '@/types/category'

interface Props {
  data: Character | Clan | Kara | KekkeiGenkai | TailedBeast | Team | Village | Akatsuki
}

defineProps<Props>()
</script>
