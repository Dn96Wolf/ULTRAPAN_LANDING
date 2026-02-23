"use client";

import styles from "./MainCarousel.module.css";

import Image, { StaticImageData } from "next/image";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Pagination, A11y } from "swiper/modules";

export interface MainCarouselItem {
  image: StaticImageData;
  alt: string; // URL o ruta en /public
}

type MainCarouselProps = {
  elementos: MainCarouselItem[];
  intervalMs?: number; // default 1000
  ctaLabel?: string; // default "Ver más"
};

export function MainCarousel({
  elementos,
  intervalMs = 200,
}: MainCarouselProps) {
  if (!elementos?.length) return null;

  return (
    <section className={styles.wrapper} aria-label={""}>
      <div className={styles.inner}>
        <Swiper
          className={styles.swiper}
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={0}
          loop={elementos.length > 1}
          autoplay={
            elementos.length > 1
              ? { delay: intervalMs, disableOnInteraction: false }
              : false
          }
          a11y={{
            enabled: true,
          }}
        >
          {elementos.map((item, idx) => (
            <SwiperSlide key={`${item.alt}-${idx}`} className={styles.slide}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className={styles.image}
                    sizes="(min-width: 640px) 100vw, 100vh"
                    priority={idx === 0}
                  />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
