<template>
  <div v-if="'characters' in data && data.characters" class="flex flex-col gap-5 overflow-hidden">
    <AtomsVText tag="h3" class="text-light text-2xl font-bold">
      {{ data.name }}
      <AtomsVText tag="span" class="text-light font-normal">
        ({{ data.characters.length }})
      </AtomsVText>
    </AtomsVText>
    <div class="flex shrink flex-wrap gap-10 justify-center w-full p-10 overflow-y-auto">
      <OrganismsDataCard v-for="item in data.characters" :key="item.id" :data="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Clan, Kara, KekkeiGenkai, Team, Village } from '@/types/category'

type Props = { data: Clan | Kara | KekkeiGenkai | Team | Village }
defineProps<Props>()
</script>
