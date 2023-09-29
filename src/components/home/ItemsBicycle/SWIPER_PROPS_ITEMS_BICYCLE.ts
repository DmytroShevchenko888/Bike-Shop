import {
  BREAKPOINT_MD,
  BREAKPOINT_XL,
  BREAKPOINT_XXL,
} from "../../../constants";

export const SWIPER_PROPS_ITEMS_BICYCLE = {
  spaceBetween: 40,
  grabCursor: true,
  slidesPerView: 3,
  breakpoints: {
    [BREAKPOINT_XXL]: {
      slidesPerView: 3,
    },
    [BREAKPOINT_XL]: {
      slidesPerView: 2,
    },
    [BREAKPOINT_MD]: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};
