<script setup>
import { ref } from "vue";

const price = ref(false);
const release = ref(false);
</script>

<template>
  <div class="flex justify-between m-8">
    <div class="">
      <!-- The button to open modal -->
      <label for="my-modal-4" class="btn btn-circle modal-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-4.5 -4.5 24 24"
          width="24"
          fill="currentColor"
        >
          <path
            d="M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
          ></path></svg
      ></label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">
            Create New Product
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
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
          <li><a>By Collection</a></li>
          <li><a>By Color</a></li>
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
