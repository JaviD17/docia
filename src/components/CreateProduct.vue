<script setup>
import { ref } from "vue";
// import { db } from "../firebase/config";
// import { addDoc, addCollection } from "@firebase/firestore";

const name = ref("");
const price = ref("");
// const type = ref([]);
const description = ref("");
// const hold = ref(false);

const handleSubmit = () => {
  console.log(name.value, price.value, description.value);
};
</script>

<template>
  <div class="">
    <!-- The button to open modal -->
    <label for="my-modal" class="btn btn-circle modal-button">
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
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <label for="my-modal" class="modal cursor-pointer">
      <div class="modal-box relative" for="">
        <label
          for="my-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2 m-2.5"
          >✕</label
        >
        <div class="flex justify-center flex-wrap">
          <h3 class="text-xl text-primary font-bold mb-4">
            Create New Product
          </h3>
          <!-- product form inside modal -->
          <form
            class="form-control w-full max-w-xs"
            @submit.prevent="handleSubmit"
          >
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              v-model="name"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              required
            />
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <input
              v-model="price"
              type="text"
              placeholder="Ex: 19.99"
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text">Type</span>
            </label>
            <select class="select select-bordered font-normal">
              <option disabled selected>Pick one</option>
              <option>Shirt</option>
              <option>Long Sleeve Shirt</option>
              <option>Hoodie</option>
              <option>Pants</option>
              <option>Shorts</option>
            </select>
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <textarea
              v-model="description"
              class="textarea textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
            <label class="label">
              <span class="label-text">Colors</span>
            </label>
            <div class="border-y-2 border-neutral rounded-lg p-2">
              <label class="label cursor-pointer">
                <span class="label-text">White</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">Black</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">Gray</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">Sand</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">Olive</span>
                <input type="checkbox" class="toggle" checked />
              </label>
            </div>
            <label class="label">
              <span class="label-text">Sizes</span>
            </label>
            <div class="border-y-2 border-neutral rounded-lg p-2">
              <label class="label cursor-pointer">
                <span class="label-text">X-Small</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">Small</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">Medium</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">Large</span>
                <input type="checkbox" class="toggle" checked />
              </label>
              <label class="label cursor-pointer">
                <span class="label-text">X-Large</span>
                <input type="checkbox" class="toggle" checked />
              </label>
            </div>
            <label class="my-2 flex justify-center gap-2 label cursor-pointer">
              <span class="label-text">Hold</span>
              <input type="checkbox" checked="checked" class="checkbox" />
            </label>
            <div class="flex justify-center">
              <button class="btn btn-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </label>
  </div>
</template>
