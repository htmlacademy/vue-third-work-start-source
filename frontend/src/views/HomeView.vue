<template>
  <main class="content">
    <section class="desk">
      <!--      Шапка доски-->
      <div class="desk__header">
        <h1 class="desk__title">Design Coffee Lab</h1>
        <div class="desk__filters">
          <div class="desk__user-filter">
            <!--            Список пользователей-->
            <ul class="user-filter">
              <li
                  v-for="user in users"
                  :key="user.id"
                  :title="user.name"
                  class="user-filter__item"
              >
                <a class="user-filter__button">
                  <img
                      :src="getImage(user.avatar)"
                      alt="Аватар юзера"
                      width="24"
                      height="24"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="desk__meta-filter">
            <!--            Список статусов-->
            <ul class="meta-filter">
              <li
                  v-for="({ value, label }) in STATUSES"
                  :key="value"
                  class="meta-filter__item"
              >
                <a
                    class="meta-filter__status"
                    :class="`meta-filter__status meta-filter__status--color meta-filter__status--${value}`"
                    :title="label"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--      Колонки и задачи-->
      <div v-if="columns.length" class="desk__columns">
        <div v-for="column in columns" :key="column.id" class="column">
          <h2 class="column__name">{{ column.title }}</h2>
          <div class="column__target-area">
            <!--            Задачи-->
            <div
                v-for="task in columnTasks[column.id]"
                class="column__task"
            >
              <div class="task">
                <div
                    v-if="task.user"
                    class="task__user"
                >
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
                    class="task__status"
                    :class="`task__status--${task.status}`"
                />
                  <span
                      v-if="task.timeStatus"
                      class="task__status"
                      :class="`task__status--${task.timeStatus}`"
                  />
                </div>

                <h5
                    class="task__title"
                    :class="{ 'task__title--first': !task.user }"
                >
                  {{ task.title }}
                </h5>
                <ul
                    v-if="task.tags && task.tags.length"
                    class="task__tags"
                >
                  <li
                      v-for="(tag, index) in task.tags"
                      :key="index"
                  >
                  <span class="tag tag--blue">
                    {{ tag }}
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      Пустая доска-->
      <p
          v-else
          class="desk__emptiness"
      >
        Пока нет ни одной колонки
      </p>
    </section>
  </main>
</template>

<script setup>
import columns from '../mocks/columns.json'
import users from '../mocks/users.json'
import rawTasks from '../mocks/tasks.json'
import { normalizeTask, getTagsArrayFromString } from '../common/helpers'
import { STATUSES } from '../common/constants'
const normalizedTasks = rawTasks.map(task => normalizeTask(task))
const columnTasks = normalizedTasks
    .filter(({ columnId }) => columnId)
    .reduce((accumulator, task) => {
      task.tags = getTagsArrayFromString(task.tags)
      if (accumulator[task.columnId]) {
        accumulator[task.columnId] = [...accumulator[task.columnId], task]
      } else {
        accumulator[task.columnId] = [task]
      }
      return accumulator
    }, {})
const getImage = image => {
  // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
</script>