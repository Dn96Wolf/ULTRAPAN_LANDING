"use client";

import styles from "./ProductDetail.module.css";

import { ProductDetailInterface } from "@/interfaces/Product";
import Image from "next/image";
import { CircleArrowLeft } from "lucide-react";

import { t } from "@/i18n";
import ContactForm from "../forms/ContactForm";
import { useRouter } from "next/navigation";
import ProductDetailCarouse from "../carousel/ProductDetailCarousel";

export default function ProductDetail({
  item,
}: {
  item: ProductDetailInterface;
}) {
  const router = useRouter();

  return (
    <div
      className={`${styles.sectionContent}  ${item.category === "INDUSTRIAL" ? styles.sectionContentIndustrial : styles.sectionContentCraftMaker}`}
      style={{ backgroundColor: item.backgroundColor }}
    >
      <div className={styles.main}>
        <div className={styles.first}>
          <a className={styles.backButton} onClick={() => router.back()}>
            <CircleArrowLeft />
            <p>Volver</p>
          </a>

          <div className={styles.productData}>
            <h1
              className={styles.productTitle}
              style={{ color: item.textColor }}
            >
              {item.title.toUpperCase()}
            </h1>
            <span
              className={styles.productSubtitle}
              style={{ color: item.textColor }}
            >
              {item.subtitle}
            </span>

            <p
              className={styles.productDesktopDescription}
              style={{ color: item.textColor }}
            >
              {item.description}
            </p>

            {item.description2 && (
              <p className={styles.productDesktopDescription}>
                {item.description2}
              </p>
            )}
          </div>

          <div className={styles.productImage}>
            <Image
              src={item.mainImage}
              alt={item.title}
              width={100}
              height={100}
              className={styles.image}
              sizes="(max-width: 640px) 100vw, 520px"
            />
          </div>
        </div>

        {/* Beneficios técnicos  */}

        <div className={styles.productDetailContent}>
          <p
            className={styles.productDescription}
            style={{ color: item.textColor }}
          >
            {item.description}
          </p>

          {item.description2 && (
            <p
              className={styles.productDescription}
              style={{ color: item.textColor }}
            >
              {item.description2}
            </p>
          )}
        </div>
      </div>

      <div className={styles.productBenefits}>
        <h3
          className={`${styles.productBenefitsTitle}`}
          style={{ color: item.textColor }}
        >
          {t("product.benefits")}
        </h3>

        <div
          className={styles.listBenefitContainer}
          style={{ backgroundColor: item.benefits[0].bgColor }}
        >
          {item.benefits.map((element, index) => (
            <div key={index} className={styles.listBenefit}>
              <div className={styles.listTitle}>
                <p className={styles.iconElement}>
                  <Image
                    src={element.icon}
                    width={24}
                    height={24}
                    alt={element.description}
                    className={styles.icon}
                  />
                </p>
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

      <div className={styles.instructionsAndApplicationsContainer}>
        {/* Aplicaciones ideales  */}
        <div className={styles.application} style={{ padding: "16px 0" }}>
          <h3
            className={`${styles.productApplicationTitle}`}
            style={{ color: item.textColor }}
          >
            {t("product.application")}
          </h3>

          <div className={styles.listApplicationContainer}>
            {item.applications.map((application, index) => (
              <div key={index}>
                <ul className={styles.listApplication}>
                  <li
                    className={styles.applicationDescription}
                    style={{ color: item.textColor }}
                  >
                    {application}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredientes  */}

        <div className={styles.ingredients} style={{ padding: "16px 0" }}>
          <h3
            className={`${styles.productBenefitsTitle}`}
            style={{ color: item.textColor }}
          >
            {t("product.ingredients")}
          </h3>

          <div className={styles.listIngredientContainer}>
            <div
              className={styles.listIngredient}
              style={{ color: item.textColor }}
            >
              <Image
                src={"/assets/images/molecule.png"}
                alt={item.title}
                width={54}
                height={54}
                sizes="(max-width: 640px) 100vw, 52px"
              />

              <p
                className={styles.ingredientDescription}
                style={{ color: item.textColor }}
              >
                {item.ingredients}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3
        className={`${styles.productDosisTitle}`}
        style={{ color: item.textColor }}
      >
        {t("product.dosis")}
      </h3>

      <div
        className={styles.instructions}
        style={{
          backgroundColor: item.benefits[1].bgColor,
        }}
      >
        <div className={styles.listDosisContainer}>
          {item.instructions.map((element, index) => (
            <div key={index} className={styles.listDosis}>
              <p className={styles.iconElement}>
                <Image
                  src={element.icon}
                  width={24}
                  height={24}
                  alt={element.description}
                  className={styles.icon}
                />
              </p>

              <p className={styles.productDosisText}>{element.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ventajas competitivas */}

      <h3
        className={`${styles.productBenefitsTitle}`}
        style={{ color: item.textColor }}
      >
        {t("product.competitiveAdvantajes")}
      </h3>

      <div
        className={styles.productChosen}
        style={{ backgroundColor: item.advantages[0].bgColor }}
      >
        <div className={styles.listAdvantagesContainer}>
          {item.advantages.map((element, index) => (
            <div key={index} className={styles.vantage}>
              <p className={styles.iconElement}>
                <Image
                  src={element.icon}
                  width={24}
                  height={24}
                  alt={element.description}
                  className={styles.icon}
                />
              </p>
              <p className={styles.advantageText}> {element.description} </p>
            </div>
          ))}
        </div>
      </div>

      {item.imagesRelated.length && (
        <div className={styles.carouselContainer}>
          <ProductDetailCarouse images={item.imagesRelated} />
        </div>
      )}

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
