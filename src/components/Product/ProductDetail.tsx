"use client";

import styles from "./ProductDetail.module.css";

import Image from "next/image";

import main2 from "@/assets/images/pan-2.png";

import { ProductDetailInterface } from "@/interfaces/Product";

export default function ProductDetail({
  item,
}: {
  item: ProductDetailInterface;
}) {
  // Aquí puedes usar el slug para obtener los detalles del producto
  return (
    <div className={styles.content}>
      <div className={styles.inner}>
        <div className={styles.productContainer}>
          <div className={`${styles.imageContainer} ${styles.fadeInLeft}`}>
            <Image
              className={`${styles.image}`}
              src={main2}
              width={140}
              height={30}
              alt=""
            />
          </div>

          <div className={`${styles.contentProduct} ${styles.fadeInRight}`}>
            <h3 className={styles.productTitle}>{item.title}</h3>
            <p className={styles.productDescription}>{item.description}</p>

            <div className={styles.productBenefits}>
              <h3 className={styles.subtitle}>Beneficios</h3>

              <ul>
                {item.benefits.map((element, index) => (
                  <li key={index} className={styles.listColor}>
                    {element}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.advantages}>
              <h3 className={styles.subtitle}>Ventajas</h3>

              <ul>
                {item.advatages.map((element, index) => (
                  <li key={index} className={styles.listColor}>
                    {element}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.moreInfo}>
              <h3 className={styles.subtitle}> Información adicional </h3>

              <ul>
                {item.moreInfo.map((element, index) => (
                  <li key={index} className={styles.listColor}>
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
