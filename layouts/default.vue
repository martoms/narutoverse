<template>
  <div class="flex flex-col h-screen">
    <header class="flex shrink-0 justify-center items-center h-[5rem] bg-primary">
      <AtomsVText tag="h1" class="tracking-[0.5rem] text-primary uppercase">
        Narutoverse
      </AtomsVText>
    </header>
    <main class="flex grow width-full overflow-hidden">
      <OrganismsVNav class="h-full w-2/12" />
      <div class="w-10/12">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
