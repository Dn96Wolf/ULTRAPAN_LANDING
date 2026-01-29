"use client";

import styles from "./ContactForm.module.css";

import ButtonComponent from "../buttons/Button";

type ContactFormProps = {
  title?: string;
};

export default function ContactForm({
  title = "¿Quieres conocer más de nuestros productos?",
}: ContactFormProps) {
  function onHandlingClick() {
    console.log("Mensaje enviado");
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

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
            title={"Enviar mensaje"}
            onAction={() => onHandlingClick()}
          />
        </form>
      </div>
    </section>
  );
}
