export type NavLink = {
  label: string;
  href: string;
};

export type ServiceInclude = {
  title: string;
  description: string;
  iconName: string;
};

export type Service = {
  title: string;
  description: string;
  slug: string;
  icon: string;
  longDescription: string;
  includes: ServiceInclude[];
};

export type Package = {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon?: string;
};

export type PostProductionTier = {
  duration: string;
  price: string;
};

export type PostProductionService = {
  title: string;
  description: string;
  startingPrice: string;
  tiers: PostProductionTier[];
  includes: string[];
};

export type StudioRentalTier = {
  name: string;
  price: string;
  features: string[];
};

export type StudioRentalZone = {
  title: string;
  size: string;
  description: string;
  tiers: StudioRentalTier[];
  note?: string;
};
