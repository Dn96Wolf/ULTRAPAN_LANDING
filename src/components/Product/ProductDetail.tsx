"use client";

import styles from "./ProductDetail.module.css";

import { ProductDetailInterface } from "@/interfaces/Product";
import Image from "next/image";
import { CircleArrowLeft } from "lucide-react";

import { t } from "@/i18n";
import ContactForm from "../forms/ContactForm";
import { useRouter } from "next/navigation";
import ProductDetailCarouse from "../carousel/ProductDetailCarousel";
import { NAME_PRODUCTS } from "@/utils/constants";

export default function ProductDetail({
  item,
}: {
  item: ProductDetailInterface;
}) {
  const router = useRouter();

  function highlightBrand(text: string): React.ReactNode[] {
    const sortedProducts = NAME_PRODUCTS.sort((a, b) => b.length - a.length);

    const regex = new RegExp(`(${sortedProducts.join("|")})`, "g");

    return text.split(regex).map((part, index) => {
      if (NAME_PRODUCTS.includes(part)) {
        return (
          <span key={index} className="impact">
            {part}
          </span>
        );
      }
      return part;
    });
  }

  return (
    <div
      className={`${styles.pageContent}  ${item.category === "INDUSTRIAL" ? styles.sectionContentIndustrial : styles.sectionContentCraftMaker}`}
    >
      <div
        className={styles.main}
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        <div className={styles.first}>
          <a
            className={styles.backButton}
            onClick={() => router.back()}
            style={{ color: item.textColor }}
          >
            <CircleArrowLeft />
            <p>Volver</p>
          </a>

          <div className={styles.productData}>
            <h1
              className={`${styles.productTitle} impact`}
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
              {highlightBrand(item.description)}
            </p>

            {item.description2 && (
              <p
                className={styles.productDesktopDescription}
                style={{ color: item.textColor }}
              >
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
              style={{ color: item.backgroundColor }}
              sizes="(max-width: 640px) 100vw, 520px"
            />
          </div>
        </div>

        <div className={styles.productDetailContent}>
          <p
            className={styles.productDescription}
            style={{ color: item.textColor }}
          >
            {highlightBrand(item.description)}
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

      {/* <div className={styles.sectionContainer}>
        <h3
          className={`${styles.productBenefitsTitle}`}
          style={{ color: item.titleColor }}
        >
          {t("product.benefits")}
        </h3>

        <div
          className={styles.sectionRibbon}
          style={{ backgroundColor: item.benefits[0].bgColor }}
        >
          <div className={styles.benefitsContainer}>
            {item.benefits.map((element, index) => (
              <div key={index} className={styles.benefitElement}>
                <p className={styles.benefitIcon}>
                  <Image
                    src={element.icon}
                    width={24}
                    height={24}
                    alt={element.description}
                    className={styles.icon}
                  />
                </p>
                <p className={styles.benefitDescription}>
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <section className={styles.sectionContainer}>
        <div className={styles.largeCard}>
          <div
            className={styles.cardBodyOverlay}
            style={{ backgroundColor: item.backgroundColor }}
          ></div>
          <div
            className={styles.cardHeader}
            style={{ backgroundColor: item.backgroundColor }}
          >
            <h4>{t("product.benefits")}</h4>
          </div>

          <div className={styles.doseInner}>
            {item.benefits.map((element, index) => (
              <div key={index} className={styles.doseElement}>
                <p
                  className={styles.benefitIcon}
                  style={{ backgroundColor: item.titleColor }}
                >
                  <Image
                    src={element.icon}
                    width={24}
                    height={24}
                    alt={element.description}
                    className={styles.icon}
                  />
                </p>

                <p className={styles.doseDescription}>{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionContainer}>
        <div className={styles.cardsContent}>
          <div className={styles.cardTwins}>
            <div className={styles.smallCard}>
              <div
                className={styles.cardBodyOverlay}
                style={{ backgroundColor: item.backgroundColor }}
              ></div>
              <div
                className={styles.cardHeader}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <h4>{t("product.application")}</h4>
              </div>

              <div className={styles.cardBody}>
                {item.applications.map((application, index) => (
                  <div key={index}>
                    <ul className={styles.applicationItem}>
                      <li
                        className={styles.applicationDescription}
                        style={{ color: "#000" }}
                      >
                        {application}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.smallCard}>
              <div className={styles.cardBody}>
                <div
                  className={styles.cardBodyOverlay}
                  style={{ backgroundColor: item.backgroundColor }}
                ></div>
                <div
                  className={styles.cardHeader}
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <h4>{t("product.ingredients")}</h4>
                </div>

                <div className={styles.ingredientElement}>
                  <div
                    className={styles.ingredientIcon}
                    style={{ backgroundColor: item.titleColor }}
                  >
                    <Image
                      src={"/assets/images/molecule.png"}
                      alt={item.title}
                      width={54}
                      height={54}
                      sizes="(max-width: 640px) 100vw, 52px"
                    />
                  </div>

                  <p
                    className={styles.ingredientDescription}
                    style={{ color: "#000" }}
                  >
                    {item.ingredients}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.smallCard}>
              <div className={styles.cardBody}>
                <div
                  className={styles.cardBodyOverlay}
                  style={{ backgroundColor: item.backgroundColor }}
                ></div>

                <div
                  className={styles.cardHeader}
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <h4>{t("product.dosis")}</h4>
                </div>

                <div className={styles.doseInner}>
                  {item.instructions.map((element, index) => (
                    <div key={index} className={styles.doseElement}>
                      <p
                        className={styles.benefitIcon}
                        style={{ backgroundColor: item.titleColor }}
                      >
                        <Image
                          src={element.icon}
                          width={24}
                          height={24}
                          alt={element.description}
                          className={styles.icon}
                        />
                      </p>

                      <p className={styles.doseDescription}>
                        {element.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ventajas competitivas */}

      <section className={styles.sectionContainer}>
        <h3
          className={`${styles.advantagesTitle}`}
          style={{ color: item.titleColor }}
        >
          {t("product.competitiveAdvantajes")}
        </h3>

        <div
          className={styles.advantagesInner}
          style={{ backgroundColor: item.backgroundColor}}
        >
          <div className={styles.advantagesContainer}>
            {item.advantages.map((element, index) => (
              <div key={index} className={styles.vantageElement}>
                <p className={styles.benefitIcon}>
                  <Image
                    src={element.icon}
                    width={24}
                    height={24}
                    alt={element.description}
                    className={styles.icon}
                  />
                </p>
                <p className={styles.vantageDescription}>
                  {" "}
                  {element.description}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {item.imagesRelated.length && (
        <div className={styles.carouselContainer}>
          <ProductDetailCarouse images={item.imagesRelated} />
        </div>
      )}

      <div className={styles.contactFormContent}>
        <h2
          className={styles.contactFormTitle}
          style={{ color: item.titleColor }}
        >
          ¿Buscas información de éste producto?
        </h2>
        <ContactForm element={item.title} />
      </div>
    </div>
  );
}
