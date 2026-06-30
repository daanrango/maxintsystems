"use client";

import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type CarouselItem = {
  id: number;
  content: ReactNode;
};

type CarouselProps = {
  title?: string;
  description?: string;
  items: CarouselItem[];
  slidesPerView?: number;
  autoplay?: boolean;
  delay?: number;
  spaceBetween?: number;
};

export function Carousel({
  title,
  description,
  items,
  slidesPerView = 5,
  autoplay = true,
  delay = 2500,
  spaceBetween = 30,
}: CarouselProps) {
  return (
    <section className="carousel-section pt-20">
      <div className="w-4/5 mx-auto">
        {(title || description) && (
          <div className="carousel-header mb-10">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
            )}
            {description && <p>{description}</p>}
          </div>
        )}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop={items.length > slidesPerView}
          autoplay={
            autoplay
              ? {
                  delay,
                  disableOnInteraction: false,
                }
              : false
          }
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-200 carousel-client-card">
                {item.content}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
