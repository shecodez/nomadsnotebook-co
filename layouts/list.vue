<script lang="ts" setup></script>

<template>
  <div mt-20>
    <slot name="title"></slot>

    <div p-5 flex gap-2>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
