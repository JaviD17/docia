<script setup>
import { ref } from "vue";
import CreateProduct from "./CreateProduct.vue";
import Edit from "./Edit.vue";

const price = ref(false);
const release = ref(false);
const collection = ref(false);
const color = ref(false);
</script>

<template>
  <div class="flex justify-between m-8">
    <!-- div containing plus button with pop up modal -->
    <CreateProduct />

    <div class="">
      <div class="dropdown dropdown-hover dropdown-end">
        <label tabindex="0" class="btn m-1">
          <span>Sort</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -8 24 24"
            width="24"
            fill="currentColor"
          >
            <path
              d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
            ></path>
          </svg>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <div
              class="dropdown dropdown-left"
              @mouseenter="collection = true"
              @mouseleave="collection = false"
            >
              <label tabindex="1" class="">Collection</label>
              <ul
                v-if="collection"
                tabindex="1"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>Spring</a></li>
                <li><a>Summer</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div
              class="dropdown dropdown-left"
              @mouseenter="color = true"
              @mouseleave="color = false"
            >
              <label tabindex="1" class="">Color</label>
              <ul
                v-if="color"
                tabindex="1"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>White</a></li>
                <li><a>Black</a></li>
                <li><a>Gray</a></li>
                <li><a>Sand</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover dropdown-end">
        <label tabindex="0" class="btn m-1"
          ><span>Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -8 24 24"
            width="24"
            fill="currentColor"
          >
            <path
              d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
            ></path>
          </svg>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <div
              class="dropdown dropdown-left"
              @mouseenter="price = true"
              @mouseleave="price = false"
            >
              <label tabindex="1" class="">Price</label>
              <ul
                v-if="price"
                tabindex="1"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>$ - $$$</a></li>
                <li><a>$$$ - $</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div
              class="dropdown dropdown-left"
              @mouseenter="release = true"
              @mouseleave="release = false"
            >
              <label tabindex="1" class="">Release Date</label>
              <ul
                v-if="release"
                tabindex="1"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>New to Old</a></li>
                <li><a>Old to New</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
