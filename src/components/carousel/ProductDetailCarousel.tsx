"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./ProductDetailCarousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y, EffectCoverflow } from "swiper/modules";

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

export default function ProductDetailCarouse({
  images,
  intervalMs = 5000,
}: ImageCarouselProps) {
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
          1444: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 40,
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

      {/* <Swiper
        modules={[Autoplay, Navigation, A11y]}
        onSwiper={(swiperElement) => {
          swiperReference.current = swiperElement;
        }}
        loop={images.length > 1}
        slidesPerView={1}
        spaceBetween={16}
        autoplay={
          images.length > 1
            ? { delay: intervalMs, disableOnInteraction: false }
            : false
        }
        a11y={{
          enabled: true,
        }}
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
      </Swiper> */}
    </div>
  );
}
