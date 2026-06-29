import type { Package } from "@/types";

export const packages: Package[] = [
  {
    title: "Basic Setup",
    description: "Perfect for solo creators starting out.",
    price: "Starting from ৳____",
    features: ["1 hour session", "1 camera angle", "Basic audio setup", "Raw files delivered"],
  },
  {
    title: "Standard Session",
    description: "Great for regular podcast episodes.",
    price: "Starting from ৳____",
    features: [
      "3 hour session",
      "2 camera angles",
      "Pro audio setup",
      "Basic editing",
      "Raw + edited files",
    ],
    popular: true,
  },
  {
    title: "Premium Package",
    description: "Full production for serious creators.",
    price: "Starting from ৳____",
    features: [
      "Half-day session",
      "Multi-camera setup",
      "Pro audio + lighting",
      "Full editing",
      "Color grading",
    ],
  },
  {
    title: "Full-Day Studio",
    description: "Complete studio access for the entire day.",
    price: "Starting from ৳____",
    features: [
      "Full day access",
      "All equipment included",
      "Dedicated crew",
      "Full post-production",
      "Priority support",
    ],
  },
];
