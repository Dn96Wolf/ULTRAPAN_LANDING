import CardsSection from "@/components/cards/CardsSection";

import styles from "./ultrapan.module.css";


export default function Page() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Linea ultrapan</h1>

      <div className={styles.main}>
        <CardsSection />
      </div>
    </section>
  );
}
