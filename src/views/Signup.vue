<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useSignup from "../composables/useSignup";

const firstName = ref("");
const lastName = ref("");

const displayName = computed(() => {
  return firstName.value + " " + lastName.value;
});
const email = ref("");
const password = ref("");

const { error, isPending, signup } = useSignup();
const router = useRouter();

const handleSubmit = async () => {
  await signup(displayName.value, email.value, password.value);

  if (!error.value) {
    router.push({ name: "Home" });
  }
};
</script>

<template>
  <div class="bg-shop flex justify-center my-24">
    <div class="card w-96 bg-base-300 shadow-xl">
      <form
        class="card-body items-center text-center"
        @submit.prevent="handleSubmit"
      >
        <h2 class="card-title text-primary">Sign Up</h2>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">First Name</span>
          </label>
          <input
            v-model="firstName"
            type="text"
            placeholder="John"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Last Name</span>
          </label>
          <input
            v-model="lastName"
            type="text"
            placeholder="Doe"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="example@email.com"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="text"
            placeholder="********"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="card-actions mt-4">
          <button class="btn btn-secondary">Sign Up</button>
        </div>
        <div v-if="error">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<style>
.bg-shop {
  background: rgb(39, 41, 53);
  background: linear-gradient(
    0deg,
    rgba(39, 41, 53, 1) 0%,
    rgba(190, 149, 249, 0.25) 50%,
    rgba(39, 41, 53, 1) 100%
  );
}
</style>
