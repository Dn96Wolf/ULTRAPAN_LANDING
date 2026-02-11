"use client";

import styles from "./ContactForm.module.css";

import ButtonComponent from "../buttons/Button";

type ContactFormProps = {
  isMain?: boolean;
  title?: string;
  subtitle?: string;
};

export default function ContactForm({
  isMain = false,
  title = "¿Quieres conocer más de nuestros productos?",
  subtitle,
}: ContactFormProps) {
  function onHandlingClick() {
    console.log("Mensaje enviado");
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {isMain ? (
          <h1 className={styles.title}>{title}</h1>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}

        {subtitle !== "" && <p className={styles.subtitle}>{subtitle}</p>}

        <form className={styles.form}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Nombre</span>
              <input type="text" name="name" placeholder="Tu nombre" required />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="correo@empresa.com"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Teléfono</span>
              <input type="tel" name="phone" placeholder="+52 55 0000 0000" />
            </label>

            <label className={styles.field}>
              <span>Empresa</span>
              <input
                type="text"
                name="company"
                placeholder="Nombre de la empresa"
              />
            </label>

            <label className={styles.field}>
              <span>Asunto</span>
              <input
                type="text"
                name="subject"
                placeholder="Motivo del contacto"
              />
            </label>
          </div>

          <label className={styles.field}>
            <span>Mensaje</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Escribe tu mensaje"
              required
            />
          </label>
          <ButtonComponent
            colorPalette="BROWN"
            title={"Enviar mensaje"}
            onAction={() => onHandlingClick()}
          />
        </form>
      </div>
    </section>
  );
}
