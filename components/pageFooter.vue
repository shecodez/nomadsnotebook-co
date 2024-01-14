<script setup lang="ts">
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: 'Blog', href: '/blog' },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal/terms" },
];

const socialLinks = [
  // {
  //   icon: 'i-carbon:logo-discord',
  //   label: 'Discord',
  //   link: 'https://discord.gg/kE4Xu7WsQK',
  // },
  {
    icon: "i-carbon:logo-instagram",
    label: "Instagram",
    link: "https://www.instagram.com/nomadsnotebookco/",
  },
  {
    icon: "i-carbon:logo-youtube",
    label: "YouTube",
    link: "https://youtube.com/@nomadsnotebookco",
  },
  {
    icon: "i-carbon:logo-pinterest",
    label: "Pinterest",
    link: "https://www.pinterest.com/nomadsnotebookco/",
  },
];

const locationLabel = "Atlanta, GA, USA"; // next: Hachiōji, Tokyo, Japan
const locationQuery = "https://www.google.com/search?q=atlanta+ga";
</script>

<template>
  <footer mt-auto p-5 bg-black text-white>
    <div grid grid-cols-1 lg:grid-cols-3 border-2 text-center>
      <div p-2 border-b-2 lg:col-span-3>
        <p py-4 text-sm max-w-md mx-auto>
          <em font-thin>
            "Perhaps travel cannot prevent bigotry, but by demonstrating that
            all peoples cry, laugh, eat, worry, and die, it can introduce the
            idea that if we try and understand each other, we may even become
            friends."
          </em>
          ―Maya Angelou
        </p>
      </div>
      <div p-2 border-b-2 lg:col-span-1 flex items-center justify-center>
        <div py-4 flex flex-col gap-2>
          <template v-for="n in navLinks" :key="n.href">
            <nuxt-link :to="n.href" hover:text-primary>{{ n.label }}</nuxt-link>
          </template>
        </div>
      </div>
      <div p-2 border-b-2 lg:col-span-2 lg:border-l-2>
        <div py-4 relative flex items-center justify-center>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:lang="en"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="508"
            height="126"
          >
            <defs>
              <path d="M 10 10 q 90 -110 242 -10 t 242 0" id="wave" />
            </defs>
            <g font-size="24px" fill="white">
              <text transform="translate(0,75)" letter-spacing="5">
                <textPath xlink:href="#wave" uppercase>
                  Subscribe to the newsletter 📮
                </textPath>
              </text>
            </g>
          </svg>

          <form id="newsletter" class="absolute-centered">
            <div relative flex items-center mx-auto max-w-sm>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                class="flex-1 rounded-l-full py-2 px-4"
                autocomplete="email"
              />
              <button bg-primary rounded-r-full py-2 px-4 type="submit">
                subscribe
                <!-- <div title="subscribe" i-carbon:send text-lg /> -->
              </button>
            </div>
          </form>
        </div>

        <ul py-4 flex justify-center gap-4 text-xl text-primary>
          <li v-for="(s, i) in socialLinks" :key="`at-${i}`" :title="s.label">
            <a :href="s.link" target="_blank"><div :class="s.icon" /></a>
          </li>
        </ul>
      </div>
      <div p-2 lg:col-span-3>
        <div flex items-center justify-center gap-2>
          <img
            src="/images/favicon-t.png"
            alt="logo"
            class="w-10 h-auto object-cover"
          />
          <a :href="locationQuery" target="_blank" underline>
            {{ locationLabel }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.absolute-centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
