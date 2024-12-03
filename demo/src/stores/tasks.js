import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
    }),
    getters: {},
    actions: {},
})