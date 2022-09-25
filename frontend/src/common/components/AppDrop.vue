<template>
  <div
      @drop.stop="onDrop"
      @dragover.prevent
      @dragenter.prevent
  >
    <slot />
  </div>
</template>