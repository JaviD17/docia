<template>
  <div class="">
    <ShopHero />
    <div class="flex flex-wrap justify-evenly gap-y-16 py-16">
      <product-card
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ShopHero from "../components/ShopHero.vue";
import ProductCard from "../components/ProductCard.vue";

// read docs for v-for with components, refactor ProductCard component to handle data intake
const products = ref([
  { id: 1, title: "Drop Cut tee", price: "19.99" },
  { id: 2, title: "Drop Cut sleeveless", price: "19.99" },
  { id: 3, title: "Drop Cut sleevless hoodie", price: "19.99" },
]);
</script>
