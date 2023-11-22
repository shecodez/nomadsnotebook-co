<script setup lang="ts">
// notebooks
// nomad's > writing tools, stationary, stickers, apperal, misc stuff
// co... > about, blog, newsletter, f.a.q., contact
</script>

<template>
  <header fixed w-full bg-black text-white bg-opacity-40 top-0 z-20 shadow-md>
    <div px-4 md:text-xl class="fx-2-ic font-courgette">
      <div flex-1>
        <div md:hidden text-xl class="fx-2-ic">
          <SideDrawer>
            <template #menuBtn>
              <div i-carbon:menu md:text-2xl />
            </template>

            <div p-5>
              <nuxt-link to="/blog">blog</nuxt-link>
            </div>
          </SideDrawer>
        </div>
        <div hidden md:flex class="fx-3-ic">
          <div><span class="text-primary font-majorMono">NO</span>mad's</div>
          <div><span class="text-primary font-majorMono">NO</span>tebooks</div>
          <div><span class="text-primary font-majorMono">CO</span>...</div>
        </div>
      </div>

      <div class="flex-1 flex justify-center">
        <nuxt-link to="/">
          <img
            src="/images/NomadsNotebookCo-Logo-T.png"
            alt="logo"
            class="w-24 h-auto object-cover filter-invert"
        /></nuxt-link>
      </div>

      <div flex-1 justify-end class="fx-3-ic">
        <div hidden md:block px-2 border-2 rounded-full>ののlounge</div>
        <div title="Account" i-carbon:user-avatar md:text-2xl />
        <div title="Cart" i-carbon:shopping-bag md:text-2xl />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  backdrop-filter: saturate(180%) blur(20px);
}
</style>
