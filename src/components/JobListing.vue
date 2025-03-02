<script setup>
import jobData from "@/jobs.json";
import { ref } from "vue";
import JobCard from "@/components/JobCard.vue";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const jobs = ref(jobData);
// console.log(job.value);
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="bg-slate-900 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-slate-200 mb-6 text-center">
        Browse Jobs
      </h2>
      <div
        class="grid grid-cols-1 text-white gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <JobCard
          class=""
          v-for:="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
  </section>
</template>