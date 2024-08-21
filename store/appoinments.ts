import { defineStore } from "pinia";
import axios from "axios";
import { type Appointment } from "~/utils/types/appointment";

//TODO: search for a better way to handle this, Jonthan
const baseURL = process.env.VUE_APP_API_URL || "http://localhost:4000";

export const useAppointmentStore = defineStore("appoinments", {
  state: () => ({ appointments: [] as Appointment[] }),
  getters: {
    getAppointments(state) {
      return state.appointments;
    },
  },
  actions: {
    async fetchAllAppointments() {
      return axios
        .get(`${baseURL}/appointments`)
        .then((response) => {
          this.appointments = response.data;

          return response.data;
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    },
  },
});
