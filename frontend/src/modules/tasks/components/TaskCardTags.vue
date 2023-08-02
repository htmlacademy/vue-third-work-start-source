<template>
  <ul class="task-card-tags">
    <li v-for="(tag, index) in normalizedTags" :key="index">
      <span class="task-card-tags__tag">{{ tag }}</span>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { getTagsArrayFromString } from "@/common/helpers";

const props = defineProps({
  tags: {
    type: String,
    required: true,
  },
});

const normalizedTags = computed(() => getTagsArrayFromString(props.tags));
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.task-card-tags {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5px;
  @include clear-list;

  li {
    margin-top: 4px;
    margin-right: 4px;
  }

  &__tag {
    padding: 4px 8px;
    color: $black-900;
    border-radius: 10px;
    background-color: $blue-gray-100;
    @include r-s10-h12;

    &--pink {
      background-color: $pink-300;
    }

    &--orange {
      background-color: $yellow-300;
    }

    &--green {
      background-color: $green-100;
    }

    &--yellow {
      background-color: $yellow-100;
    }

    &--blue {
      background-color: $blue-300;
    }

    &--violet {
      background-color: $pink-200;
    }
  }
}
</style>
