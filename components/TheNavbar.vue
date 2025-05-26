<template>
  <header
    class="sticky top-0 z-50 w-full transition-all duration-300"
    :class="[
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-2xl font-bold text-primary-500 dark:text-white">Lumina</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation and buttton -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-white font-medium transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          <UButton
            label="Get Started"
            color="primary"
            class="ml-4"
          />
          <UButton
            color="gray"
            variant="subtle"
            :icon="colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            @click="toggleColorMode"
          />
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-2">
          <UButton
            color="gray"
            variant="ghost"
            :icon="colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            @click="toggleColorMode"
          />
          <UButton
            color="gray"
            variant="ghost"
            :icon="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-2 space-y-2">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-white font-medium"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="px-4 py-2">
            <UButton
              label="Get Started"
              color="primary"
              variant="solid"
              class="w-full"
            />
          </div>
        </div>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const navItems = [
  { label: 'Features', path: '#features' },
  { label: 'Products', path: '#products' },
  { label: 'Support', path: '#support' },
];

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>