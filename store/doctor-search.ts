import { defineStore } from "pinia";

import fetch from "~/utils/fetch";
import { API_ENDPOINTS as API } from "~/utils/consts";
import { type DoctorSearch } from "@/utils/types/doctor-search";

export const useDoctorSearchStore = defineStore("search", {
  state: () => ({ doctorsSearch: [] as DoctorSearch[] }),
  getters: {
    getDoctorsSearch(state) {
      return state.doctorsSearch;
    },
  },
  actions: {
    async search(query: string) {
      return fetch
        .get(`${API.DOCTOR_SEARCH}/${query}`)
        .then((response) => {
          this.doctorsSearch = response.data;

          return response.data;
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    },
  },
});
