export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  treatment: string;
  date: string; // ISO date string
  time: string;
  status: BookingStatus;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  duration?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
  infoBlocks?: {
    title: string;
    list?: string[];
    text?: string;
    warning?: boolean;
  }[];
}
