<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "./components/Hero.vue";
import HomeCard from "./components/HomeCard.vue";
import JobListing from "./components/JobListing.vue";
</script>

<template>
  <Navbar />
  <Hero
    title="Find Your Dream Job"
    subTitle="Find the Job that fits your skills and needs"
  />
  <HomeCard />
  <JobListing />
</template>