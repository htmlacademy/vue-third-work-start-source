<template>
  <div class="counter">
    <CounterButton
      @action="decrement"
    >
      -
    </CounterButton>

    <CounterValue :counter="counter" />

    <CounterButton
      @action="increment"
    >
      +
    </CounterButton>
  </div>
</template>

<script setup>
import CounterButton from './CounterButton.vue'
import CounterValue from './CounterValue.vue'
import { ref } from 'vue';

const counter = ref(0)

const decrement = () => counter.value--;
const increment = () => counter.value++;
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
}
</style>
