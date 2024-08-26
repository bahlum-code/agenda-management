import { defineStore } from "pinia";
import axios from "axios";
//import { type User as Doctor } from "@/utils/types/user";
import { type Specialty } from "@/utils/types/specialty.js";
//import { useRuntimeConfig } from "#app";

//TODO: search for a better way to handle this, Jonthan
//const baseURL = process.env.VUE_APP_API_URL || "http://localhost:4000";



export const useSpecialtyStore = defineStore("specialty", {
  state: () => ({ 
    apiUrl:'',
    specialties: [] as Specialty[]
   }),
  getters: {
    getEspecialties(state) {
      return state.specialties;
    },
  },
  actions: {
    async fetchAllSpecialities() {
      const config = useRuntimeConfig()    
      return axios
        .get(`${config.public.apiUrl}/specialties`)
        .then((response) => {
          this.specialties = response.data;
          console.log("response", response.data);
          
          return response.data;
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    },
  },
});
