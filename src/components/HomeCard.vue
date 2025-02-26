<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <section class="py-4 -mt-4 bg-slate-800">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-4xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">
            Browse our Vue jobs and start your career today
          </p>
          <a
            href="jobs.html"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </a>
        </Card>
        <Card bg="bg-zinc-900" text="text-white">
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <a
            href="add-job.html"
            class="inline-block bg-white text-black rounded-lg px-4 py-2 hover:bg-zinc-100"
          >
            Add Job
          </a>
        </Card>
      </div>
    </div>
  </section>
</template>