<template>
  <div class="counter">
    <button
      @click="decrement"
    >
      -
    </button>

    <span>Current value: {{ counter }}</span>

    <button
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0)

const decrement = () => counter.value--;
const increment = () => counter.value++;
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;

  button {
    margin: 0 10px;
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background: #dd0000;
    color: white;
    cursor: pointer;

    &:hover {
      background: #ff0000;
    }
  }
}
</style>
