"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { t } from "@/i18n";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { NAV_ITEMS, INDUSTRIAS_SUBMENU } from "@/utils/constants";

const navList = NAV_ITEMS;
const submenuItems = INDUSTRIAS_SUBMENU;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const toggleMobileIndustries = () => {
    setMobileIndustriesOpen((v) => !v);
  };
  const handleToggleIndustries = () => setIndustriesOpen((v) => !v);
  const closeIndustries = () => setIndustriesOpen(false);

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

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
    closeIndustries(); // opcional: por si también quieres cerrar desktop dropdown
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (!next) {
        // si se va a cerrar
        setMobileIndustriesOpen(false);
      }
      // al abrir, también conviene cerrar desktop dropdown
      setIndustriesOpen(false);
      return next;
    });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMobile}>
          <Image
            src={logo}
            alt="Enziquim"
            width={140}
            height={32}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navegación principal">
          {navList.map((item) => {
            const isIndustries = item.labelKey === "nav.Industrias";

            if (!isIndustries) {
              return (
                <div className={styles.navItem} key={item.href}>
                  <Link href={item.href}>{t(item.labelKey)}</Link>
                </div>
              );
            }

            return (
              <div key="nav-industries" className={styles.dropdown}>
                <button
                  type="button"
                  className={styles.dropdownTrigger}
                  aria-haspopup="menu"
                  aria-expanded={industriesOpen}
                  onClick={handleToggleIndustries}
                >
                  <span className={styles.mobileLink}>{t(item.labelKey)}</span>
                </button>

                <div
                  className={`${styles.dropdownMenu} ${
                    industriesOpen ? styles.dropdownMenuOpen : ""
                  }`}
                  role="menu"
                >
                  {submenuItems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => closeIndustries()}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => toggleMobileMenu()}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú móvil"
      >
        <div className={styles.mobileMenuInner}>
          {navList.map((item) => {
            const isIndustries = item.labelKey === "nav.Industrias";

            // Links normales
            if (!isIndustries) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={closeMobile}
                >
                  {t(item.labelKey)}
                </Link>
              );
            }

            // Industrias (accordion)
            return (
              <div key="mobile-industries" className={styles.mobileDropdown}>
                <button
                  type="button"
                  className={styles.mobileDropdownTrigger}
                  aria-expanded={mobileIndustriesOpen}
                  aria-controls="mobile-industries-panel"
                  onClick={toggleMobileIndustries}
                >
                  <span className={styles.mobileDropdownLabel}>
                    {t(item.labelKey)}
                  </span>
                  <p
                    className={`${styles.mobileChevron} ${
                      mobileIndustriesOpen ? styles.mobileChevronOpen : ""
                    }`}
                    aria-hidden="true"
                  >
                    ▾
                  </p>
                </button>

                <div
                  id="mobile-industries-panel"
                  className={`${styles.mobileDropdownPanel} ${
                    mobileIndustriesOpen ? styles.mobileDropdownPanelOpen : ""
                  }`}
                >
                  {INDUSTRIAS_SUBMENU.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={styles.mobileSublink}
                      onClick={() => closeMobile()}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
