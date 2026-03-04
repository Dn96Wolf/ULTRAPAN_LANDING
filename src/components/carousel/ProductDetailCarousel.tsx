"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./ProductDetailCarousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

type ImageCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
  intervalMs?: number;
};

export default function ProductDetailCarouse({ images }: ImageCarouselProps) {
  const swiperReference = useRef<any>(null);

  if (!images?.length) return null;

  return (
    <div className={`${styles.wrapper} ${styles.swiperLayout}`}>
      <Swiper
        modules={[EffectCoverflow, Navigation, A11y]}
        onSwiper={(swiperElement) => {
          swiperReference.current = swiperElement;
        }}
        effect="coverflow"
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          630: {
            slidesPerView: 2,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1366: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1444: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        className="mySwiper"
        navigation={{
          enabled: true,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={styles.image}
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
