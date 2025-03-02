<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="bg-slate-800 text-white min-h-screen">
    <div class="text-center flex flex-col items-center pt-56 justify-center">
      <i class="pi-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink
        to="/"
        class="text-white bg-zinc-700 hover:bg-green-900 rounded-md px-3 w-36 py-2 mt-4"
        >Go Back</RouterLink
      >
    </div>
  </section>
</template>