<script setup lang="ts">
import Header from "~/components/pageHeader.vue";
import Footer from "~/components/pageFooter.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
