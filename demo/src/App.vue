<template>
  <demo-container>
    <router-view/>
  </demo-container>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
</style>
<script setup lang="ts">
import DemoContainer from "./components/DemoContainer.vue";
</script>