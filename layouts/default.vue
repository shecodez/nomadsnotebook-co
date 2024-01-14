<script setup lang="ts">
import Header from "~/components/pageHeader.vue";
import Footer from "~/components/pageFooter.vue";
import AdminBar from "~/components/adminBar.vue";
</script>

<template>
  <div min-h-screen flex flex-col>
    <AdminBar>
      <p>
        2024 <span class="text-primary font-majorMono">NoNo</span>
        <span ml--1.5 opacity-80 class="font-majorMono">diGi</span>
        <em> ZenBuJo</em> beta version is live!!
      </p>
    </AdminBar>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
