"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MainCarousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { HomeSlide } from "@/interfaces/HomeSlides.interface";
import { useRouter } from "next/navigation";
import ButtonComponent from "../buttons/Button";

type ImageCarouselProps = {
  items: HomeSlide[];
  intervalMs?: number;
};

const breakpoint = 768;

export default function HomeCarousel({
  items,
  intervalMs = 4500,
}: ImageCarouselProps) {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  const swiperReference = useRef<any>(null);

  if (!items?.length) return null;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  function handlingProduct(route: string) {
    return router.push(`/${route}`);
  }

  return (
    <div className={`${styles.wrapper} ${styles.swiperLayout}`}>
      <Swiper
        modules={[Autoplay, Navigation, A11y, EffectFade]}
        onSwiper={(swiperElement) => {
          swiperReference.current = swiperElement;
        }}
        centeredSlides={true}
        loop
        autoplay={{
          delay: intervalMs,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        navigation={true}
      >
        {items.map((element, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div
              key={element.idProduct}
              className={` ${styles.frontPage}`}
              style={{
                backgroundImage: `url(${!isMobile ? element.backgroundImage : ""})`,
              }}
            >
              {/* <div className={styles.overlayContainer}></div> */}
              <div className={styles.slideContent}>
                <div className={styles.infoProductContainer}>
                  {element.subtitle !== "" && (
                    <p className={`text-color-white  ${styles.mainSubtitle2}`}>
                      {element.subtitle}{" "}
                      {element.specialTitle && (
                        <span className={"impact bold"}>
                          {element.specialTitle}
                        </span>
                      )}
                    </p>
                  )}
                  <h1 className={`${styles.mainTitle} impact`}>
                    {element.title}
                  </h1>

                  {element.subtitle2 !== "" && (
                    <p className={`text-color-white  ${styles.mainSubtitle}`}>
                      {element.subtitle2}
                    </p>
                  )}
                </div>

                {isMobile && (
                  <div
                    className={styles.mobileImageContainer}
                    style={{
                      backgroundImage: `url(${element.backgroundImageResponsive})`,
                    }}
                  ></div>
                )}

                <div className={styles.actionButtonContainers}>
                  {element.action && (
                    <div className={styles.buttonStyle}>
                      <ButtonComponent
                        colorPalette={element.colorPalette}
                        title={element.primaryButtonText}
                        onAction={() => handlingProduct(element.primaryRoute)}
                      />
                    </div>
                  )}

                  {element.secondAction && (
                    <div className={styles.buttonStyle}>
                      <ButtonComponent
                        colorPalette={element.secondColorPalette}
                        title={element.secondButtonText}
                        onAction={() => handlingProduct(element.secondRoute)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
