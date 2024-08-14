import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({ sidebarOpen: false }),
  getters: {
    getSidebarState(state) {
      return state.sidebarOpen
    },
  },
  actions: {
    toggleSiderbar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
})