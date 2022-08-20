<template>
  <div class="back card w-96 bg-base-100 text-base-content shadow-xl">
    <figure>
      <img :src="image" alt="Product" />
    </figure>
    <div class="card-body">
      <div class="flex justify-between">
        <h2 class="card-title">{{ title }}</h2>
        <label class="swap swap-flip text-9xl">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" />
          <!-- next 2 divs contain both swap svg tags -->
          <div class="swap-on">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -2 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M3 0h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3z"
              ></path>
            </svg>
          </div>
          <div class="swap-off">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -2 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M3 2a1 1 0 0 0-1 1v15l2.978-2.717a3 3 0 0 1 4.044 0L12 18V3a1 1 0 0 0-1-1H3zm0-2h8a3 3 0 0 1 3 3v15a2 2 0 0 1-3.348 1.477L7.674 16.76a1 1 0 0 0-1.348 0l-2.978 2.717A2 2 0 0 1 0 18V3a3 3 0 0 1 3-3z"
              ></path>
            </svg>
          </div>
        </label>
      </div>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <span>
          <p class="mt-1 font-bold">${{ price }}</p>
        </span>
        <button class="btn btn-outline btn-sm btn-primary">Buy Now</button>
        <button class="btn btn-outline btn-sm btn-secondary">
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
</template>

<script setup>
defineProps(["key", "image", "title", "price"]);
</script>

<style>
.back {
  z-index: 1;
}
</style>
