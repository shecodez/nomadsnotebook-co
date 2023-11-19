<script lang="ts" setup></script>

<template>
  <div class="flex gap-2">
    <div class="grow">
      <slot />
    </div>

    <div class="border">
      <slot name="rightColumn"></slot>
    </div>
  </div>
</template>

<style scoped></style>
