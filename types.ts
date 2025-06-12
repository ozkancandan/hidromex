export interface NavItem {
  name: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features?: string[];
}

export interface Project {
  id: string;
  name: string;
  location: string;
  capacity?: string;
  imageUrl: string;
  description?: string;
}

export interface testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
}
