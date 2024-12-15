<script setup lang="ts"></script>

<template>
  <v-app>
    <header>
      <h1>NARUTOVERSE</h1>
    </header>
    <div class="container">
      <OrganismsVNav />
      <main>
        <slot></slot>
      </main>
    </div>
  </v-app>
</template>

<style scoped>
header {
  height: 100px;
  @apply flex justify-center items-center;
  @apply bg-stone-950;
}

h1 {
  @apply text-stone-100;
  @apply tracking-[0.5rem];
  @apply text-2xl font-bold text-yellow-400;
}

div.container {
  height: calc(100vh - 100px);
  width: 100vw;
  @apply flex;
}

main {
  width: calc(100% - 300px);
}
</style>
