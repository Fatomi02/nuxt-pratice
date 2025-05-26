<template>
  <div 
    class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div class="flex flex-col h-full">
      <div class="bg-primary-100 dark:bg-primary-900/50 text-primary-500 p-3 rounded-lg w-fit mb-6">
        <UIcon :name="icon" class="text-2xl" />
      </div>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {{ title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 flex-grow">
        {{ description }}
      </p>
      <UButton
        label="Learn more"
        color="gray"
        variant="link"
        trailing-icon="i-heroicons-arrow-right"
        class="mt-4 self-start"
      />
    </div>
  </div>
</template>

<script setup>
const { title, description, icon, delay } = defineProps({
  title: String,
  description: String,
  icon: String,
});
</script>

<style scoped>

</style>