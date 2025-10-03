// interfaces/index.ts

export interface Review {
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
}

export interface Host {
  name: string;
  about: string;
  avatar?: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface PropertyProps {
  name: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  images?: string[];
  category: string[]; // amenities or services
  address: Address;
  reviews?: Review[];
  host?: Host;
}
