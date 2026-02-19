"use client";
import styles from "../app/page.module.css";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { HOME_SLIDES, PRODUCT_LIST } from "@/utils/constants";
import ProductCarousel from "@/components/carousel/ProductCarousel";

const intervalMs = 5000;
const fadeMs = 2000;

const imagesFade = HOME_SLIDES;
const productos = PRODUCT_LIST;

export default function HomePage() {
  const router = useRouter();

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
                  backgroundImage: `url(${imagesFade[index].backgroundImage})`,
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
                Panificación Industrial
              </h2>

              <p className="text-color-white text-center ">
                Formulaciones especializadas para procesos estandarizados.
              </p>
            </div>
          </div>

          <div
            className={styles.craftOverlay}
            onClick={() => onHandlingClick("artesanal")}
          >
            <div className={styles.craftText}>
              <h2 className="text-color-white text-center">
                Panificación Artesanal
              </h2>

              <p
                className={`${styles.subTextSection} text-color-white text-center`}
              >
                Calidad y frescura que acompañan tu proceso artesanal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoriesStyles}>
        <h2 className={`${styles.categoriesTitle}  text-center`}>
          Conoce más sobre nosotros
        </h2>
      </section>

      {/* <section className={styles.videoSection}>

          <ProductCarousel
          title={""}
          elementos={productos}
          category={"ARTESANAL"}
          intervalMs={5000}
        />
       
      </section> */}

      <div className={styles.secondContent}>
        <ProductCarousel
          title={""}
          elementos={productos}
          category={"ARTESANAL"}
          intervalMs={5000}
        />
      </div>
    </main>
  );
}
