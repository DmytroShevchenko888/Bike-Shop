type ImageType = {
  color: String;
  image: String;
};

type BicycleType = {
  _id?: string;
  fullName: string;
  category: String;
  novelty: boolean;
  manufacturer: string;
  article: string;
  image: ImageTypes[];
  availability: boolean;
  price: number;
  priceSale: number;
  size: string[];
  color: string[];
  description: string;
  year: number;
  diameter: string;
  material: string;
  tires?: string;
  frame?: string;
  saddle?: string;
  seatpost?: string;
  fork?: string;
  chain?: string;
  brake?: string;
  speed?: string;
  garantine?: string;
  user?: any;
  __v?: number;
  updatedAt?: string;
};
