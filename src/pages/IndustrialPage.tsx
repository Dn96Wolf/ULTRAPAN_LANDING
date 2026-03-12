"use client";

import styles from "./IndustrialPage.module.css";
import ProductCarousel from "../components/carousel/ProductCarousel";
import { PRODUCT_LIST } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { ProductDetailInterface } from "@/interfaces/Product";
import { t } from "@/i18n";
import ButtonComponent from "@/components/buttons/Button";

const productos = PRODUCT_LIST;

const titleCarousel = "Productos de Panificación Industrial";

export default function IndustrialPage() {
  const router = useRouter();

  function onHandlingRoute(element: ProductDetailInterface) {
    return router.push(
      `/productos/${element.route.toLowerCase().replace(/\s+/g, "-")}`,
    );
  }

  function onRouteContact(element: string) {
    return router.push(`/${element}`);
  }

  return (
    <section className={styles.mainPageLayout}>
      <div className={styles.frontPage}>
        <div className={styles.overlayContainer}>
          <h1 className={`${styles.mainTitle}`}>
            {t("industrial.title").toLocaleUpperCase()}
          </h1>
          <span className={`${styles.mainSubtitle}`}>
            {t("industrial.subtitle")}
          </span>
        </div>
        <div className={styles.separator}></div>
      </div>

      <div className={styles.carouselTitleContact}>
        <h2 className={styles.carouselTitle}>{t("industrial.subtitle")}</h2>
      </div>

      <div className={styles.secondContent}>
        <ProductCarousel
          title={titleCarousel}
          elementos={productos}
          category={"INDUSTRIAL"}
          intervalMs={5000}
          onActionElement={(element: ProductDetailInterface) =>
            onHandlingRoute(element)
          }
        />
      </div>

      <div className={styles.contactSpace}>
        <h2 className={styles.contactTitle}>{t("contact.doubts")}</h2>

        <div className={styles.contactContent}>
          <p className={styles.contactSubtitle}>{t("contact.doubtSubtitle")}</p>

          <div className={styles.btnContent}>
            <ButtonComponent
              title="Solicitar información"
              colorPalette="SOFTBLUE"
              onAction={() => onRouteContact("contacto")}
            />
          </div>
        </div>
      </div>

      <div className={styles.blankRibbon}></div>
    </section>
  );
}
