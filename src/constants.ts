export const brandBicycles = [
  "Bergamont",
  "Bianchi",
  "BMC",
  "Boardman",
  "Brompton",
  "Cannondale",
  "Cinelli",
  "Cube",
  "Giant",
  "Merida",
  "Marin",
  "Specialized",
  "Scott",
  "Orbea",
  "Tifosi",
  //... can add yet
];

export const categoryBicycles = [
  "BMX",
  "Cyclocross",
  "Electric",
  "Folding",
  "Hybrid",
  "Jump",
  "Kids",
  "MTB",
  "Road",
  "Touring",
  "New",
  //... can add yet
];

export const colorBicycles = [
  "black",
  "red",
  "yellow",
  "orange",
  "blue",
  "green",
  "pink",
  "gray",
  "white",
  "beige",
  //... can add yet
];

export const ROUTES = {
  HOME: "/",
  NOT_FOUND: "*",
};

export const sizeBicycles = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

export const COUNT_PER_PAGE = 9;

const arrFakeValue: string[] = [
  "Part 1",
  "Part 2",
  "Part 3",
  "Part 4",
  "Part 5",
  "Part 6",
];

export const listItemDropdown: {
  title: string;
  id: ActiveOType;
  listOption: string[];
}[] = [
  {
    title: "Bicycles",
    id: "c1",
    listOption: categoryBicycles,
  },
  {
    title: "Parts",
    id: "c2",
    listOption: arrFakeValue,
  },
  {
    title: "Equipment",
    id: "c3",
    listOption: arrFakeValue,
  },
  {
    title: "Accessories",
    id: "c4",
    listOption: arrFakeValue,
  },
  {
    title: "Bike Trainer",
    id: "c5",
    listOption: arrFakeValue,
  },
];

export const listInfoBox = [
  "About us",
  "Workshop",
  "Storage",
  "Warranty",
  "User Agreement",
  "Delivery and Payment",
  "Blog",
  "Contacts",
];
