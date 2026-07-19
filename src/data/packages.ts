import type { Package, PostProductionService, StudioRentalZone } from "@/types";

export const packages: Package[] = [
  {
    title: "Basic Package",
    description: "Best for Individual Content Creators",
    price: "৳4,500",
    features: [
      "1 Hour Studio Session",
      "1 Camera Setup",
      "Sony FX30 / Sony A7III (4K Recording)",
      "Rode Professional Audio System",
      "High-Quality Lighting Setup",
      "Air Conditioning & High-Speed Wi-Fi",
      "Full Technical Support",
    ],
    icon: "/price/1.webp",
  },
  {
    title: "Standard Package",
    description: "Best for YouTubers & Promotional Content",
    price: "৳6,500",
    features: [
      "1 Hour Studio Session",
      "3 Camera Setup",
      "Sony FX30 / Sony A7III (4K Recording)",
      "Rode Podcast Microphones",
      "Professional Lighting Setup",
      "Air Conditioning & High-Speed Wi-Fi",
      "Full Technical Support",
      "Changing Area / Makeup Room",
      "Waiting Room Access",
    ],
    icon: "/price/2.webp",
  },
  {
    title: "Premium Package",
    description: "Best for Professional Podcasters & YouTubers",
    price: "৳9,500",
    features: [
      "2 Hours Studio Session",
      "3 Camera Setup",
      "Sony FX30 / Sony A7III (4K Recording)",
      "Rode Pro Audio System",
      "Premium Lighting Setup",
      "Air Conditioning & High-Speed Wi-Fi",
      "Full Technical Support",
      "Changing Area / Makeup Room",
      "Waiting Room Access",
      "Tea Room Access",
      "Complimentary Tea / Coffee",
    ],
    popular: true,
    icon: "/price/3.webp",
  },
  {
    title: "Day Long Package 1",
    description: "Best for Professional Productions (6h)",
    price: "৳25,000",
    features: [
      "6 Hours Studio Session",
      "3 Camera Setup",
      "Sony FX30 / Sony A7III (4K Recording)",
      "Rode Pro Audio System",
      "Professional Lighting Setup",
      "Full Technical Support",
      "Changing Area / Makeup Room",
      "Waiting Room Access",
      "Full Studio Floor Access",
    ],
    icon: "/price/4.webp",
  },
  {
    title: "Day Long Package 2 (Full Day)",
    description: "Best for Professional Productions (10h)",
    price: "৳35,000",
    features: [
      "10 Hours Studio Session",
      "3 Camera Setup",
      "Sony FX30 / Sony A7III (4K Recording)",
      "Rode Pro Audio System",
      "Professional Lighting Setup",
      "Full Technical Support",
      "Changing Area / Makeup Room",
      "Waiting Room Access",
      "Full Studio Floor Access",
    ],
    icon: "/price/4.webp",
  },
];

export const singerPackages: (Package & { note?: string })[] = [
  {
    title: "Singer Performance Package – 1",
    description: "Available Spaces: Podcast Floor, Studio Floor, Common Space",
    price: "৳3,500",
    features: [
      "Access to Any Available Space (Subject to Availability)",
      "Basic Lighting Setup",
      "AC & Wi-Fi",
      "Furniture & Props Usage",
    ],
    icon: "/price/1.webp",
    note: "Camera, pattern lights, and additional lighting power charges are not included and will be charged separately.",
  },
  {
    title: "Singer Performance Package – 2",
    description: "Available Spaces: Podcast Floor, Studio Floor, Common Space",
    price: "৳6,500",
    features: [
      "Access to Any Available Space (Subject to Availability)",
      "Professional Studio Lighting Setup",
      "28 Pattern Lights",
      "Makeup Room Access",
      "AC & Wi-Fi",
      "Furniture & Props Usage",
    ],
    icon: "/price/2.webp",
    note: "Camera and additional lighting power charges are not included and will be charged separately.",
  },
  {
    title: "Singer Performance Package – 3",
    description: "Available Spaces: Podcast Floor, Studio Floor, Common Space",
    price: "৳25,000",
    features: [
      "Access to Any Available Space (Subject to Availability)",
      "Professional Studio Lighting Setup",
      "28 Pattern Lights",
      "Makeup Room Access",
      "AC & Wi-Fi",
      "Furniture & Props Usage",
      "Day-Long Package: 10 Hours included",
    ],
    icon: "/price/3.webp",
    note: "Camera and additional lighting power charges are not included and will be charged separately.",
  },
];

