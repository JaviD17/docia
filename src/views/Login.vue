<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useLogin from "../composables/useLogin";

const email = ref("");
const password = ref("");

const { error, isPending, login } = useLogin();
const router = useRouter();

const handleSubmit = async () => {
  await login(email.value, password.value);

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
        <h2 class="card-title text-primary">Log In</h2>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="example@email.com"
            class="input input-bordered w-full max-w-xs"
            required
          />
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="text"
            placeholder="********"
            class="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div class="card-actions mt-4">
          <button class="btn btn-secondary">Log In</button>
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
