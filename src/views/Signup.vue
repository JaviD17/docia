<template>
  <div class="flex justify-center my-24">
    <div class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary">Sign Up</h2>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="John"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Doe"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="example@email.com"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="********"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="card-actions mt-4">
          <button class="btn btn-secondary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>
