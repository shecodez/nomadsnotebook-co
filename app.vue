<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: white;
  color: #1f2937;
  /* @apply bg-white text-gray-800; */
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.99);
}

/* Form */
input[required],
textarea[required],
input.required,
textarea.required {
  background-image: radial-gradient(rgb(239, 68, 68) 15%, transparent 16%),
    radial-gradient(rgb(239, 68, 68) 15%, transparent 16%);
  background-size: 1.2em 1.2em;
  background-position: right top;
  background-repeat: no-repeat;
}

/* Font styles */
.font-outline {
  -webkit-text-stroke: 1px black;
}
</style>
