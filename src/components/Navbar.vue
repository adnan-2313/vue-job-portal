<script setup>
import logo from "@/assets/Logo.png";
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routPath) => {
  const route = useRoute();
  return route.path === routPath;
};
</script>

<template>
  <nav class="bg-slate-950 border-b py-3">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-20 w-auto" :src="logo" alt="Vue Jobs" />
          </RouterLink>
          <div class="md:ml-auto w-full flex justify-end">
            <div class="flex space-x-2 items-center justify-center">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-zinc-900'
                    : 'hover:bg-zinc-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/jobs"
                :class="[
                  isActiveLink('/jobs')
                    ? 'bg-zinc-900'
                    : 'hover:bg-zinc-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Jobs</RouterLink
              >
              <RouterLink
                to="/jobs/add"
                :class="[
                  isActiveLink('/jobs/add')
                    ? 'bg-zinc-900'
                    : 'hover:bg-zinc-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Add Job</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>