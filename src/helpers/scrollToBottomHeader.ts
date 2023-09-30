import { HEIGHT_HEADER } from "../constants";

export const scrollToBottomHeader = () => {
  window.scrollTo({
    top: HEIGHT_HEADER,
    behavior: "instant",
  });
};
