<script setup>
import { RouterLink } from "vue-router";
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink to="/jobs" class="text-white">
        <button
          class="rounded-md bg-slate-400 hover:bg-slate-500 cursor-pointer px-4 py-1"
        >
          <ArrowLeftIcon class="size-6 text-white" />
        </button>
      </RouterLink>
    </div>
  </section>
</template>