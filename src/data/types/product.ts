
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  brand: string;
  specs: string[];
  inStock: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  discount?: number;
  originalPrice?: number;
}

export type ProductCategory = 
  | "gpus" 
  | "storage" 
  | "keyboards" 
  | "headsets" 
  | "monitors" 
  | "processors" 
  | "power_supplies"
  | "cases"
  | "cooling"
  | "mice"
  | "accessories"
  | "streaming"
  | "motherboards"
  | "chairs"
  | "laptops"
  | "audio";
