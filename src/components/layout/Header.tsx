import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import styles from "./Header.module.css";

const PORTAL_URL = import.meta.env.VITE_PORTAL_URL || "http://localhost:5173";

const NAV_ITEMS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para Clinicas", href: "#para-clinicas" },
  { label: "Para Especialistas", href: "#para-especialistas" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label="Vetra - Pagina inicial">
            <img src="/logo.png" alt="" className={styles.logoImg} />
            Vetra
          </Link>

          <nav className={styles.nav} aria-label="Navegacao principal">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a
              href={`${PORTAL_URL}/login`}
              className={styles.btnGhost}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `${PORTAL_URL}/login`;
              }}
            >
              Entrar
            </a>
            <Link to="/cadastro" className={styles.btnPrimary}>
              Cadastre-se
            </Link>
          </div>

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <svg
                className={styles.hamburgerIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className={styles.hamburgerIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={mobileOpen ? styles.mobileMenuOpen : styles.mobileMenu}
        role="navigation"
        aria-label="Menu mobile"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <div className={styles.mobileActions}>
          <a
            href={`${PORTAL_URL}/login`}
            className={styles.btnGhost}
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              window.location.href = `${PORTAL_URL}/login`;
            }}
          >
            Entrar
          </a>
          <Link
            to="/cadastro"
            className={styles.btnPrimary}
            onClick={closeMenu}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </header>
  );
}
