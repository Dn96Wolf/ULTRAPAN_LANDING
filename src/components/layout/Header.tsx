"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { t } from "@/i18n";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { NAV_ITEMS } from "@/utils/constants";

const navList = NAV_ITEMS;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú si el viewport crece (ej. rotación o resize)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Cierra con Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  function handleOpenMenu() {
    closeMobile();
    if (!mobileOpen) {
      setMobileOpen(true);
    } else {
      setMobileOpen(false);
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMobile}>
          <Image src={logo} alt="Enziquim" width={140} height={32} priority className={styles.logoImage} />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navegación principal">
          {navList.map((item, index) => (
            <Link key={index} href={item.href}>
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => handleOpenMenu()}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuOpen : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú móvil"
      >
        <div className={styles.mobileMenuInner}>
          {navList.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={closeMobile}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
