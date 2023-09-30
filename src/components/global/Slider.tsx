import React, { ReactNode } from "react";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SliderProps {
  children: ReactNode;
  swiperProps: SwiperProps;
}

export const Slider: React.FC<SliderProps> = ({ children, swiperProps }) => {
  const swiperRef = React.useRef<SwiperRef>(null);

  const nextElementSwiper = () => {
    if (!swiperRef.current) return false;
    swiperRef.current?.swiper?.slideNext();
  };
  const prevElementSwiper = () => {
    if (!swiperRef.current) return false;
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div className="slider">
      <button>
        <IoIosArrowDropleftCircle
          className="slider__left"
          onClick={prevElementSwiper}
        />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        ref={swiperRef}
        {...swiperProps}
      >
        {children}
      </Swiper>
      <button>
        <IoIosArrowDroprightCircle
          className="slider__right"
          onClick={nextElementSwiper}
        />
      </button>
    </div>
  );
};
