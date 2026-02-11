import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface FooterElement {
  title: string;
  text: string;
  textColor: string;
  link: string | null;
  icons: {
    name: string;
    url: string;
  }[];
}

const socialIconMap: Record<string, React.ComponentType> = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
};

const footerElements: FooterElement[] = [
  {
    title: "ENZIQUIM",
    text: "Visitanos para concer más acerca de nosotros y del resto de las lineas de productos",
    textColor: "",
    link: "https://enziquim.com.mx/",
    icons: [],
  },
  {
    title: "Derechos reservados",
    text: `Copyright ©${new Date().getFullYear()}`,
    textColor: "Enzimas y Productos Químicos S.A. de C.V.",
    link: null,
    icons: [],
  },
  {
    title: "Síguenos",
    text: "Redes sociales",
    textColor: "",
    link: null,
    icons: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/enziquim",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/enziquim/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/enziquim/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {footerElements.map((item, index) => (
          <div key={index} className={styles.footerItem}>
            <h2 className={styles.footerItemTitle}>{item.title}</h2>
            <p className={styles.footerItemText}>
              {item.text}
              {item.textColor ? (
                <span className={styles.footerItemTextColor}>
                  {item.textColor}
                </span>
              ) : null}
              <a
                className={styles.footerItemLink}
                href={item.link ? item.link : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.link}
              </a>
            </p>

            <div className={styles.socialIcons}>
              {item.icons.map((icon, index) => {
                const IconComponent = socialIconMap[icon.name];

                if (!IconComponent) return null;

                return (
                  <a
                    key={index}
                    href={icon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon.name}
                    className={styles.socialIcon}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
