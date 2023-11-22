<script setup lang="ts">
import Header from "~/components/pageHeader.vue";
import Footer from "~/components/pageFooter.vue";
</script>

<template>
  <Header />
  <div class="flex gap-2">
    <div class="grow">
      <slot />
    </div>

    <div class="border">
      <slot name="rightColumn"></slot>
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>
