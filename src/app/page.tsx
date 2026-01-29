import styles from "./page.module.css";
import Image from "next/image";

import panadero from "@/assets/images/panadero2.jpeg";
import ProductCarousel from "../components/carousel/ProductCarousel";
import { MainCarousel } from "@/components/carousel/MainCarousel";
import { mainImages, ProductsItems } from "@/utils/constants";

const elementos = ProductsItems;

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.carousel}>
        <MainCarousel
          elementos={mainImages}
          intervalMs={10000}
          ctaLabel="Ver producto"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={panadero}
              width={140}
              height={30}
              alt=""
            />
          </div>

          <div className={styles.mainTextContainer}>
            <h2 className={styles.title}>ULTRAPAN</h2>

            <p className={styles.subtitle}>
              ULTRAPAN es una línea de mejorantes para todo tipo de pan, que
              forma parte del mercado mexicano desde hace más de 40 años, y
              ahora renueva su imagen.
            </p>

            <p className={styles.subtitle}>
              Formulados por ENZIQUIM, empresa 100% mexicana experta en creación
              de soluciones enzimáticas para diferentes industrias, los
              mejorantes ULTRAPAN son el mejor aliado de cualquier proceso de
              panificación, tanto artesanal como industrial.
            </p>
          </div>
        </div>
      </div>

      <ProductCarousel
        title="Nuestros productos"
        elementos={elementos}
        intervalMs={10000}
        ctaLabel="Ver producto"
      />
    </main>
  );
}
