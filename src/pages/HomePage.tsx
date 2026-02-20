"use client";
import styles from "../app/page.module.css";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { HOME_SLIDES, PRODUCT_LIST } from "@/utils/constants";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import ButtonComponent from "../components/buttons/Button";
import { createSlug } from "@/utils/helpers";
import { t } from "@/i18n";

const intervalMs = 5000;
const fadeMs = 2000;
const imagesFade = HOME_SLIDES;
const productos = PRODUCT_LIST;

const breakpoint = 640;

export default function HomePage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState<number>(0);

  function onHandlingClick(id: string) {
    if (!id) return;

    return router.push(`/${id}`);
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % imagesFade.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  function handlingProduct(id: number) {
    const nameProduct = productos.find((e) => e.id === id);

    console.log("??", nameProduct);

    if (!nameProduct) return;

    return router.push(`/productos/${createSlug(nameProduct.title)}`);
  }

  return (
    <main className={styles.page}>
      <section
        className={` ${styles.firstScreen} `}
        style={{ ["--fade-ms" as any]: `${fadeMs}ms` }}
      >
        {imagesFade.length && (
          <>
            {imagesFade.map((element, index) => (
              <div
                key={index}
                className={` ${styles.craftLayer} ${active === index ? styles.show : styles.hide}`}
                style={{
                  backgroundImage: `url(${!isMobile ? imagesFade[index].backgroundImage : imagesFade[index].backgroundImageResponsive})`,
                }}
                aria-hidden="true"
              >
                <div className={styles.mainTitleContainer}>
                  <div
                    className={`${styles.mainTitleRibbon} ${imagesFade[index].ribbonClass}`}
                  >
                    <h1 className={`text-color-white ${styles.mainTitle}`}>
                      {element.title}
                    </h1>
                    <p className={`text-color-white  ${styles.mainSubtitle}`}>
                      {element.subtitle}
                    </p>

                    {imagesFade[index].action && (
                      <div className={styles.buttonStyle}>
                        <ButtonComponent
                          colorPalette={imagesFade[index].colorPalette}
                          title={"Conoce más"}
                          onAction={() =>
                            handlingProduct(imagesFade[index].idProduct)
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </section>

      <section className={styles.categoriesStyles}>
        <h2 className={`${styles.categoriesTitle}  text-center`}>
          Soluciones formuladas para procesos artesanales e industriales
        </h2>
      </section>

      <section className={styles.secondScreen} id="typeIndustrySection">
        <div className={styles.firstLayer}>
          <div className={styles.industrialSection}></div>

          <div className={styles.craftSection}></div>
        </div>

        <div className={styles.thirdLayer}>
          <div
            className={styles.industrialOverlay}
            onClick={() => onHandlingClick("industrial")}
          >
            <div className={styles.industrialText}>
              <h2 className="text-color-white text-center">
                {t("main.industrial")}
              </h2>

              <p className="text-color-white text-center ">
                {t("main.industrialSubtitle")}
              </p>
            </div>
          </div>

          <div
            className={styles.craftOverlay}
            onClick={() => onHandlingClick("artesanal")}
          >
            <div className={styles.craftText}>
              <h2 className="text-color-white text-center">
                {t("main.craftMaker")}
              </h2>

              <p
                className={`${styles.subTextSection} text-color-white text-center`}
              >
                {t("main.craftMakerSubtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoriesStyles}>
        <h2 className={`${styles.categoriesTitle}  text-center`}>
          {t("main.knowAboutUs")}
        </h2>
      </section>

      <div className={styles.secondContent}>
        <ProductCarousel title={""} elementos={productos} intervalMs={5000} />
      </div>
    </main>
  );
}
