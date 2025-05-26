<template>
  <section id="products" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Explore Our Product Line
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the perfect Lumina solution for every room in your home.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(product, index) in products" 
          :key="index"
          class="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div class="relative aspect-video overflow-hidden">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-[200px] lg:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div class="p-6">
                <span class="inline-block bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                  {{ product.category }}
                </span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
              <UButton
                label="View Details"
                color="primary"
                variant="subtle"
                disabled="true"
                trailing-icon="i-heroicons-arrow-right"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <UButton
          label="View All Products"
          color="gray"
          variant="outline"
          size="lg"
          disabled="true"
          trailing-icon="i-heroicons-arrow-right"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: products}  = await useFetch('https://fakestoreapi.com/products')
</script>