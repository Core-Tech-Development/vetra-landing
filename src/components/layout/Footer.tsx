import type React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import styles from "./Footer.module.css";

const PORTAL_URL = import.meta.env.VITE_PORTAL_URL || "http://localhost:5173";

const FOOTER_NAV_LINKS = [
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
        <div className={styles.columns}>
          {/* Column 1: Brand */}
          <div className={styles.brand}>
            <div className={styles.brandHeader}>
              <img src="/logo.png" alt="" className={styles.brandLogo} />
              <span className={styles.brandName}>Vetra</span>
            </div>
            <p className={styles.tagline}>
              Diagnostico por imagem veterinario
            </p>
          </div>

          {/* Column 2: Links */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Links</h3>
            <nav className={styles.links} aria-label="Links do rodape">
              {FOOTER_NAV_LINKS.map((link) =>
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

          {/* Column 3: Contato */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contato</h3>
            <div className={styles.contactList}>
              <a href="mailto:contato@vetra.com.br" className={styles.link}>
                contato@vetra.com.br
              </a>
              <div className={styles.socialIcons}>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:contato@vetra.com.br"
                  className={styles.socialLink}
                  aria-label="Email"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="22,4 12,13 2,4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
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
