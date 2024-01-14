<script setup lang="ts">
import Header from "~/components/pageHeader.vue";
import Footer from "~/components/pageFooter.vue";
import AdminBar from "~/components/adminBar.vue";
</script>

<template>
  <Header />
  <AdminBar>this is an announcement</AdminBar>
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style scoped></style>
