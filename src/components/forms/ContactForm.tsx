"use client";

import styles from "./ContactForm.module.css";
import ButtonComponent from "../buttons/Button";
import { useState, FormEvent, useRef } from "react";
import { EMAILREGEX } from "@/utils/constants";
import { t } from "@/i18n";

import ReCAPTCHA from "react-google-recaptcha";
import {
  ContactFormData,
  ContactFormProps,
} from "@/interfaces/ContactForm.interface";

export default function ContactForm({ titleBtn }: ContactFormProps) {
  const initialState: ContactFormData = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

    setFormData((prev) => ({
      ...prev,
      name: onlyLetters,
    }));
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      email: value,
    }));
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const onlyNumbers = e.target.value.replace(/\D/g, "");

    if (onlyNumbers.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));
    }
  }

  function handleFieldChange(
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof ContactFormData,
  ) {
    const value = e.target.value;

    const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

    setFormData((prev) => ({
      ...prev,
      [fieldName]: onlyLetters,
    }));
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let value = e.target.value;

    value = value.replace(/<[^>]*>?/gm, "");

    setFormData((prev) => ({
      ...prev,
      message: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name)) {
      alert("El nombre solo puede contener letras y espacios.");
      return;
    }

    if (formData.phone && formData.phone.length !== 10) {
      alert("El teléfono debe tener 10 dígitos.");
      return;
    }

    if (formData.message.length < 10) {
      alert("El mensaje es demasiado corto.");
      return;
    }

    if (formData.message.length > 1000) {
      alert("El mensaje es demasiado largo.");
      return;
    }

    if (formData.email === "") {
      alert("El correo electrónico no puede estar vacío.");
      return;
    }

    if (!EMAILREGEX.test(formData.email)) {
      alert("Ingresa un correo electrónico válido.");
    }

    //TODO: Validate data when we have the backend ready, for now we just reset the form and log the data
    //const token = recaptchaRef.current?.getValue();
    // if (!token) {
    //   alert("Por favor confirma que no eres un robot.");
    //   return;
    // }
    // console.log("Datos recibidos en el padre:", formData);
    // recaptchaRef.current?.reset();
    // setFormData(initialState);
    // try {
    //   setLoading(true);
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       ...formData,
    //       recaptchaToken: token,
    //     }),
    //   });

    //   const result = await response.json();

    //   if (!response.ok) {
    //     throw new Error(result.message || "Error al enviar el mensaje");
    //   }

    //   setSuccess("Mensaje enviado correctamente.");
    //   setFormData(initialState);
    //   recaptchaRef.current?.reset();
    // } catch (err: any) {
    //   setError(err.message || "Ocurrió un error inesperado.");
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>{t("form.name")}</span>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleNameChange}
                pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+"
                required
              />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>{t("form.lastName")}</span>
              <input
                type="text"
                name="lastName"
                placeholder="Tu apellido"
                value={formData.lastName}
                onChange={(e) => handleFieldChange(e, "lastName")}
                pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>{t("form.email")}</span>
              <input
                type="email"
                name="email"
                placeholder="correo@empresa.com"
                value={formData.email}
                onChange={handleEmailChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>{t("form.phone")}</span>
              <input
                type="tel"
                name="phone"
                placeholder="+52 55 0000 0000"
                maxLength={10}
                inputMode="numeric"
                pattern="[0-9]*"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>{t("form.company")}</span>
              <input
                type="text"
                name="company"
                placeholder="Nombre de la empresa"
                value={formData.company}
                onChange={(e) => handleFieldChange(e, "company")}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldLabel}>{t("form.subject")}</span>
              <input
                type="text"
                name="subject"
                placeholder="Motivo del contacto"
                value={formData.subject}
                onChange={(e) => handleFieldChange(e, "subject")}
              />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>{t("form.message")}</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Escribe tu mensaje"
              value={formData.message}
              onChange={handleMessageChange}
              maxLength={1000}
              required
            />
          </label>

          {/* <ReCAPTCHA
            sitekey={"6LePk-QrAAAAAFlpNAgxCsrFufl4guBIivlYB5NZ"}
            ref={recaptchaRef}
          /> */}

          <ButtonComponent
            colorPalette="BROWN"
            type="submit"
            title={titleBtn || "Enviar"}
            disabled={loading}
          />

          {error && <span className={styles.error}>{error}</span>}
          {success && <span className={styles.success}>{success}</span>}
        </form>
      </div>
    </section>
  );
}
