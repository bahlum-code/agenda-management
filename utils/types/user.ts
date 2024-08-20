export interface User {
  clinicAddress: string;
  createdAt: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  licenseNumber: string;
  password: string;
  phoneNumber: string;
  role: "Doctor" | "Nurse" | "Admin"; // assuming role could be one of several values
  specialty: string;
  updatedAt: string;
}
