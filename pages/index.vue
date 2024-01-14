<script lang="ts" setup>
const config = useRuntimeConfig();
useHead({
  title: `${config.public.app.name}`,
});
</script>

<template>
  <div>
    <section relative class="hero">
      <div class="relative aspect-[16/9]">
        <img
          src="/images/hero.jpg"
          alt="hero-image"
          class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
        />
      </div>

      <div
        p-5
        bg-black
        bg-opacity-50
        text-white
        text-center
        class="centered-axis-xy"
      >
        <h1 mb-2 text-xl class="font-majorMono">Notebooks for Analog Nomads</h1>
        <p font-italic>and other travel-friendly stationery & stuff</p>
      </div>

      <!-- <div class="absolute bottom-4 right-4 bg-white">
        <div class="inline-flex items-center px-2 border text-lg">
          <div class="i-carbon:location" />
          <select class="p-2">
            <option>N. America</option>
          </select>
        </div>
      </div> -->
    </section>
  </div>
  <nuxt-link to="/blog">Blog</nuxt-link>
</template>

<style scoped>
.centered-axis-xy {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
