<template>
  <section id="contact" class="relative py-20 bg-primary-500 dark:bg-primary-900 overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
      <div class="absolute top-1/2 right-0 w-64 h-64 bg-white rounded-full"></div>
      <div class="absolute -bottom-32 left-1/3 w-80 h-80 bg-white rounded-full"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Home?
        </h2>
        <p class="text-xl text-primary-100 mb-10">
          Join thousands of homeowners already experiencing the future of smart living. 
          Get started with a 30-day free trial and see the difference for yourself.
        </p>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Subscribe for Updates
          </h3>
          <form @submit.prevent="submitForm" class="space-y-4">
            <UFormGroup label="Your Name" name="name">
              <UInput v-model="form.name" placeholder="Enter your name" />
            </UFormGroup>
            <UFormGroup label="Email Address" name="email">
              <UInput v-model="form.email" placeholder="Enter your email" />
            </UFormGroup>
            <div class="flex items-start mb-4">
              <UCheckbox v-model="form.consent" name="consent" />
              <label for="consent" class="ml-2 text-sm text-gray-600 dark:text-gray-300">
                I agree to receive marketing communications from Lumina. You can unsubscribe at any time.
              </label>
            </div>
            <UButton
              type="submit"
              label="Get Started"
              variant="solid"
              class="w-full flex justify-center text-center"
              size="lg"
              :loading="loading"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  consent: false
});

const loading = ref(false);
const success = ref(false);

const submitForm = () => {
  loading.value = true;
  
  setTimeout(() => {
    loading.value = false;
    success.value = true;
    
    form.value = {
      name: '',
      email: '',
      consent: false
    };
    
  }, 1500);
};
</script>