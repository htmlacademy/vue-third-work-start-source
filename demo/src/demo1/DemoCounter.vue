<template>
  <div class="counter">
    <counter-button @action="decrement">-</counter-button>

    <counter-value :value="count" />

    <counter-button @click="increment">+</counter-button>
  </div>
</template>

<script setup>
import CounterValue from "./CounterValue.vue";
import CounterButton from "./CounterButton.vue";
import { ref } from 'vue'

const count = ref(0)

const decrement = () => {
  count.value = count.value - 1
}

const increment = () => {
  count.value = count.value + 1
}
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
}
</style>