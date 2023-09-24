import React from "react";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { BREAKPOINT_MD, BREAKPOINT_XL, BREAKPOINT_XXL } from "../../constants";

import { ItemBike } from "./ItemBike";

interface SliderProps {
  data: BicycleType[];
  slidesPerView: 3 | 4 | 5;
  spaceBetween: number;
}

export const Slider: React.FC<SliderProps> = ({
  data,
  slidesPerView,
  spaceBetween,
}) => {
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
        spaceBetween={spaceBetween}
        grabCursor
        slidesPerView={data.length < 4 ? data.length : slidesPerView}
        ref={swiperRef}
        breakpoints={{
          [BREAKPOINT_XXL]: {
            slidesPerView: data.length < 4 ? data.length : slidesPerView,
          },
          [BREAKPOINT_XL]: {
            slidesPerView: data.length < 4 ? data.length : 3,
          },
          [BREAKPOINT_MD]: {
            slidesPerView: data.length < 4 ? data.length : 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((obj) => (
          <SwiperSlide key={obj._id}>
            <ItemBike
              key={obj._id}
              availability={obj.availability}
              fullName={obj.fullName}
              image={obj.image}
              price={obj.price}
              priceSale={obj.priceSale}
              id={obj._id}
            />
          </SwiperSlide>
        ))}
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
