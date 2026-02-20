"use client";

import styles from "./craftPage.module.css";
import ProductCarousel from "../components/carousel/ProductCarousel";
import { PRODUCT_LIST } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { ProductDetailInterface } from "@/interfaces/Product";
import { t } from "@/i18n";

const productos = PRODUCT_LIST;

const titleCarousel = "Productos de Panificación Artesanal";

export default function CraftPage() {
  const router = useRouter();

  function onHandlingRoute(element: ProductDetailInterface) {
    return router.push(
      `/productos/${element.title.toLowerCase().replace(/\s+/g, "-")}`,
    );
  }

  return (
    <section className={styles.mainPageLayout}>
      <div className={styles.screen}>
        <div className={styles.firstContent}>
          <div className={styles.mainOverlay}>
            <h1 className={`${styles.mainTitle} text-color-white`}>
              PANIFICACIÓN ARTESANAL
            </h1>
            <p className={`${styles.mainSubtitle} text-color-white`}>
              Calidad y frescura que acompañan tu proceso artesanal.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ribbonProducts}>
        <div className={styles.ribbonLayer1}></div>
        <div className={styles.ribbonLayer2}>
          <h2 className={styles.titleRibbon}>{t("craftmaker.listPorduct")}</h2>
        </div>
      </div>

      <div className={styles.secondContent}>
        <ProductCarousel
          title={titleCarousel}
          elementos={productos}
          category={"ARTESANAL"}
          intervalMs={5000}
          onActionElement={(element: ProductDetailInterface) =>
            onHandlingRoute(element)
          }
        />
      </div>
    </section>
  );
}
