import apiClient from "./client";

export interface RegisterClinicRequest {
  name: string;
  document: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  password: string;
}

export interface RegisterSpecialistRequest {
  name: string;
  email: string;
  phone?: string;
  crmv: string;
  crmvState: string;
  specialty: string;
  baseCity?: string;
  baseState?: string;
  maxTravelRadiusKm?: number;
  hasOwnEquipment: boolean;
  bio?: string;
  password: string;
}

export interface RegistrationResponse {
  id: string;
  name: string;
  status: string;
}

export async function registerClinic(
  data: RegisterClinicRequest,
): Promise<RegistrationResponse> {
  const response = await apiClient.post<RegistrationResponse>("/clinics", data);
  return response.data;
}

export async function registerSpecialist(
  data: RegisterSpecialistRequest,
): Promise<RegistrationResponse> {
  const response = await apiClient.post<RegistrationResponse>(
    "/specialists",
    data,
  );
  return response.data;
}
