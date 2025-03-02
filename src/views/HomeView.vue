<script setup>
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCard.vue";
import JobListing from "@/components/JobListing.vue";
</script>

<template>
  <Hero
    title="Find Your Dream Job"
    subTitle="Find the Job that fits your skills and needs"
  />
  <HomeCard />
  <JobListing limit="3" showButton="true" />
</template>