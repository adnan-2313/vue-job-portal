<script setup>
import {  ref, computed } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  job: Object,
});

const showFullDesc = ref(false);
// console.log(job);
const toggleFullDesc = () => {
  showFullDesc.value = !showFullDesc.value;
};

const truncatedDesc = computed(() => {
  let description = props.job.description;

  if (!showFullDesc.value) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});
</script>

<template>
  <div class="bg-slate-800 rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-300 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ truncatedDesc }}
        </div>
        <button
          @click="toggleFullDesc"
          class="text-zinc-500 hover:text-zinc-600 mb-5 cursor-pointer"
        >
          {{ showFullDesc ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-slate-100 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-gray-200 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ job.location }}
        </div>
        <RouterLink
          Read
          More
          :to="'/jobs/' + job.id"
          class="h-[36px] bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>