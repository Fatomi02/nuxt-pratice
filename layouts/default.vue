<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
    <TheNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>