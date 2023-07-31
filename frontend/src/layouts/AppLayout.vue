<template>
  <div class="app_layout">
    <app-layout-header />
    <slot />
  </div>
</template>

<script setup>
import { AppLayoutHeader } from "@/layouts";
</script>