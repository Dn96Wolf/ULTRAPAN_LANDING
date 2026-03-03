"use client";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";
import { HOME_SLIDES, PRODUCT_LIST } from "@/utils/constants";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import { t } from "@/i18n";
import HomeCarousel from "@/components/carousel/MainCarousel";

const imagesFade = HOME_SLIDES;
const productos = PRODUCT_LIST;

export default function HomePage() {
  const router = useRouter();

  function onHandlingClick(id: string) {
    if (!id) return;

    return router.push(`/${id}`);
  }

  return (
    <main className={styles.page}>
      <section className={styles.principal}>
        <HomeCarousel items={imagesFade}></HomeCarousel>
      </section>

      <section className={styles.categoriesStyles}>
        <h2 className={`${styles.categoriesTitle}  text-center`}>
          {t("main.solutions")}{" "}
          <span className={`impact ${styles.ultrapanSize}`}>{"ULTRAPAN"}</span>
        </h2>
      </section>

      <section className={styles.industriesSection}>
        <div
          className={styles.craftContainer}
          onClick={() => {
            onHandlingClick("artesanal");
          }}
        >
          <video
            src={"/assets/media/artesanal.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className={styles.craftVideo}
          ></video>

          <div className={styles.craftOverlay}>
            <div className={styles.craftOverlayContent}>
              <div>
                <h2 className={styles.craftTitle}>Artesanal</h2>
                <p className={styles.craftSubtitle}>
                  Mejorantes para panificación tradicional
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.industrialContainer}
          onClick={() => {
            onHandlingClick("industrial");
          }}
        >
          <video
            src={"/assets/media/industrial.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className={styles.craftVideo}
          ></video>

          <div className={styles.industrialOverlay}>
            <div className={styles.craftOverlayContent}>
              <div>
                <h2 className={styles.craftTitle}>Industrial</h2>

                <p className={styles.craftSubtitle}>
                  Mejorantes para producción y gran volumen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.carouselContainer}>
        <h2 className={`${styles.carouselTitle} `}>{t("main.knowAboutUs")}</h2>
      </section>

      <div className={styles.secondContent}>
        <ProductCarousel title={""} elementos={productos} intervalMs={5000} />
      </div>
    </main>
  );
}
