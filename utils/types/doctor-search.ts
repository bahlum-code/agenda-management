import { type User } from "./user";

export interface DoctorSearch extends User {
  doctorBilling: DoctorBilling[];
  doctorAvailability: DoctorAvailability[];
}

interface DoctorBilling {
  totalAmount: string;
}

interface DoctorAvailability {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}
