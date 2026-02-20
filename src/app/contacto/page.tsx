import ContactForm from "@/components/forms/ContactForm";

import styles from "./contacto.module.css";

import { CONTACT_PAGE_TEXT, SOCIAL_MEDIA } from "@/utils/constants";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { EMAIL_CONTACT, SLOGAN } from "@/utils/constants";

const socialIconMap: Record<string, React.ComponentType> = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
};

export default function Page() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.opacityLayer}></div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div>
            <h1 className={styles.title}>{CONTACT_PAGE_TEXT.title}</h1>
            <p className={styles.subtitle}>{CONTACT_PAGE_TEXT.subtitle}</p>
          </div>

          <div className={styles.contactInfoContainer}>
            <ContactForm
              isMain={true}
              title={""}
              subtitle={""}
              titleBtn={"Solicitar asesoría técnica"}
            />
          </div>
        </div>

        <p className={styles.slogan}>{SLOGAN}</p>

        <div className={styles.textContainer}>
          <div className={styles.emailContactContainer}>
            <h3 className={styles.emailTitle}>Contáctanos</h3>

            <div className={styles.contactSocialContainer}>
              <IoIosMail />
              <p className={styles.contactInfo}>
                <a href={`mailto:${EMAIL_CONTACT}`}>
                  {EMAIL_CONTACT}
                </a>
              </p>
            </div>
          </div>

          <h3 className={styles.emailTitle}>Siguenos</h3>

          <div className={styles.contactSocialMediaContainer}>
            {SOCIAL_MEDIA.map((element, index) => {
              const IconComponent = socialIconMap[element.name];

              return (
                <div key={index} className={styles.contactSocialContainer}>
                  <IconComponent />

                  <p className={styles.contactInfo}>
                    <a href={element.url}>{element.name}</a>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
