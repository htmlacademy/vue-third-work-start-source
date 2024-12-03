import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
    state: () => ({
        search: '',
        users: [],
        statuses: []
    }),
    getters: {},
    actions: {},
})