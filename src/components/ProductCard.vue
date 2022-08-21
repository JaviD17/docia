<script setup>
defineProps(["key", "image", "name", "price", "description"]);
</script>

<template>
  <div class="back card w-96 bg-base-100 text-base-content shadow-xl">
    <figure>
      <img :src="image" alt="Product" />
    </figure>
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title text-2xl font-bold">{{ name }}</h2>
        <div class="flex gap-1">
          <label class="swap swap-flip text-9xl">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" />
            <!-- next 2 divs contain both swap svg tags -->
            <div class="swap-on">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -4 24 24"
                width="24"
                fill="currentColor"
              >
                <path
                  d="M9.293 1.55l.707.708.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z"
                ></path>
              </svg>
            </div>
            <div class="swap-off">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -4 24 24"
                width="24"
                fill="currentColor"
              >
                <path
                  d="M3.636 7.208L10 13.572l6.364-6.364a3 3 0 1 0-4.243-4.243L10 5.086l-2.121-2.12a3 3 0 0 0-4.243 4.242zM9.293 1.55l.707.707.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0l-7.071-7.07a5 5 0 1 1 7.07-7.071z"
                ></path>
              </svg>
            </div>
          </label>
          <button class="btn btn-ghost btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3 -2 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <p>{{ description }}</p>
      <div class="card-actions justify-between">
        <span>
          <p class="mt-1 font-bold">${{ price }}</p>
        </span>
        <div>
          <button class="mx-1 btn btn-outline btn-sm btn-primary">
            Buy Now
          </button>
          <button class="mx-1 btn btn-outline btn-sm btn-secondary">
            Add to
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3 -4 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.back {
  z-index: 1;
}
</style>
