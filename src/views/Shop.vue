<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";

import getCollection from "../composables/getCollection";

// firebase imports
// import { db } from "../firebase/config";
// import { collection, getDocs } from "firebase/firestore";

// const products = ref([]);

// const colRef = collection(db, "products");

// getDocs(colRef).then((snapshot) => {
//   let docs = [];

//   snapshot.docs.forEach((doc) => {
//     docs.push({ ...doc.data(), id: doc.id, image: slide1 });
//   });

//   products.value = docs;
// });

const { documents: products } = getCollection("products");

// read docs for v-for with components, refactor ProductCard component to handle data intake

const slides = [
  {
    title: "Slide #1",
    content: "Slide 1 content.",
    image: slide1,
  },
  {
    title: "Slide #2",
    content: "Slide 2 content.",
    image: slide2,
  },
];
</script>

<template>
  <div>
    <vueper-slides autoplay fade :touchable="false">
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      >
      </vueper-slide>
    </vueper-slides>

    <div class="flex justify-center my-16">
      <ul class="menu menu-horizontal bg-base-300 rounded-box">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-7v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </li>
        <li tabindex="0">
          <span
            >Filter<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -8 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
              ></path></svg
          ></span>
          <ul class="front bg-base-100">
            <li><a>Price</a></li>
            <li><a>Release Date</a></li>
            <li><a>Collection</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="bg-shop flex flex-wrap justify-evenly gap-y-16 pb-16">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :price="product.price"
      />
    </div>
  </div>
</template>

<style>
.bg-shop {
  background: rgb(39, 41, 53);
  background: linear-gradient(
    0deg,
    rgba(39, 41, 53, 1) 0%,
    rgba(190, 149, 249, 0.25) 50%,
    rgba(39, 41, 53, 1) 100%
  );
}

.front {
  z-index: 1000;
}
</style>
