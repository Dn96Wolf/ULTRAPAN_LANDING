"use client";

import styles from "./ProductDetail.module.css";

import { ProductDetailInterface } from "@/interfaces/Product";
import Image from "next/image";
import Icon from "../icon/Icon";
import { Pill } from "lucide-react";

import { t } from "@/i18n";
import ContactForm from "../forms/ContactForm";

export default function ProductDetail({
  item,
}: {
  item: ProductDetailInterface;
}) {
  return (
    <div
      className={`${styles.sectionContent}  ${item.category === "INDUSTRIAL" ? styles.sectionContentIndustrial : styles.sectionContentCraftMaker}`}
    >
      <div className={styles.main}>
        <div className={styles.first}>
          <div className={styles.productData}>
            <h1 className={styles.productTitle}>{item.title.toUpperCase()}</h1>
            <span className={styles.productSubtitle}>{item.subtitle}</span>

            <p className={styles.productDesktopDescription}>
              {item.description}
            </p>
          </div>

          <div className={styles.productImage}>
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className={styles.image}
              sizes="(max-width: 640px) 100vw, 520px"
            />
          </div>
        </div>

        <div className={styles.productDetailContent}>
          <p className={styles.productDescription}>{item.description}</p>

          <div className={styles.productBenefits}>
            <h2 className={`${styles.productBenefitsTitle}`}>
              {t("product.benefits")}
            </h2>

            <div className={styles.listBenefitContainer}>
              {item.benefits.map((element, index) => (
                <div
                  key={index}
                  className={styles.listBenefit}
                  style={{ backgroundColor: element.bgColor }}
                >
                  <div className={styles.listTitle}>
                    <h3 className={styles.benefitTitle}>{element.title}</h3>

                    <p className={styles.benefitDescription}>
                      {" "}
                      {element.description}{" "}
                    </p>
                  </div>

                  <p className={styles.iconElement}>
                    <Icon name={element.icon} className={styles.icon} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.instructions}>
            <h2 className={`${styles.productBenefitsTitle}`}>
              {t("product.usage")}
            </h2>

            <div className={styles.listBenefitContainer}>
              {item.instructions.map((element, index) => (
                <div
                  key={index}
                  className={styles.listBenefit}
                  style={{ backgroundColor: element.bgColor }}
                >
                  <p className={styles.iconElement}>
                    <Pill className={styles.icon} />
                  </p>

                  <div className={styles.listTitle}>
                    <h3 className={styles.benefitTitle}>{element.title}</h3>

                    <p className={styles.benefitDescription}>
                      {" "}
                      {element.description}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.productChosen}>
            <h2 className={`${styles.productBenefitsTitle}`}>
              {t("product.whyChooseIt")}
            </h2>

            <div
              className={styles.listBenefit}
              style={{ backgroundColor: item.valueProposal.bgColor }}
            >
              <p className={styles.textProposal}>{item.valueProposal.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactFormContent}>
        <h2
          className={styles.contactFormTitle}
          style={{ color: item.valueProposal.bgColor }}
        >
          ¿Buscas información de éste producto?
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}
