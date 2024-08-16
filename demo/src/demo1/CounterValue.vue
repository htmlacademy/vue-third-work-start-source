<template>
  <span>Current value: {{ counter }}</span>
</template>

<script setup>
const props = defineProps({
  counter: { type: Number, },
})
</script>