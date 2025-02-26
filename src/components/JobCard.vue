<script setup>
import { defineProps } from "vue";
defineProps({
  job: Object,
});

// console.log(job);
</script>

<template>
  <div class="bg-slate-800 rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-300 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        {{ job.description }}
      </div>

      <h3 class="text-slate-100 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-gray-200 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ job.location }}
        </div>
        <a   Read More
          href="job.html"
          class="h-[36px] bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>