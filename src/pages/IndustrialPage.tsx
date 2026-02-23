"use client";

import styles from "./IndustrialPage.module.css";
import ProductCarousel from "../components/carousel/ProductCarousel";
import { PRODUCT_LIST } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { ProductDetailInterface } from "@/interfaces/Product";
import { t } from "@/i18n";

const productos = PRODUCT_LIST;

const titleCarousel = "Productos de Panificación Industrial";

export default function IndustrialPage() {
  const router = useRouter();

  function onHandlingRoute(element: ProductDetailInterface) {
    return router.push(
      `/productos/${element.route.toLowerCase().replace(/\s+/g, "-")}`,
    );
  }

  return (
    <section className={styles.mainPageLayout}>
      <div className={styles.screen}>
        <div className={styles.firstContent}>
          <div className={styles.mainOverlay}>
            <h1 className={`${styles.mainTitle} text-color-white`}>
              {t("industrial.title")}
            </h1>
            <p className={`${styles.mainSubtitle} text-color-white`}>
              {t("industrial.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ribbonProducts}>
        <div className={styles.ribbonLayer1}></div>
        <div className={styles.ribbonLayer2}>
          <h2 className={styles.titleRibbon}>{t("industrial.listPorduct")}</h2>
        </div>
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
    </section>
  );
}
