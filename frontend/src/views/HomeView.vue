<template>
  <main class="content">
    <section class="desk">
      <div class="desk__header">
        <h1 class="desk__title">Design Coffee Lab</h1>
        <div class="desk__filters">
          <div class="desk__user-filter">
            <ul class="user-filter">
              <li
                v-for="user of users"
                :key="user.id"
                :title="user.name"
                class="user-filter__item"
              >
                <a class="user-filter__button">
                  <img
                    :src="getImage(user.avatar)"
                    :alt="`аватар ${user.name}`"
                    width="24"
                    height="24"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div class="desk__meta-filter">
            <ul class="meta-filter">
              <li
                v-for="{ value, label } in STATUSES"
                :key="value"
                class="meta-filter__item"
              >
                <a
                  :title="label"
                  :class="`meta-filter__status meta-filter__status--color meta-filter__status--${value}`"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div v-if="columns.length" class="desk__columns">
        <div
          v-for="{ title, id } in columns"
          :key="id"
          class="column"
        >
          <h2 class="column__name">{{ title }}</h2>
          <div class="column__target-area">

            <div class="column__task">
              <div
                v-for="task in columnTasks[id]"
                :key="task.id"
                class="task"
              >
                <div class="task__user">
                  <div class="task__avatar">
                    <img
                      :src="getImage(task.user.avatar)"
                      :alt="task.user.name"
                      width="20"
                      height="20"
                    />
                  </div>
                  {{ task.user.name }}
                </div>

                <div class="task__statuses">
                  <span
                    v-if="task.status"
                    :class="`task__status task__status--color task__status--${task.status}`"
                  />
                  <span
                    v-if="task.timeStatus"
                    :class="`task__status task__status--${task.timeStatus}`"
                  />
                </div>

                <h5
                  class="task__title"
                  :class="{ 'task__title--first': !task.user }"
                >
                  {{ task.title }}
                </h5>
                <ul v-if="task.tags?.length" class="task__tags">
                  <li v-for="(tag, index) in task.tags" :key="index">
                    <span class="tag tag--blue">{{ tag }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p v-else class="desk__emptiness">Пока нет ни одной колонки</p>
    </section>
  </main>
</template>

<script setup>
import columns from "@/mocks/columns.json";
import users from "@/mocks/users.json";
import tasks from "@/mocks/tasks.json";
import { STATUSES } from "@/common/constants";
import { normalizeTask, getTagsArrayFromString } from "@/common/helpers";

const normalizedTasks = tasks.map((item) => normalizeTask(item));
const columnTasks = normalizedTasks.reduce((acc, item) => {
  if (!item.columnId) return acc;

  item.tags = getTagsArrayFromString(item.tags);
  if (!acc[item.columnId]) {
    acc[item.columnId] = [];
  }
  acc[item.columnId].push(item);
  return acc;
}, {});

const getImage = (image) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
</script>
