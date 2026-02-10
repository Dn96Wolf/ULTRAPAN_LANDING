"use client";

import Image from "next/image";
import styles from "./ProductCarousel.module.css";

import ButtonComponent from "../buttons/Button";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Pagination, A11y } from "swiper/modules";

// import { useRouter } from "next/navigation";

// Swiper styles (globales del paquete)
import "swiper/css";
import "swiper/css/pagination";
import { ProductDetailInterface } from "@/interfaces/Product";

import main1 from "@/assets/images/pan-1.png";

export interface CarouselItem {
  id: number;
  title: string;
  descripcion: string;
  presentation: string;
  path: string;
  image: any; // URL o ruta en /public
}

type ProductCarouselProps = {
  title: string;
  elementos: ProductDetailInterface[];
  category: "INDUSTRIAL" | "ARTESANAL";
  intervalMs?: number; // default 1000
  ctaLabel?: string; // default "Ver más"
  onActionElement?: any;
};

export default function ProductCarousel({
  title,
  elementos,
  intervalMs = 1000,
  category = "INDUSTRIAL",
  ctaLabel = "Ver más",
  onActionElement,
}: ProductCarouselProps) {
  const filteredProducts = elementos.filter((e) => e.category === category);

  // const router = useRouter();

  if (!elementos?.length) return null;

  // function onHandlingClick(id: number) {
  //   if (!id) return;

  //   return router.push(`/productos/${id}`);
  // }

  return (
    <section className={styles.wrapper} aria-label={title}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <Swiper
          className={styles.swiper}
          modules={[Autoplay, Pagination, A11y]}
          freeMode={{
            enabled: true,
            sticky: true,
          }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            630: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 5,
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
            <SwiperSlide key={`${item.title}-${idx}`} className={styles.slide}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={main1}
                    alt={item.title}
                    fill
                    className={styles.image}
                    sizes="(min-width: 640px) 100vw, 520px"
                    priority={idx === 0}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p
                    className={`${styles.cardSubtitle} text-center`}
                  >
                    {item.description}
                  </p>

                  {/* <ButtonComponent
                    title={ctaLabel}
                    onAction={() => onHandlingClick(item.id)}
                  /> */}

                  <ButtonComponent
                    title={ctaLabel}
                    onAction={() => onActionElement(item)}
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
