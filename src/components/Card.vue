<script setup>
import { defineProps } from "vue";

defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",

  },
  text:{
    type:String,
    default:"text-black"
  }
});
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg py-12 shadow-lg ${text}`">
    <slot></slot>
  </div>
</template>