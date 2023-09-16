import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { useAppSelector } from "../../redux/hook";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import SkeketonItemBicycle from "./ItemBicycle/SkeletonItemBicycle";

interface CorouselProps {
  data: BicycleType[];
  children: React.ReactNode | any;
}

const Carousel: React.FC<CorouselProps> = ({ data, children }) => {
  const breakpoint_xxl = useMediaQuery("(max-width: 1290px)");
  const breakpoint_xl = useMediaQuery("(max-width: 1024px)");
  const breakpoint_sm = useMediaQuery("(max-width: 576px)");

  const PAGE_WIDTH = (): number => {
    if (breakpoint_xxl && !breakpoint_xl) return 880;
    if (breakpoint_xxl && breakpoint_xl && !breakpoint_sm) return 440;
    if (breakpoint_xxl && breakpoint_xl && breakpoint_sm) {
      return window.innerWidth;
    }
    return 1320;
  };

  const COUNT_BICYCLES_ON_PAGE = (): 1 | 2 | 3 => {
    if (breakpoint_xxl && !breakpoint_xl) return 2;
    if (breakpoint_xxl && breakpoint_xl) return 1;
    return 3;
  };

  const [pages, setPages] = React.useState([]);
  const [offset, setOffset] = React.useState<number>(0);

  const maxOffset = -(PAGE_WIDTH() * (pages.length - 1));
  const { isLoaded } = useAppSelector((state) => state.bicycles.bicycles);

  React.useEffect(() => {
    setPages(
      React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [data, breakpoint_xl]);

  const leftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH();
      return Math.min(newOffset, 0);
    });
  };
  const rightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH();
      return Math.max(newOffset, maxOffset / COUNT_BICYCLES_ON_PAGE());
    });
  };

  const showLoader = [...new Array(COUNT_BICYCLES_ON_PAGE())].map((_, id) => (
    <SkeketonItemBicycle key={id} />
  ));

  return (
    <div className="carousel">
      {offset !== 0 && (
        <IoIosArrowDropleftCircle
          className="carousel__arrow-left"
          onClick={leftClick}
        />
      )}
      <div className="carousel__window">
        <div
          className="carousel__all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {isLoaded ? pages : showLoader}
        </div>
      </div>
      {offset !== maxOffset / COUNT_BICYCLES_ON_PAGE() && (
        <IoIosArrowDroprightCircle
          className="carousel__arrow-right"
          onClick={rightClick}
        />
      )}
    </div>
  );
};

export default Carousel;
