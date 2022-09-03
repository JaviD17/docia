<script setup>
import { ref, computed } from "vue";
import { auth } from "../firebase/config";
import { signOut } from "@firebase/auth";
import getUser from "../composables/getUser";

const navLinks = ref(["Home", "Shop", "Cart", "Calc"]);

const { user } = getUser();

const handleClick = () => {
  signOut(auth);
};
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="navLink in navLinks">
            <RouterLink :to="{ name: navLink }">{{ navLink }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:block">
      <RouterLink
        :to="{ name: 'Home' }"
        class="btn btn-ghost normal-case text-xl"
        >Docia</RouterLink
      >
    </div>
    <!-- if user is logged in -->
    <div class="navbar-end flex gap-1" v-if="user">
      <!-- show user email -->
      <div class="text-accent font-semibold uppercase">
        Hi {{ user.displayName }}
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <RouterLink
                :to="{ name: 'Cart' }"
                class="btn btn-primary btn-block"
                >View cart</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <!-- avatar icon -->
          <div class="avatar">
            <div class="w-10 mask mask-hexagon">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <RouterLink :to="{ name: 'Profile' }" class="justify-between">
              Profile
              <span class="badge">New</span>
            </RouterLink>
          </li>
          <li><RouterLink :to="{ name: 'Settings' }">Settings</RouterLink></li>
          <li><button @click="handleClick">Logout</button></li>
        </ul>
      </div>
    </div>
    <!-- if user is NOT logged in -->
    <div class="navbar-end" v-if="!user">
      <div class="mr-2 flex gap-4">
        <div>
          <RouterLink
            :to="{ name: 'Signup' }"
            class="btn btn-accent btn-outline btn-sm"
            >signup</RouterLink
          >
        </div>
        <div>
          <RouterLink
            :to="{ name: 'Login' }"
            class="btn btn-accent btn-outline btn-sm"
            >login</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
