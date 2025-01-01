<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <header class="flex justify-center items-center h-20 bg-primary">
      <h1 class="tracking-[0.5rem] text-2xl font-bold text-primary">NARUTOVERSE</h1>
    </header>
    <div class="flex h-full width-screen">
      <OrganismsVNav class="w-2/12" />
      <main class="w-10/12">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
