<script setup lang="ts">
import Drawer from "./ui/drawer.vue";

const isOpen = ref(false);
function open() {
  isOpen.value = true;
}
function close() {
  isOpen.value = false;
}
</script>

<template>
  <button title="Menu" class="fx-2-ic" @click="open">
    <slot name="menuBtn" />
    <span class="sr-only">Menu</span>
  </button>

  <Drawer
    :is-open="isOpen"
    css="w-80 mr-auto shadow-lg bg-white dark:bg-black"
    @close="close"
  >
    <slot />
  </Drawer>
</template>

<style scoped></style>
