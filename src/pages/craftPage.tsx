"use client";

import styles from "./craftPage.module.css";
import ProductCarousel from "../components/carousel/ProductCarousel";
import { PRODUCT_LIST } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { ProductDetailInterface } from "@/interfaces/Product";
import { t } from "@/i18n";
import ButtonComponent from "@/components/buttons/Button";

const productos = PRODUCT_LIST;

const titleCarousel = "Productos de Panificación Artesanal";

export default function CraftPage() {
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
            {t("handCrafter.title").toLocaleUpperCase()}
          </h1>
          <span className={`${styles.mainSubtitle}`}>
            {t("handCrafter.subtitle")}
          </span>
        </div>
        <div className={styles.separator}></div>
      </div>

      <h2 className={styles.carouselTitle}>
        Descubre la línea de mejorantes de panificación artesanal
      </h2>

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

      <div className={styles.contactSpace}>
        <h2 className={styles.contactTitle}>
          ¿Tienes dudas sobre qué mejorante es ideal para tu proceso?
        </h2>

        <div className={styles.contactContent}>
          <p className={styles.contactSubtitle}>
            Deja que nuestros asesores comerciales se acerquen contigo para
            brindarte atención personalizada
          </p>

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
