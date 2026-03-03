"use client";
import styles from "../app/page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HOME_SLIDES, PRODUCT_LIST } from "@/utils/constants";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import ButtonComponent from "../components/buttons/Button";
import { t } from "@/i18n";

const intervalMs = 7000;
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

  function handlingProduct(route: string) {
    return router.push(`/${route}`);
  }

  return (
    <main className={styles.page}>
      <section
        className={`${styles.firstScreen} `}
        style={{ ["--fade-ms" as any]: `${fadeMs}ms` }}
      >
        {!!imagesFade.length && (
          <>
            {imagesFade.map((element, index) => (
              <div
                key={element.idProduct}
                className={` ${styles.craftLayer} ${active === index ? styles.show : styles.hide}`}
                style={{
                  backgroundImage: `url(${!isMobile ? element.backgroundImage : element.backgroundImageResponsive})`,
                }}
              >
                <div className={styles.craftContent}>
                  <div className={styles.mainTitleContainer}>
                    <div
                      className={`${styles.mainTitleRibbon} ${imagesFade[index].ribbonClass}`}
                    >
                      {element.subtitle !== "" && (
                        <p
                          className={`text-color-white  ${styles.mainSubtitle2}`}
                        >
                          {element.subtitle}{" "}
                          {element.specialTitle && (
                            <span className={"impact bold"}>
                              {element.specialTitle}
                            </span>
                          )}
                        </p>
                      )}

                      <h1
                        className={`text-color-white ${styles.mainTitle} impact`}
                      >
                        {element.title}
                      </h1>

                      {element.subtitle2 !== "" && (
                        <p
                          className={`text-color-white  ${styles.mainSubtitle}`}
                        >
                          {element.subtitle2}
                        </p>
                      )}

                      <div className={styles.actionButtonContainers}>
                        {element.action && (
                          <div className={styles.buttonStyle}>
                            <ButtonComponent
                              colorPalette={element.colorPalette}
                              title={element.primaryButtonText}
                              onAction={() =>
                                handlingProduct(element.primaryRoute)
                              }
                            />
                          </div>
                        )}

                        {element.secondAction && (
                          <div className={styles.buttonStyle}>
                            <ButtonComponent
                              colorPalette={element.secondColorPalette}
                              title={element.secondButtonText}
                              onAction={() =>
                                handlingProduct(element.secondRoute)
                              }
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </section>

      {/* <section className={styles.whiteSpace}></section> */}

      <section className={styles.categoriesStyles}>
        <h2 className={`${styles.categoriesTitle}  text-center`}>
          {t("main.solutions")}{" "}
          <span className="impact bold">{"ULTRAPAN"}</span>
        </h2>
      </section>

      <section className={styles.secondScreen} id="typeIndustrySection">
        <div className={styles.firstLayer}>
          <video
            src={"/assets/media/artesanal.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className={styles.craftVideo}
          ></video>

          {/* <video
            src={"/assets/media/industrial.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className={styles.craftVideo}
          ></video> */}
        </div>

        {/* <div className={styles.thirdLayer}>
          <div
            className={styles.craftOverlay}
            onClick={() => onHandlingClick("artesanal")}
          >
            <div className={styles.craftText}>
              <h2 className="text-color-white text-center">
                {t("main.craftMaker")}
              </h2>
            </div>
          </div>

          <div
            className={styles.industrialOverlay}
            onClick={() => onHandlingClick("industrial")}
          >
            <div className={styles.industrialText}>
              <h2 className="text-color-white text-center">
                {t("main.industrial")}
              </h2>
            </div>
          </div>
        </div> */}
      </section>

      <section className={styles.whiteSpace}></section>

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
