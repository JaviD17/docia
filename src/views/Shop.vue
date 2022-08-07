<template>
  <div class="">
    <ShopHero />
    <div class="flex flex-wrap justify-evenly gap-y-16 py-8">
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
</script>
