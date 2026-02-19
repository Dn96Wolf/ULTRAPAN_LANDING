"use client";

import styles from "./ProductDetail.module.css";

import { ProductDetailInterface } from "@/interfaces/Product";
import { Pill } from "lucide-react";
import Icon from "@/components/icon/Icon";

export default function ProductDetail({
  item,
}: {
  item: ProductDetailInterface;
}) {
  // console.log('desde el componente', item)

  // Aquí puedes usar el slug para obtener los detalles del producto
  return (
    <div className={styles.content}>
      <div
        className={styles.inner}
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        <div className={styles.productContainer}>
          <div className={`${styles.contentProduct} ${styles.fadeInRight}`}>
            <div className={styles.productDescriptionContainer}>
              <h3 className={`${styles.productTitle}`}>{item.title}</h3>
              <p className={`${styles.productDescription} text-align-center`}>
                &quot;{item.subtitle}&quot;
              </p>

              <div className={styles.productBenefits}>
                <p className={styles.productDescription}>{item.description}</p>
              </div>

              <div className={styles.productBenefits}>
                <h3 className={`${styles.subtitle}`}>
                  Beneficios y Promesa Única
                </h3>

                <ul>
                  {item.benefits.map((element, index) => (
                    <p key={index} className={styles.listColor}>
                      <div className={styles.iconContainer}>
                        <Icon name={element.icon} />

                        <p>
                          <b>{element.title}</b>
                        </p>
                      </div>

                      <ul>
                        <span> {element.description} </span>
                      </ul>
                    </p>
                  ))}
                </ul>
              </div>

              <div className={styles.productBenefits}>
                <h3 className={`${styles.subtitle}`}>¿Cómo se usa?</h3>

                <ul>
                  {item.instructions.map((element, index) => (
                    <div key={index} className={styles.iconContainer}>
                      <Pill className={styles.listColor} />

                      <p className={styles.listColor}>
                        <b>{element.title}</b>
                        <span> {element.description} </span>
                      </p>
                    </div>
                  ))}
                </ul>
              </div>

              <div className={styles.productBenefits}>
                <h3 className={`${styles.subtitle} text-color-white`}>
                  ¿Por qué elegirlo?
                </h3>

                <ul>
                  <p className={`text-color-white`}>{item.valueProposal}</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
