<script setup lang="ts">
// notebooks
// nomad's > writing tools, stationary, stickers, apperal, misc stuff
// co... > about, blog, newsletter, f.a.q., contact
</script>

<template>
  <AdminBar>
    <p>
      2024 <span class="text-primary font-majorMono">NoNo</span>
      <span ml--1.5 opacity-80 class="font-majorMono">diGi</span>
      <em> ZenBuJo</em> beta version is live!!
    </p>
  </AdminBar>

  <header w-full shadow-md>
    <div px-4 md:text-xl class="fx-2-ic">
      <div flex-1>
        <div md:hidden text-xl class="fx-2-ic">
          <SideDrawer>
            <template #menuBtn>
              <div title="menu" i-carbon:menu md:text-2xl />
            </template>

            <div min-h-screen p-5 flex flex-col>
              <div text-center mb-12>
                <div text-3xl class="text-primary font-majorMono">NONOCO</div>
                <div text-sm font-bold text-gray-600>
                  Nomad's Notebook Company
                </div>
              </div>

              <div flex-1 flex flex-col gap-3 text-xl class="sideNavLinks">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/about">About</nuxt-link>
                <!-- <nuxt-link to="/blog">Blog</nuxt-link>
                <nuxt-link to="/faqs">FAQs</nuxt-link> -->
                <nuxt-link to="/contact">Contact</nuxt-link>
                <!-- <nuxt-link mt-auto to="/login">Login</nuxt-link> -->
              </div>
            </div>
          </SideDrawer>
        </div>
        <div hidden md:flex class="fx-3-ic">
          <!-- <div><span class="text-primary font-majorMono">NO</span>mad's</div>
          <div><span class="text-primary font-majorMono">NO</span>tebooks</div>
          <div><span class="text-primary font-majorMono">CO</span>...</div> -->
          <div flex items-center gap-1>
            <div title="Home" i-carbon:home md:text-2xl />
            <nuxt-link to="/" class="text-primary font-majorMono">
              NONOCO
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="flex-1 flex justify-center">
        <nuxt-link to="/">
          <img
            src="/images/NomadsNotebookCo-Logo-T.png"
            alt="logo"
            class="w-20 h-auto object-cover"
        /></nuxt-link>
      </div>

      <div flex-1 justify-end class="fx-3-ic">
        <!-- <div hidden md:block px-2 border-2 rounded-full>lounge</div>
        <div title="Account" i-carbon:user-avatar md:text-2xl /> -->
        <div flex items-center gap-1>
          <div title="Cart" i-carbon:shopping-bag md:text-2xl />
          <span class="text-primary font-majorMono">0</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  backdrop-filter: saturate(180%) blur(20px);
}

.sideNavLinks a {
  padding: 0.5em;
}
a:hover {
  text-decoration: underline;
}
</style>
