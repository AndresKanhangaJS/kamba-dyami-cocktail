export type ReservationStatus = "pending" | "confirmed" | "cancelled";

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  location: string;
  guests: number;
  occasion?: string;
  special_requests?: string;
  status: ReservationStatus;
}
