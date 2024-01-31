<script lang="ts" setup>
import FeatureProduct from "~/components/shop/FeatureProduct.vue";
//import Carousel from "~/components/Carousel.vue";

const config = useRuntimeConfig();

const fp = ref({
  id: 1,
  isBeta: true,
  category: "digital-download",
  title: "NONODIGI ZenBuJo Yang",
  description: "This is an amazing description",
  images: [],
  price: 24.42,
  sale: 0.6,
  stock: 99,
  acceptDonations: true,
  variantIds: [],
  rating: 4.8,
});
const currency = ref("USD");

const paperPros = [
  "No dependence on a charged battery & less eye-strain",
  "No crashes or software bugs",
  "less sources of temptation to be distracted by",
  "Nothing like the feel of putting pen to physical paper",
];
const paperCons = [
  "Space constraints, and extra pages mean extra weight",
  "Messy edits and less flexibility in reorganizing",
  "Multiple planners can be cumbersome",
  "Purchasing physical stationary while fun, adds up 🤑",
  "Lose it once and it may be lost forever",
];

const digitalPros = [
  "Store vast amounts of searchable information",
  "Backups, and updates sync across all connected devices",
  "Connect with external calendar apps",
  "Eco & wallet friendly with unlimited colors, photos/gifs, and reusable stickers",
  "Secure and accessible from multiple devices",
];
const digitalCons = [
  "Relies on electronic devices that may emit blue light",
  "Digital planning apps and advanced features may envolve a learning curve",
  "Devices used for planning can be distracting",
];

type InstagramPost = {
  id: string;
  url: string;
  caption: string;
};

const state = reactive({
  loading: false,
  instagramFeed: [] as InstagramPost[],
  error: "",
});

async function getInstagramFeed() {
  state.loading = true;

  try {
    const response = await fetch("/.netlify/functions/instagram-api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Throw an error if the response was not successful
    if (!response.ok) throw new Error(response.statusText);

    state.instagramFeed = await response.json();
  } catch (e: any) {
    state.error = e;
  } finally {
    state.loading = false;
  }
}

onMounted(() => getInstagramFeed());

useHead({
  title: `${config.public.app.name}`,
});
</script>

<template>
  <FeatureProduct :product="fp" :currency="currency" />
  <section id="product-infographic">
    <img
      src="/images/days-infographic.png"
      alt="logo"
      class="w-full h-auto object-cover"
    />
  </section>
  <section id="paper-vs-nonodigi">
    <div
      p-12
      flex
      flex-col
      md:flex-row
      items-center
      md:items-revert
      justify-center
    >
      <div flex-1 flex flex-col gap-1 max-w-sm rounded p-10>
        <h3 text-center mb-2 text-2xl>Paper Planner</h3>
        <ul>
          <template v-for="(p, i) in paperPros" :key="`paperPro-${i}`">
            <li text-green>+ {{ p }}</li>
          </template>
          <br />
          <template v-for="(c, i) in paperCons" :key="`paperCon-${i}`">
            <li text-red>- {{ c }}</li>
          </template>
        </ul>
      </div>
      <div relative border-1 w-full md:w-initial>
        <h3
          class="centered-axis-xy flex items-center justify-center bg-white rounded-full border-2 aspect-square w-12"
        >
          VS
        </h3>
      </div>
      <div flex-1 flex flex-col gap-1 max-w-sm rounded p-10>
        <h3 text-center mb-2 text-2xl>
          <span class="text-primary font-majorMono relative z-1">NoNo</span>
          <span ml--3 opacity-80 class="font-majorMono">DiGi</span>
        </h3>
        <ul>
          <template v-for="(p, i) in digitalPros" :key="`paperPro-${i}`">
            <li text-green>+ {{ p }}</li>
          </template>
          <br />
          <template v-for="(c, i) in digitalCons" :key="`paperCon-${i}`">
            <li text-red>- {{ c }}</li>
          </template>
        </ul>
      </div>
    </div>
  </section>
  <AdminBar>
    <div flex flex-col md:flex-row items-center justify-between p-4>
      <div flex items-center gap-1>
        <h3 text-2xl>
          <span class="text-primary font-majorMono relative z-1">NoNo</span>
          <span ml--2.5 opacity-80 class="font-majorMono">DiGi</span>
        </h3>
        <em text-gray-300> ZenBuJo</em>
        <div flex items-center gap-1 px-3>
          <span :class="fp.sale ? 'hidden' : ''">
            {{ formatPrice(fp.price, currency) }}
          </span>
          <span v-if="fp.sale" text-xl>
            {{ formatPrice(fp.price - fp.price * fp.sale, currency) }}
          </span>
          <span>{{ currency }}</span>
        </div>
      </div>
      <button
        class="bg-primary text-white rounded-full py-2 px-8"
        :disabled="!!!fp.stock"
      >
        <span v-if="fp.stock">add to cart</span>
        <span v-else>sold out</span>
      </button>
    </div>
  </AdminBar>
  <section id="instagram-feed" style="background-image: url(/images/grid.png)">
    <div p-4 text-center>
      <h3 flex items-center justify-center gap-1 text-2xl font-bold mb-4>
        <a href="https://www.instagram.com/nomadsnotebookco/" target="_blank">
          @nomadsnotebookco
        </a>
      </h3>
      <!-- <pre>{{ state.instagramFeed }}</pre> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <template v-for="p in state.instagramFeed" :key="p.id">
          <div relative aspect-square>
            <nuxt-img
              :src="p.url"
              :alt="p.caption"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.centered-axis-xy {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#instagram-feed {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
