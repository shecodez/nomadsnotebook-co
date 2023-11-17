<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
useHead({
  title: `${runtimeConfig.public.appName}`,
});
</script>

<template>
  <div class="text-2xl">Page: foo</div>
</template>

<style scoped></style>
