<script lang="ts" setup>
defineProps(["post"]);
</script>

<template>
  <a :href="post._path" grow relative flex flex-col gap-2 shadow-md p-3>
    <div class="relative aspect-[16/9] lg:aspect-square">
      <img
        :src="post.featureImage.url"
        :alt="post.featureImage.title"
        class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      />

      <div absolute bottom-2 right-2 font-mono text-xs text-yellow>
        <time :datetime="post.publishDate">{{ post.publishDate }}</time>
      </div>
    </div>

    <h3 m-2 text-lg font-semibold leading-6 text-center font-courgette>
      {{ post.title }}
    </h3>

    <p class="post-desc" hidden line-clamp-2 font-thin>
      {{ post.description }}
    </p>
  </a>
</template>

<style scoped></style>
