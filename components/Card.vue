<template>
  <div id="card" class="relative">
    <div
      id="card-wrapper"
      class="bg-card border-2 boder-solid border-card rounded-md"
    >
      <div class="p-2 mt-6 h-96 w-full flex justify-center object-scale-down">
        <img :src="getImgUrl(card.sequence[week].color)" alt=""  class="h-full object-scale-down"/>
      </div>
      <div
        class="flex flex-col -mt-4 justify-center rounded-b-md w-full z-40 overflow-hidden"
        v-bind:class="{ 'max-height': expanded, 'max-height-0': !expanded }"
      >
        <div class="mx-6">
          <div class="text-body text-4xl -mb-1 lg:text-3xl leading-none">{{ card.name }}</div>
          <div class="text-2xl text-normal mt-2">
            Color : <span :id="colorElmnId">{{ jsUcfirst(card.sequence[week].color) }}</span>
          </div>
          <div class="text-2xl mb-3 text-normal leading-none">
            Date : {{ card.date }}
          </div>
          <div
            v-for="(detail, key) in card.details"
            :key="key"
            class="text-base text-normal"
          >
            <span class="text-body">{{ key }} : </span>{{ detail }}
          </div>
        </div>
        <div class="flex justify-center my-6">
          <a :href="card.link"
            class="bg-button px-8 pt-3 pb-3 rounded-3xl text-button text-2xl shadow-4x"
          >
            View on Opensea
          </a>
        </div>

        <div class="mx-6">
          <div class="text-base text-body">Color sequence :</div>
          <div id="color-group" class="grid grid-cols-6 mt-1">
            <div
              v-for="(week, index) in card.sequence"
              :key="index"
              class="flex justify-center mx-0.5 my-1 static"
              v-on:click="colorClick(week.color)"
              @mouseover="hoverOn(week.color)"
              @mouseleave="closePreview()"
            >
              <div class="relative">
                <svg viewBox="0 0 100 100" class="w-full">
                  <circle
                    class="cursor-pointer"
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#7b93db"
                    stroke-width="4"
                    :fill="getColorCode(week.color)"
                  />
                </svg>

                <img
                  src="icon/sold.svg"
                  alt=""
                  v-if="week.sold"
                  class="absolute top-1/2 left-1/2 w-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-center mt-4 mb-1"
        v-on:click="$emit('cardClick')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="icon-cheveron-up h-10 transform transition-transform duration-500 ease-in-out"
          v-bind:class="{ 'rotate-180': expanded, 'rotate-180': !expanded }"
        >
          <path
            class="secondary"
            fill="#647ACB"
            fill-rule="evenodd"
            d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
          />
        </svg>
      </div>
    </div>
    
    <div
        :id="card.image"
        class="top-0 left-0 hidden fixed h-40 w-40 z-50"
        v-click-outside="closePreview"
      >
        <div
          class="flex justify-center items-center bg-card border-2 boder-solid border-card rounded-md w-40 h-40"
        >
          <img :src="getColorImgUrl()" alt="" class="w-32 h-32"/>
        </div>
        <div class="flex justify-center mt-1">
          <svg id="triangle" width="10%" height="10%" viewBox="0 0 100 100">
            <path d="M 0 0 L 50 86 L 100 0 z" fill="#7B93DB" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
      </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import colors from "~/assets/colors.json";
export default {
  name: "Card",
  props: {
    card: { requied: true },
    expanded: { type: Boolean, default: false },
    week: { requied: true },
  },
  data: function () {
    return {
      imageUrlPrefix: "/card/",
      selectedColor: null,
      colorElmnId : this.card.name+"color",
    }; 
  },
  methods: {
    getImgUrl(color) {
      const name = this.card.image;
      return this.imageUrlPrefix + name + "/" + name + "_" + color + ".png";
    },
    getColorImgUrl() {
      if (this.selectedColor) {
        const name = this.card.image;
        return "/card/" +name + "/" +name +"_" + this.selectedColor +".png";
      }else{
        return ""
      }
    },
    getColorCode(color) {
      return colors[color];
    },
    closePreview() {
      var preview = document.getElementById(this.card.image);
      preview.style.display = "none";
    },
    colorClick() {
      var preview = document.getElementById(this.card.image);
      preview.style.display = "block";
    },
    hoverOn(color) {
      this.selectedColor = color;

      var preview = document.getElementById(this.card.image);
      var marginX = -80;
      var marginY = -200;
      preview.style.display = "block";
      window.onmousemove = function (e) {
        var x = e.clientX,
          y = e.clientY;
        preview.style.top = y + marginY + "px";
        preview.style.left = x + marginX + "px";
      };
    },
    jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
  },
  mounted : function(){
    document.getElementById(this.colorElmnId).style.color = colors[this.card.sequence[this.week].color]
  },
  directives: {
    ClickOutside,
  },
};
</script>


<style>
.max-height {
  transition: max-height 0.5s ease-in-out;
  height: auto;
  max-height: 900px;
}
.max-height-0 {
  transition: max-height 0.5s ease-in-out;
  height: auto;
  max-height: 0px;
}
#detail {
  -webkit-animation: slide-down 0.3s ease-out;
  -moz-animation: slide-down 0.3s ease-out;
}

@-webkit-keyframes slide-down {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes slide-down {
  0% {
    opacity: 0;
    -moz-transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}
</style>
