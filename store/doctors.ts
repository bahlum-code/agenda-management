import { defineStore } from "pinia";
import axios from "axios";
import { type User as Doctor } from "@/utils/types/user";
//import { useRuntimeConfig } from "#app";

//TODO: search for a better way to handle this, Jonthan
//const baseURL = process.env.VUE_APP_API_URL || "http://localhost:4000";



export const useDoctorsStore = defineStore("doctors", {
  state: () => ({ 
    apiUrl:'',
    doctors: [] as Doctor[]
   }),
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
  },
  actions: {
    async fetcAllhDoctors() {
      const config = useRuntimeConfig()    
      return axios
        .get(`${config.public.apiUrl}/doctors`)
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
