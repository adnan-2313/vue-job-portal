<script setup>
import logo from "../../public/Logo.png";
</script>

<template>
  <nav class="bg-slate-950 border-b py-3">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="h-20 w-auto" :src="logo" alt="Vue Jobs" />
          </a>
          <div class="md:ml-auto w-full flex justify-end">
            <div class="flex space-x-2 items-center justify-center">
              <a
                href="index.html"
                class="text-white bg-zinc-800 hover:bg-zinc-900 hover:text-white rounded-md px-3 py-2"
                >Home</a
              >
              <a
                href="jobs.html"
                class="text-white hover:bg-zinc-900 hover:text-white rounded-md px-3 py-2"
                >Jobs</a
              >
              <a
                href="add-job.html"
                class="text-white hover:bg-zinc-900 hover:text-white rounded-md px-3 py-2"
                >Add Job</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>