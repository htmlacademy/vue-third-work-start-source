import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
    state: () => ({
        search: '',
        users: [],
        statuses: []
    }),
    getters: {
        filters: state => {
            const { search, users, statuses } = state
            return {
                search,
                users,
                statuses
            }
        }
    },
    actions: {},
})