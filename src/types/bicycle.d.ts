type ImageType = {
  color: String;
  image: String;
};

type BicycleType = {
  _id?: String;
  fullName: String;
  category: String;
  novelty: Boolean;
  manufacturer: String;
  article: String;
  image: ImageTypes[];
  availability: Boolean;
  price: Number;
  priceSale: Number;
  size: String[];
  color: String[];
  description: String;
  year: Number;
  diameter: String;
  material: String;
  tires?: String;
  frame?: String;
  saddle?: String;
  seatpost?: String;
  fork?: String;
  chain?: String;
  brake?: String;
  speed?: String;
  garantine?: String;
  user?: any;
};
