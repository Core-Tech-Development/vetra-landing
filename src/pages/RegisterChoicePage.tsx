import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import styles from "./RegisterChoicePage.module.css";

const CHOICES = [
  {
    title: "Clinica Veterinaria",
    description:
      "Cadastre sua clinica para encontrar especialistas em diagnostico por imagem na sua regiao.",
    buttonLabel: "Cadastrar clinica",
    to: "/cadastro/clinica",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="var(--color-surface-muted)" />
        <rect
          x="12"
          y="18"
          width="24"
          height="18"
          rx="2"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
        <path
          d="M18 18v-3a6 6 0 0112 0v3"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 24v6M21 27h6"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Especialista",
    description:
      "Cadastre-se como especialista para receber solicitacoes de clinicas e gerenciar sua agenda.",
    buttonLabel: "Cadastrar como especialista",
    to: "/cadastro/especialista",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" fill="var(--color-surface-muted)" />
        <circle cx="24" cy="18" r="6" stroke="var(--color-primary)" strokeWidth="2" />
        <path
          d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 30v4M28 32h4"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

export function RegisterChoicePage() {
  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Cadastre-se na Vetra</h1>
          <p className={styles.subtitle}>Escolha o tipo de cadastro:</p>

          <div className={styles.cardsGrid}>
            {CHOICES.map((choice) => (
              <div key={choice.to} className={styles.card}>
                <div className={styles.cardIcon}>{choice.icon}</div>
                <h2 className={styles.cardTitle}>{choice.title}</h2>
                <p className={styles.cardDescription}>{choice.description}</p>
                <Link to={choice.to} className={styles.cardButton}>
                  {choice.buttonLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
