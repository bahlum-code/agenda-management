import { defineStore } from 'pinia'
import axios from "axios";
import { type User as Doctor } from "@/utils/types/user";

const baseURL = process.env.VUE_APP_API_URL || "http://localhost:4000";


export const useSearchStore = defineStore("search", {
  state: () => ({
    doctors: [] as Doctor[],
    query: ''
  }),
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
  },
  actions: {
    async searchDoctors(query) {
      return axios
        .get(`${baseURL}/search/${query}`)
        .then((response) => {
          this.doctors = response.data;

          return response.data;
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    },
  },
});

