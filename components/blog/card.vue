<script lang="ts" setup>
defineProps(["post"]);
</script>

<template>
  <a :href="post._path" class="relative flex flex-col gap-8 lg:flex-row">
    <div
      class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
    >
      <img
        :src="post.featureImage.url"
        :alt="post.featureImage.title"
        class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
      />
      <div
        class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
      />
    </div>
    <div>
      <div class="flex items-center gap-x-4 text-xs">
        <time
          :datetime="post.publishDate"
          class="text-green-900 dark:text-green-600"
          >{{ post.publishDate }}</time
        >
      </div>
      <div class="group relative max-w-xl">
        <h3
          class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400"
        >
          <a :href="post._path">
            <span class="absolute inset-0" />
            {{ post.title }}
          </a>
        </h3>
        <p class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-100">
          {{ post.description }}
        </p>
      </div>
      <div class="mt-6 flex border-t border-gray-900/5 pt-6">
        <div class="relative flex items-center gap-x-4">
          <img
            :src="post.author.imageUrl"
            alt=""
            class="h-10 w-10 rounded-full bg-gray-50"
          />
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a href="https://github.com/shecodez">
                <span class="absolute inset-0" />
                {{ post.author.name }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped></style>
