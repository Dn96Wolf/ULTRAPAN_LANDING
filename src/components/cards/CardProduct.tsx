"use client"

import { ProductDetailInterface } from "@/interfaces/Product";
import styles from "./CardProduct.module.css";

import Image from "next/image";
import { useRouter } from "next/navigation";

import main2 from "@/assets/images/pan-2.png";

export default function CardProduct({
  product,
}: {
  product: ProductDetailInterface;
}) {
  const router = useRouter();

  function onHandlingRoute() {
    return router.push(`/productos/${product.title}`);
  }

  return (
    <div className={styles.card} onClick={() => onHandlingRoute()}>
      <div className={styles.contentCard}>
        <h3 className={styles.title}>{product.title}</h3>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.productPresentation}>{product.subtitle}</div>
      </div>

      <div className={styles.imageCardContainer}>
        <div className={styles.overlay}>

        </div>
        <div>
          <Image
            className={`${styles.image}`}
            src={main2}
            width={140}
            height={30}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
