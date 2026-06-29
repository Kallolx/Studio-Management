export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Package = {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
};
