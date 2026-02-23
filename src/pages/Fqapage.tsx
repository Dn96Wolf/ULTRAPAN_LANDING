"use client"

import { FAQ_SECTIONS } from "@/utils/constants";
import Accordion from "@/components/ui/Accordion";
import styles from "./faq.module.css";

import { t } from "@/i18n";

export default function FQAPage() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <section className={styles.hero}>
          <h1>{t("fqa.title")}</h1>
          <p>{t("fqa.subtitle")}</p>
        </section>

        <section className={styles.content}>
          {FAQ_SECTIONS.map((section) => (
            <div key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>

              <Accordion
                items={section.items.map((item) => ({
                  title: item.question,
                  content: item.answer,
                }))}
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
