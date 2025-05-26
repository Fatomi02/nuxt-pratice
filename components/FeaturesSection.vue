<template>
  <section id="features" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Intelligent Features for Modern Living
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how Lumina can transform your home into a seamless blend of comfort, efficiency, and style.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          v-for="(feature, index) in features" 
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Adaptive Lighting',
    description: 'Smart lighting that adjusts to your activities, time of day, and natural light levels for optimal comfort and energy efficiency.',
    icon: 'i-heroicons-light-bulb'
  },
  {
    title: 'Climate Control',
    description: 'Intelligent temperature management that learns your preferences and optimizes for comfort while reducing energy consumption.',
    icon: 'i-heroicons-sun'
  },
  {
    title: 'Voice Command',
    description: 'Natural language processing that understands context and nuance for a truly intuitive control experience.',
    icon: 'i-heroicons-microphone'
  },
  {
    title: 'Smart Security',
    description: 'Comprehensive protection with facial recognition, unusual activity detection, and seamless integration with emergency services.',
    icon: 'i-heroicons-shield-check'
  },
  {
    title: 'Scene Creation',
    description: 'Design custom environments that combine lighting, sound, temperature, and more with a single command.',
    icon: 'i-heroicons-film'
  },
  {
    title: 'Remote Access',
    description: 'Control and monitor your home from anywhere with our secure, encrypted mobile and web applications.',
    icon: 'i-heroicons-device-phone-mobile'
  }
];
</script>