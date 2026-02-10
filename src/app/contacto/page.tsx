import ContactForm from "@/components/forms/ContactForm";

import styles from "./contacto.module.css";

import { CONTACT_PAGE_TEXT } from "@/utils/constants";

export default function Page() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.bgUrl}></div>

      <ContactForm
        isMain={true}
        title={CONTACT_PAGE_TEXT.title}
        subtitle={CONTACT_PAGE_TEXT.subtitle}
      />



      <article>
        <p>
          {CONTACT_PAGE_TEXT.additionalText}
        </p>
      </article>

    </section>
  );
}
