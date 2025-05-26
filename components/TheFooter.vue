<template>
  <footer class="bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <div class="lg:col-span-2">
          <div class="mb-6">
            <span class="text-2xl font-bold text-primary-500 dark:text-white">Lumina</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            Transforming homes with intelligent automation that adapts to your lifestyle. Experience the perfect blend of technology and design.
          </p>
          <div class="flex space-x-4">
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fhorlaite_1" target="_blank" class="text-gray-500 hover:text-primary-500 transition-colors">
              <UIcon name="i-simple-icons-twitter" class="text-xl" />
            </a>
            <a href="https://www.instagram.com/hor_laite/" target="_blank" class="text-gray-500 hover:text-primary-500 transition-colors">
              <UIcon name="i-simple-icons-instagram" class="text-xl" />
            </a>
            <a href="https://web.facebook.com/Horlaite.plan" target="_blank" class="text-gray-500 hover:text-primary-500 transition-colors">
              <UIcon name="i-simple-icons-facebook" class="text-xl" />
            </a>
            <a href="tel:+2349061716060" class="text-gray-500 hover:text-primary-500 transition-colors">
              <UIcon name="i-heroicons-phone" class="text-xl" />
            </a>
            <a href="mailto:fatomiabdulrahmon@gmail.com" class="text-gray-500 hover:text-primary-500 transition-colors">
              <UIcon name="i-simple-icons-gmail" class="text-xl" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Products</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in productLinks" :key="index">
              <a :href="link.url" class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      
      <div class="border-t lg:col-span-2 border-gray-200 dark:border-gray-700 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} Lumina Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    </div>
  </footer>
</template>

<script setup>
const productLinks = [
  { label: 'Hero', url: '#hero' },
  { label: 'Features', url: '#features' },
  { label: 'Products', url: '#products' },
  { label: 'Contact', url: '#contact' },
];
</script>