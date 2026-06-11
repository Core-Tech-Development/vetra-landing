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
        <rect
          x="4"
          y="14"
          width="40"
          height="28"
          rx="3"
          stroke="#1F6F5B"
          strokeWidth="2"
        />
        <path
          d="M16 14V10a8 8 0 0116 0v4"
          stroke="#1F6F5B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 24v8M20 28h8"
          stroke="#1F6F5B"
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
        <circle cx="24" cy="16" r="8" stroke="#1F6F5B" strokeWidth="2" />
        <path
          d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16"
          stroke="#1F6F5B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 34v4M28 36h4"
          stroke="#1F6F5B"
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
