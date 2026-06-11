import type React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import styles from "./Footer.module.css";

const PORTAL_URL = import.meta.env.VITE_PORTAL_URL || "http://localhost:5173";

const FOOTER_LINKS = [
  { label: "Como funciona", href: "#como-funciona", isAnchor: true },
  { label: "Cadastro Clinica", to: "/cadastro/clinica", isAnchor: false },
  { label: "Cadastro Especialista", to: "/cadastro/especialista", isAnchor: false },
  { label: "Entrar", href: `${PORTAL_URL}/login`, isAnchor: true },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.brandName}>Vetra</span>
            <span className={styles.tagline}>
              Diagnostico por imagem veterinario
            </span>
          </div>

          <nav className={styles.links} aria-label="Links do rodape">
            {FOOTER_LINKS.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.link}
                  onClick={
                    link.href.startsWith("http")
                      ? (e: React.MouseEvent) => {
                          e.preventDefault();
                          window.location.href = link.href;
                        }
                      : undefined
                  }
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            {currentYear} Vetra. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
