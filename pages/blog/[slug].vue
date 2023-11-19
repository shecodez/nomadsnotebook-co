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
  <div class="p-5">
    <nuxt-link to="/blog" class="inline-flex gap-2 items-center">
      <div i-carbon:arrow-left />
      Back to Blog
    </nuxt-link>

    <article class="mx-auto prose first-letter:text-3xl">
      <content-renderer :value="post">
        <template #empty>
          <p>No content found.</p>
        </template>
      </content-renderer>
    </article>
  </div>
</template>
