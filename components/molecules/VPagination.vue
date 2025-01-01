<template>
  <div class="flex gap-2">
    <AtomsVButton variation="rounded">prev</AtomsVButton>
    <AtomsVButton v-for="i in 5" :key="i" variation="square">{{ i }}</AtomsVButton>
    <AtomsVButton variation="rounded">next</AtomsVButton>
  </div>
</template>

<script setup lang="ts"></script>
