<template>
  <section id="hero" class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 animate-fade-in">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Smarter Living<br />
            <span class="text-primary-500">Made Beautiful</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Lumina transforms your home with intelligent automation that adapts to your lifestyle. Experience the perfect
            blend of cutting-edge technology and elegant design.
          </p>
          <div class="flex flex-wrap gap-4">
            <UButton
              label="Get Started"
              color="primary"
              variant="solid"
              size="xl"
              class="font-medium"
            />
            <UButton
              label="Watch Demo"
              variant="outline"
              size="xl"
              :disabled="true"
              class="font-medium"
              trailing-icon="i-heroicons-play-circle"
            />
          </div>
          <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2" />
              30-day trial
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 mr-2" />
              No credit card required
            </div>
          </div>
        </div>
        <div class="relative animate-slide-in-right">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="assets/images/hero-img.png"
              alt="Lumina Smart Home"
              class="w-full h-auto"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
            <div class="flex items-center space-x-3 text-sm">
              <UIcon name="i-heroicons-sparkles" class="text-yellow-400 text-lg" />
              <span class="font-medium text-gray-900 dark:text-white">Works with 200+ devices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>