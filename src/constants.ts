import { BreadcrumbsItem } from "./components/global/Breadcrumbs";
import { getImageUrl } from "./helpers/getImageUrl";

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
  "United",
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

export const navCategories = [
  {
    category: "bicycles",
    option: [
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
    ],
  },
  {
    category: "parts",
    option: ["part-1", "part-2", "part-3"],
  },
  {
    category: "equipment",
    option: ["equipment-1", "equipment-2", "equipment-3"],
  },
  {
    category: "accessories",
    option: ["accessories-1", "accessories-2", "accessories-3"],
  },
  {
    category: "bike trainer",
    option: ["trainer-1", "trainer-2", "trainer-3"],
  },
];

export const colorBicycles: ColorBicyclesType = [
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
  "brown",
  "olive",
  "violet",
];

export const materialBicycles = ["aluminum", "carbon", "steel"];

export const ROUTES = {
  HOME: "/",
  NOT_FOUND: "*",
  ADD_BICYCLE: "/add-bicycle",
  BICYCLE: "/bicycle/:id",
  VIEW_BICYCLE_BY_ID: (id: string) => {
    return `/bicycle/${id}`;
  },
};

export const sizeBicycles: SizeBicyclesType = [
  "XXS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
];

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

export const mountainBicyclesSection = [
  {
    title: "Frame",
    subtitle:
      "It is a long established fact that a reader will be distracted by the readable content of",
    icon: getImageUrl("home", "icon-frame.svg"),
  },
  {
    title: "On-board computer",
    subtitle:
      "The point of using lorem ipsum is that it has a more-or-less normal distribution of letters",
    icon: getImageUrl("home", "icon-computer.svg"),
  },
  {
    title: "Transmission",
    subtitle:
      "Many desktop publishing packages and web page editors now use lorem ipsum as",
    icon: getImageUrl("home", "icon-transmission.svg"),
  },
  {
    title: "Equipment",
    subtitle:
      "Contrary to popular belief, lorem ipsum is not simply random text. It has roots in",
    icon: getImageUrl("home", "icon-equipment.svg"),
  },
];

export const coordinatesMapsDnipro: CoordinatesType = {
  lat: 48.4708749,
  lng: 35.0353394,
};

export const BREADCRUMBS: BreadcrumbsItem[] = [
  {
    name: "main",
    link: ROUTES.HOME,
  },
  {
    name: "bicycles",
    link: "#",
  },

  {
    name: "category",
    showName: (name: string) => {
      return `${name}`;
    },
    link: "#",
  },
  // {
  //   name: "fullName",
  //   showName: (name: string) => {
  //     return `${name}`;
  //   },
  //   link: "#",
  // },
];

export const HEIGHT_HEADER = 110; // site header height
export const CHARS_SHORT_DESCRIPTION = 150; // number of characters to shorten the description

export const BICYCLE_CHARACTERISTIC = [
  {
    key: "color",
    name: "Color",
  },
  {
    key: "year",
    name: "Year",
  },
  {
    key: "category",
    name: "Category",
  },
  {
    key: "diameter",
    name: "Wheel diameter",
  },
  {
    key: "material",
    name: "Frame material",
  },
  {
    key: "size",
    name: "Size",
  },
  {
    key: "manufacturer",
    name: "Manufacturer",
  },
  {
    key: "tires",
    name: "Tires",
  },
  {
    key: "frame",
    name: "Frame",
  },
  {
    key: "seatpost",
    name: "Seat Post",
  },
  {
    key: "saddle",
    name: "Saddle",
  },
  {
    key: "fork",
    name: "Fork",
  },
  {
    key: "brake",
    name: "Brake system",
  },
  {
    key: "chain",
    name: "Chain",
  },
  {
    key: "speed",
    name: "Speed",
  },
  {
    key: "garantine",
    name: "Garantine",
  },
];

export const BREAKPOINT_XXL = 1290;
export const BREAKPOINT_XL = 1024;
export const BREAKPOINT_MD = 767;
export const BREAKPOINT_SM = 576;
