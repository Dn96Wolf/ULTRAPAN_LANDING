"use client";

import styles from "./IndustrialPage.module.css";
import ProductCarousel from "../components/carousel/ProductCarousel";
import { PRODUCT_LIST } from "@/utils/constants";
import { useState } from "react";
import ProductDetail from "@/components/Product/ProductDetail";
import { ProductDetailInterface } from "@/interfaces/Product";

const productos = PRODUCT_LIST;

const titleCarousel = "Productos de Panificación Industrial";

export default function IndustrialPage() {
  const [showDetail, setShowDetail] = useState(false);

  const [itemSelected, setItemSelected] = useState(null);

  function onShowContent(productSelected: ProductDetailInterface) {
    setShowDetail(!showDetail);
    setItemSelected(productSelected);

    // if (!showDetail) {
    //   setItemSelected(null);
    // }
  }

  return (
    <section className={styles.mainPageLayout}>
      <div className={styles.screen}>
        <div className={styles.firstContent}>
          <div className={styles.mainOverlay}>
            <h1 className={`${styles.mainTitle} text-color-white`}>
              PANIFICACIÓN INDUSTRIAL
            </h1>
            <p
              className={`${styles.mainSubtitle} text-color-white`}
            >
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
          onActionElement={onShowContent}
        />
      </div>

      {itemSelected !== null && (
        <>
          <div className={styles.productDetailContent}>
            <ProductDetail item={itemSelected} />
          </div>
          ,
        </>
      )}
    </section>
  );
}
