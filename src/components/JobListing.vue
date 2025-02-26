<script setup>
import jobData from "@/jobs.json";
import { ref } from "vue";
import JobCard from "@/components/JobCard.vue";

const jobs = ref(jobData);
// console.log(job.value);
</script>

<template>
  <section class="bg-zinc-950 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-slate-200 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 text-white gap-6 md:grid-cols-2 lg:grid-cols-3">
        <JobCard class="" v-for:="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>