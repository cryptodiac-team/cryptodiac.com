<template>
  <div class="max-w-screen w-screen flex justify-center">
    <div class="max-w-screen-lg flex flex-col max-h-screen">
      <div
        id="tools-bar"
        class="min-w-screen max-w-screen-lg h-10 bg-tools-bar flex flex-row justify-between"
      >
        <img src="/logo.png" alt="" class="ml-4 mt-3 mb-2 h-5" />
        <div
          id="nav-bar"
          class="flex flex-row align-middle space-x-3 pr-2 text-tools-bar place-items-center text-xs"
        >
          <a v-on:click="scrollTo('home')" class="cursor-pointer">Home</a>
          <a v-on:click="scrollTo('collections')" class="cursor-pointer"
            >Collections</a
          >
          <a v-on:click="scrollTo('about-us')" class="cursor-pointer"
            >About us</a
          >
        </div>
      </div>
      <div class="flex flex-col max-w-screen overflow-scroll">
        <div id="home">
          <img src="/header.png" alt="" class="" />
        </div>
        <div id="decription" class="flex flex-col">
          <div class="sm:flex sm:flex-row">
            <div class="flex justify-center mt-6 py-4 sm:w-1/2">
              <div class="w-4/6 flex items-center">
                <img src="img/piuc1.png" alt="" class="object-scale-down" />
              </div>
            </div>
            <div
              class="mx-6 sm:w-1/2 sm:grid sm:grid-cols-1 sm:place-content-center"
            >
              <div class="text-title text-2xl">{{ articles.whatIs.title }}</div>
              <div class="ml-2 mt-4 text-base text-body whitespace-pre-line">
                {{ articles.whatIs.body }}
              </div>
            </div>
          </div>

          <div class="sm:flex sm:flex-row-reverse">
            <div class="flex justify-center mt-8 py-4 sm:w-1/2 sm:mt-0">
              <div class="w-4/6 flex items-center">
                <img src="img/itemss.png" alt="" class="object-scale-down" />
              </div>
            </div>
            <div
              class="mx-6 sm:w-1/2 sm:grid sm:grid-cols-1 sm:place-content-center"
            >
              <div class="text-title text-2xl">
                {{ articles.aboutDesign.title }}
              </div>
              <div class="ml-2 mt-4 text-base text-body whitespace-pre-line">
                {{ articles.aboutDesign.body }}
              </div>
            </div>
          </div>
          <div class="mx-6 text-title text-2xl mt-6">Timeline</div>
          <div class="w-full flex justify-center">
            <Timeline class="w-10/12" :currentWeek="week" />
          </div>
          <div class="sm:flex sm:flex-row sm:pr-4">
            <div class="mx-6 mt-8">
              <div class="text-title text-2xl">
                {{ articles.collections.title }}
              </div>
              <div class="ml-2 mt-4 text-base text-body whitespace-pre-line">
                {{ articles.collections.body }}
              </div>
            </div>

            <div class="flex justify-center items-center mt-8 sm:flex-grow">
              <div class="flex flex-col bg-sold px-8 py-3 rounded-xl sm:h-24">
                <div class="flex justify-center mb-1">
                  <div class="text-base text-normal font-bold">SOLD</div>
                </div>
                <div
                  class="flex justify-center bg-sold-amount rounded-3xl px-2 mb-1 shadow-4x"
                >
                  <div
                    id="collections"
                    class="text-sold-amount text-base p-1 px-2"
                  >
                    {{ sold_item }}/{{ amount_item }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 mt-8 mx-2 sm:grid-cols-2 lg:grid-cols-3">
            <div
              id="card"
              v-for="(card, index) in items"
              :key="index"
              class="flex justify-center mb-4 mx-2"
            >
              <Card
                :card="card"
                class=""
                :week="week"
                :expanded="isExpanded(index)"
                v-on:cardClick="expand(index)"
              />
            </div>
          </div>

          <div id="about-us" class="mx-6 grid grid-cols-1 sm:grid-cols-2">
            <div class="">
              <div class="text-title text-2xl">About us</div>
              <div class="ml-4 mt-4 lg:mt-8 text-xs text-title">
                Designed by
              </div>
              <div class="ml-8 text-2xl text-body">Gonekrit</div>
              <div class="-mt-2 ml-8 text-description text-base">
                Thai artist,designer and content creator
              </div>
            </div>
            <div class="flex items-end">
              <div class="flex items-center justify-end w-full">
                <img
                  src="/gonekrit.png"
                  alt=""
                  class="w-full object-scale-down"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="min-w-screen py-2 bg-footer flex flex-row justify-between">
          <div
            id="footer"
            class="flex flex-col pl-2 text-tools-bar place-items-center text-xs w-full"
          >
            <div class="flex flex-col-reverse h-full w-full">
              <div class="flex w-full">
                  <div class="text-xs text-sub-footer w-full">
                    2021 CryptoDiac Project
                  </div>
                </div>
              <div class="w-full">
                
                <div class="flex flex-row">
                  <a href="https://twitter.com/Cryptodiac1">
                    <img src="/twlogo.png" alt="" class="w-10 h-8 pr-2" />
                  </a>
                  <a href="https://github.com/cryptodiac-team">
                    <img src="/ghlogo.png" alt="" class="w-10 h-8 pr-2" />
                  </a>
                  <a href="">
                    <img src="/tglogo.png" alt="" class="w-10 h-8 pr-2" />
                  </a>
                </div>
                <div class="text-sm w-full">For more information</div>
                <div class="-mt-2 text-sm w-full">
                  Contact : admin@cryptodiac.com
                </div>
              </div>
            </div>
          </div>
          <div class="w-36 pr-4">
            <img src="/footer_logo.png" alt="" class="object-scale-down" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from "~/assets/items.json";
import articles from "~/assets/articles.json";
import ClickOutside from "vue-click-outside";
export default {
  name: "App",
  methods: {
    expand(index) {
      if (this.expandIndex === index) {
        this.expandIndex = null;
      } else {
        this.expandIndex = index;
      }
    },
    isExpanded(index) {
      return this.expandIndex === index;
    },
    cancelExpand() {
      this.expandIndex = null;
    },
    scrollTo(elementId) {
      var elmnt = document.getElementById(elementId);
      elmnt.scrollIntoView();
    },
  },
  data: function () {
    return {
      sold_item: 0,
      amount_item: 144,
      expandIndex: "",
      week: 1,
      items: items,
      articles: articles,
    };
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
