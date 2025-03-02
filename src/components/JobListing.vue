<script setup>
import { onMounted, reactive } from "vue";
import JobCard from "@/components/JobCard.vue";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
// const jobs = ref([]); we can use ref also but can also use reactive
const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const res = await axios.get("/api/jobs");
    state.jobs = res.data;
  } catch (error) {
    console.error("Error Fetching Jobs", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-slate-900 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-slate-200 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- show loading spinner while loading is true -->
      <div class="text-center text-gray-800" v-if="state.isLoading">
        <PulseLoader />
      </div>
      <div
        v-else
        class="grid grid-cols-1 text-white gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <JobCard
          class=""
          v-for:="job in state.jobs.slice(0, limit || state.jobs.length)"
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