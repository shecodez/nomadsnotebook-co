<script setup lang="ts">
import Header from "~/components/pageHeader.vue";
import Footer from "~/components/pageFooter.vue";
import AnnouncementBar from "~/components/announcementBar.vue";
</script>

<template>
  <Header />
  <AnnouncementBar>this is an announcement</AnnouncementBar>
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style scoped></style>
