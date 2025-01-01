<template>
  <div class="relative flex items-center gap-2">
    <AtomsVInput
      id="search"
      name="search"
      placeholder="Search"
      class="w-full h-full rounded-full p-1 pb-2 pl-7 text-light bg-stone-800 focus:outline focus:outline-primary"
    />
    <AtomsVIcon name="icon-search" class="absolute left-2 text-primary" />
  </div>
</template>

<script setup lang="ts"></script>
