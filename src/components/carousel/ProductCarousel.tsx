"use client";

import Image from "next/image";
import styles from "./ProductCarousel.module.css";

import ButtonComponent from "../buttons/Button";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { useRouter } from "next/navigation";

// Swiper styles (globales del paquete)
import "swiper/css";
import "swiper/css/pagination";

export interface CarouselItem {
  id: number;
  title: string;
  descripcion: string;
  presentation: string;
  path: string;
  image: string; // URL o ruta en /public
}

type ProductCarouselProps = {
  title: string;
  elementos: CarouselItem[];
  intervalMs?: number; // default 1000
  ctaLabel?: string; // default "Ver más"
};

export default function ProductCarousel({
  title,
  elementos,
  intervalMs = 1000,
  ctaLabel = "Ver más",
}: ProductCarouselProps) {
  const router = useRouter();

  if (!elementos?.length) return null;

  function onHandlingClick(id: number) {

    if (!id) return;

    return router.push(`/productos/${id}`);
  }

  return (
    <section className={styles.wrapper} aria-label={title}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <Swiper
          className={styles.swiper}
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={16}
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
          {elementos.map((item, idx) => (
            <SwiperSlide key={`${item.title}-${idx}`} className={styles.slide}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
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
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardSubtitle}>{item.descripcion}</p>

                  <ButtonComponent
                    title={ctaLabel}
                    onAction={() => onHandlingClick(item.id)}
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