export const postProductionServices: PostProductionService[] = [
  {
    title: "Podcast Editing",
    description: "Professional editing for podcasts, interviews, talk shows, and discussions.",
    startingPrice: "৳5,000",
    tiers: [
      { duration: "Up to 30 Minutes", price: "৳5,000" },
      { duration: "30–60 Minutes", price: "৳8,000" },
    ],
    includes: [
      "Audio Cleanup",
      "Noise Reduction",
      "Color Correction",
      "Intro & Outro Integration",
      "One Revision",
    ],
  },
  {
    title: "Content Editing",
    description: "Perfect for YouTube videos, promotional content, and social media productions.",
    startingPrice: "৳2,500",
    tiers: [
      { duration: "Basic (Up to 5 Minutes)", price: "৳2,500" },
      { duration: "Mid (Up to 10 Minutes)", price: "৳5,000" },
    ],
    includes: [
      "Professional Editing",
      "Motion Graphics",
      "Color Correction",
      "Copyright-Free Music & Footage",
      "One Revision",
    ],
  },
  {
    title: "Reels Editing",
    description:
      "High-engagement short-form content optimized for Facebook, Instagram, TikTok, and YouTube Shorts.",
    startingPrice: "৳1,500",
    tiers: [
      { duration: "Basic Reels", price: "৳1,500" },
      { duration: "Mid Reels", price: "৳2,500" },
      { duration: "Advanced Reels", price: "৳3,500" },
    ],
    includes: [
      "Dynamic Captions",
      "Trendy Transitions",
      "Motion Graphics",
      "Copyright-Free Music",
      "One Revision",
    ],
  },
];

export const studioRentalZones: StudioRentalZone[] = [
  {
    title: "Zone 1 – Podcast Floor",
    size: "300 Square Feet",
    description:
      "Perfect for podcasts, interviews, talk shows, product videos, and content creation.",
    tiers: [
      {
        name: "Basic (1 Hour)",
        price: "৳3,500",
        features: ["Studio Space", "AC & Wi-Fi", "Only Basic Light", "Furniture & Props Usage"],
      },
      {
        name: "Standard (2 Hours)",
        price: "৳5,000",
        features: [
          "Studio Space",
          "AC & Wi-Fi",
          "Only Basic Light",
          "Changing Area / Makeup Room",
          "Waiting Room Access",
          "Furniture & Props Usage",
        ],
      },
      {
        name: "Premium (6 Hours)",
        price: "৳12,000",
        features: [
          "Studio Space",
          "Professional Lighting Setup",
          "AC & Wi-Fi",
          "Changing Area / Makeup Room",
          "Waiting Room Access",
          "Common Space Shooting Access",
          "Tea Room Access",
          "Complimentary Tea / Coffee",
          "Furniture & Props Usage",
        ],
      },
      {
        name: "Day-Long Pack (10 Hours)",
        price: "৳18,000",
        features: ["10 Hours Studio Rental", "Includes All Premium Facilities & Amenities"],
      },
    ],
    note: "Extra Lights, cameras, and equipment available at affordable rates outside the package.",
  },
  {
    title: "Zone 2 – Photo Floor",
    size: "240 Square Feet",
    description:
      "Ideal for photography, fashion shoots, product photography, reels, and commercial productions.",
    tiers: [
      {
        name: "Basic (1 Hour)",
        price: "৳2,000",
        features: ["Studio Space", "Only Basic Light", "AC & Wi-Fi"],
      },
      {
        name: "Standard (2 Hours)",
        price: "৳3,500",
        features: [
          "Studio Space",
          "AC & Wi-Fi",
          "Changing Area / Makeup Room",
          "Waiting Room Access",
          "Furniture & Props Usage",
        ],
      },
      {
        name: "Premium (6 Hours)",
        price: "৳10,000",
        features: [
          "Studio Space",
          "AC & Wi-Fi",
          "Professional Lighting Setup",
          "Changing Area / Makeup Room",
          "Waiting Room Access",
          "Common Space Shooting Access",
          "Tea Room Access",
          "Complimentary Tea / Coffee",
          "Furniture & Props Usage",
        ],
      },
      {
        name: "Day-Long Pack (10 Hours)",
        price: "৳15,000",
        features: ["10 Hours Studio Rental", "Includes All Premium Facilities & Amenities"],
      },
    ],
    note: "Extra Lights, cameras, and equipment available at affordable rates outside the package.",
  },
];
