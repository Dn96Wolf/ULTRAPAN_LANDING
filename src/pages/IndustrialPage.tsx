"use client";

import styles from "./IndustrialPage.module.css";
import ProductCarousel from "../components/carousel/ProductCarousel";
import { PRODUCT_LIST } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { ProductDetailInterface } from "@/interfaces/Product";

const productos = PRODUCT_LIST;

const titleCarousel = "Productos de Panificación Industrial";

export default function IndustrialPage() {
  const router = useRouter();

  function onHandlingRoute(element: ProductDetailInterface) {
    return router.push(`/productos/${element.title.toLowerCase().replace(/\s+/g, "-")}`);
  }

  return (
    <section className={styles.mainPageLayout}>
      <div className={styles.screen}>
        <div className={styles.firstContent}>
          <div className={styles.mainOverlay}>
            <h1 className={`${styles.mainTitle} text-color-white`}>
              PANIFICACIÓN INDUSTRIAL
            </h1>
            <p className={`${styles.mainSubtitle} text-color-white`}>
              Soluciones de alto rendimiento para líneas continuas, larga vida y
              cadenas de frío.
            </p>
          </div>
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
