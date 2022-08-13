<template>
  <div class="">
    <ShopHero />
    <div class="flex flex-wrap justify-evenly gap-y-16 py-16">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script setup>
import ShopHero from "../components/ShopHero.vue";
import ProductCard from "../components/ProductCard.vue";

// read docs for v-for with components, refactor ProductCard component to handle data intake
const products = ref([1, 2, 3, 4, 5, 6]);
</script>
