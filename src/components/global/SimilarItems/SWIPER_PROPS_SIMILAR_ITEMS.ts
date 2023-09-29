import {
  BREAKPOINT_MD,
  BREAKPOINT_XL,
  BREAKPOINT_XXL,
} from "../../../constants";

export const SWIPER_PROPS_SIMILAR_ITEMS = {
  spaceBetween: 4,
  grabCursor: true,
  slidesPerView: 4,
  breakpoints: {
    [BREAKPOINT_XXL]: {
      slidesPerView: 4,
    },
    [BREAKPOINT_XL]: {
      slidesPerView: 3,
    },
    [BREAKPOINT_MD]: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};
