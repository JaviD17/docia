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

const { documents } = getCollection("products");

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

    <div class="bg-shop flex flex-wrap justify-evenly gap-y-16 py-16">
      <ProductCard
        v-for="document in documents"
        :key="document.id"
        :image="document.image"
        :title="document.title"
        :price="document.price"
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
</style>
