<script setup>
import { ref } from "vue";
import { db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import getUser from "../composables/getUser";

const colors = ["White", "Black", "Gray", "Sand"];

const { user } = getUser();
const name = ref("");
const price = ref("");
const type = ref([]);
const description = ref("");
// const hold = ref(false);
const viewForm = ref(false);
const checkedColors = ref([]);

const handleSubmit = async () => {
  console.log(name.value, price.value, description.value);

  // firebase
  const colRef = collection(db, "products");

  await addDoc(colRef, {
    userUid: user.value.uid,
    name: name.value,
    price: price.value,
    type: type.value,
    description: description.value,
    colors: checkedColors.value,
    liked: false,
    createdAt: serverTimestamp(),
  });

  name.value = "";
  price.value = "";
  description.value = "";
  viewForm.value = false;
};
</script>

<template>
  <div class="flex gap-2">
    <!-- The button to open modal -->
    <!-- only displays if user is logged in -->
    <div v-if="user">
      <label
        @click="viewForm = true"
        for="my-modal"
        class="btn btn-circle modal-button"
      >
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
      <input
        v-if="viewForm"
        type="checkbox"
        id="my-modal"
        class="modal-toggle"
      />
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
              <select v-model="type" class="select select-bordered font-normal">
                <option disabled value="">Pick one</option>
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
                <label v-for="color in colors" class="label cursor-pointer">
                  <span class="label-text">{{ color }}</span>
                  <input
                    v-model="checkedColors"
                    :value="color"
                    type="checkbox"
                    class="toggle"
                  />
                </label>
                <!-- <label class="label cursor-pointer">
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
                </label> -->
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
              <label
                class="my-2 flex justify-center gap-2 label cursor-pointer"
              >
                <span class="label-text">Hold</span>
                <input type="checkbox" class="checkbox" />
              </label>
              <div class="flex justify-center">
                <button for="my-modal" class="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </label>
    </div>

    <!-- only displays if user is logged in -->
    <div class="" v-if="user">
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />

        <!-- sun icon -->
        <div class="btn btn-circle swap-on">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2.5 -2.5 24 24"
            width="24"
            fill="currentColor"
          >
            <path
              d="M16.318 6.11l-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829L16.318 6.11zm-1.414 1.415l-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9 3.536 3.536z"
            ></path>
          </svg>
        </div>

        <!-- moon icon -->
        <div class="btn btn-circle swap-off">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2.5 -2.5 24 24"
            width="24"
            fill="currentColor"
          >
            <path
              d="M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  </div>
</template>
