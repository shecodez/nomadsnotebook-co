<script lang="ts" setup>
definePageMeta({
  layout: "post",
});

const route = useRoute();

const post = await queryContent("/blog").where({ _path: route.path }).findOne();

// const { data: post } = await useAsyncData("post", () =>
//   queryContent("/blog").where({ _path: route.path }).findOne()
// );

// const { data } = await useAsyncData("post", async () => {
//   const post = await queryContent("/blog")
//     .where({ _path: route.path })
//     .findOne();
//   const [prev, next] = await queryContent("/blog")
//     .only(["_path", "title"])
//     .sort({ date: 1 })
//     .where({ isArchived: false })
//     .findSurround(route.path);

//   return {
//     prev,
//     post,
//     next,
//   };
// });

const runtimeConfig = useRuntimeConfig();
useHead({
  title: `${post?.title} | ${runtimeConfig.public.site.name}`,
  meta: [
    { name: "description", content: post?.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `${runtimeConfig.public.site.url}${post?.featureImage.url}`,
    },
  ],
});
</script>

<template>
  <div>
    <div class="relative aspect-[16/9]">
      <img
        :src="post.featureImage.url"
        :alt="post.featureImage.title"
        class="absolute inset-0 h-full w-full bg-gray-50 object-cover"
      />

      <div absolute inset-0 flex flex-col items-center justify-center>
        <nuxt-link to="/blog" class="fx-2-ic">
          <div i-carbon:arrow-left />
          Back to Blog
        </nuxt-link>
        <h1 p-3 bg-black bg-opacity-40 text-white text-4xl font-bold>
          {{ post.title }}
        </h1>
        <div>Tags...</div>
      </div>

      <div absolute bottom-2 right-2 font-mono text-yellow>
        <time :datetime="post.publishDate">{{ post.publishDate }}</time>
      </div>
    </div>

    <article mx-auto prose first-letter:text-3xl>
      <content-renderer :value="post">
        <template #empty>
          <p>No content found.</p>
        </template>
      </content-renderer>
      <div w-full border-b py-4 />
    </article>

    <div flex justify-center my-8>
      <nuxt-link to="/blog" class="fx-2-ic">
        <div i-carbon:arrow-left />
        Back to Blog
      </nuxt-link>
    </div>
  </div>
</template>
