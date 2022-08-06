<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      </nav>
      <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style></style>
