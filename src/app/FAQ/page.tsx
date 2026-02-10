import { FAQ_SECTIONS } from "../../utils/constants";
import Accordion from "@/components/ui/Accordion";
import styles from "./faq.module.css";

export const metadata = {
  title: "Preguntas frecuentes | Ultrapan",
  description:
    "Resuelve tus dudas sobre el uso, rendimiento, ahorro y vida de anaquel de los productos Ultrapan.",
};

export default function Page() {

  return (
      <main className={styles.page}>
    {/* Hero */}

    <section className={styles.container}>
     <section className={styles.hero}>
      <h1>Preguntas frecuentes</h1>
      <p>
        Resolvemos las dudas más comunes sobre el uso, aplicación y beneficios
        de nuestros productos.
      </p>
    </section>

    {/* Contenido */}
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
  )

}
