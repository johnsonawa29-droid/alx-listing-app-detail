// constants/index.ts
import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Cozy Beach House",
    description: "A beautiful house near the beach with amazing views.",
    rating: 4,
    price: 120,
    image: "/images/beach-house.jpg",
    images: [
      "/images/beach1.jpg",
      "/images/beach2.jpg",
      "/images/beach3.jpg",
      "/images/beach4.jpg",
    ],
    category: ["WiFi", "Air conditioning", "Kitchen", "Free parking"],
    address: {
      city: "Lagos",
      country: "Nigeria",
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/user1.jpg",
        rating: 5,
        comment: "Amazing stay! The host was super friendly.",
      },
      {
        name: "Jane Smith",
        avatar: "/images/user2.jpg",
        rating: 4,
        comment: "Loved the location, very close to the beach.",
      },
    ],
    host: {
      name: "Michael Johnson",
      about: "Superhost with 5 years of experience hosting guests.",
      avatar: "/images/host.jpg",
    },
  },
];
