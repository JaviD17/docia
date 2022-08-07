<template>
  <div>
    <div class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-20"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Docia</h1>
          <p class="mb-5">Keep On</p>
          <RouterLink :to="{ name: 'Shop' }" class="btn btn-primary"
            >Shop Now</RouterLink
          >
        </div>
      </div>
    </div>
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
import ProductCard from "../components/ProductCard.vue";
</script>

<style>
.hero {
  background-image: url("../assets/Hero.jpg");
}
</style>
