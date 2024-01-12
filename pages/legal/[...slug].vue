<template>
  <div container mx-auto py-10>
    <ContentDoc>
      <template #default="{ doc }">
        <section flex gap-8>
          <aside v-if="!!doc.body.toc.links.length" w-80 hidden md:block>
            <div sticky top-24>
              <MdToc :links="doc.body.toc.links" />
            </div>
          </aside>

          <article prose>
            <ContentRenderer :value="doc" />
          </article>
        </section>
      </template>

      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentDoc>
  </div>
</template>
