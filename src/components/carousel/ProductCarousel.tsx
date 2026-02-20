"use client";

import Image from "next/image";
import styles from "./ProductCarousel.module.css";

import ButtonComponent from "../buttons/Button";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Pagination, A11y } from "swiper/modules";

// Swiper styles (globales del paquete)
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import { createSlug } from "@/utils/helpers";
import { ProductCarouselProps } from "@/interfaces/Carousel.interface";

import { t } from "@/i18n";
import { useRef } from "react";

export default function ProductCarousel({
  title,
  elementos,
  intervalMs = 1000,
  category,
}: ProductCarouselProps) {
  const swiperRef = useRef<any>(null);

  let filteredProducts = elementos;

  if (category) {
    filteredProducts = elementos.filter((e) => e.category === category);
  }

  const router = useRouter();

  if (!elementos?.length) return null;

  function onHandlingClick(name: string) {
    if (!name) return;

    swiperRef.current?.autoplay?.stop();

    router.push(`/productos/${createSlug(name)}`);
  }

  return (
    <section className={styles.wrapper} aria-label={title}>
      <div className={styles.inner}>
        <div className={` ${styles.carouselWrap}`}>
          <Swiper
            className={styles.swiperLayout}
            modules={[Autoplay, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              630: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={elementos.length > 1}
            autoplay={
              elementos.length > 1
                ? { delay: intervalMs, disableOnInteraction: false }
                : false
            }
            pagination={{
              clickable: true,
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bulletActive,
            }}
            a11y={{
              enabled: true,
            }}
          >
            {filteredProducts.map((item, idx) => (
              <SwiperSlide
                key={`${item.title}-${idx}`}
                className={styles.slide}
              >
                <article className={styles.card}>
                  <div className={styles.imageWrap}>
                    <div className={styles.imageOverlay}></div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={styles.image}
                      sizes="(min-width: 640px) 100vw, 520px"
                      priority={idx === 0}
                    />
                  </div>

                  <div className={styles.cardBody}>
                    {item.colorPalette === "BROWN" && (
                      <h3 className={`${styles.cardTitle} ${styles.brown}`}>
                        {item.title}
                      </h3>
                    )}

                    {item.colorPalette === "MUSTARD" && (
                      <h3 className={`${styles.cardTitle} ${styles.mustard}`}>
                        {item.title}
                      </h3>
                    )}

                    {item.colorPalette === "BLUE" && (
                      <h3 className={`${styles.cardTitle} ${styles.blue}`}>
                        {item.title}
                      </h3>
                    )}

                    {item.colorPalette === "SOFTBLUE" && (
                      <h3 className={`${styles.cardTitle} ${styles.softBlue}`}>
                        {item.title}
                      </h3>
                    )}

                    <p className={`${styles.cardSubtitle} text-center`}>
                      {item.description}
                    </p>

                    <div className={styles.ctaWrap}>
                      <ButtonComponent
                        title={t(`btn.knowMore`)}
                        colorPalette={item.colorPalette}
                        onAction={() => onHandlingClick(item.route)}
                      />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
