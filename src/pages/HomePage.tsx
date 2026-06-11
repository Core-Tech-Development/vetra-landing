import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import styles from "./HomePage.module.css";

const STEPS = [
  {
    number: 1,
    title: "Cadastre sua clinica ou perfil",
    description:
      "Crie sua conta gratuitamente e aguarde a aprovacao da plataforma.",
  },
  {
    number: 2,
    title: "Encontre especialistas",
    description:
      "Busque por especialistas disponiveis na sua regiao e especialidade.",
  },
  {
    number: 3,
    title: "Agende o atendimento",
    description:
      "Escolha o melhor horario e confirme o agendamento com poucos cliques.",
  },
  {
    number: 4,
    title: "Receba o laudo",
    description:
      "O especialista realiza o exame e emite o laudo diagnostico diretamente na plataforma.",
  },
] as const;

const CLINIC_BENEFITS = [
  "Encontre especialistas qualificados na sua regiao",
  "Acompanhe o status dos exames em tempo real",
  "Receba laudos digitais diretamente na plataforma",
  "Gerencie pacientes e solicitacoes de forma centralizada",
] as const;

const SPECIALIST_BENEFITS = [
  "Receba solicitacoes de clinicas na sua area de cobertura",
  "Gerencie sua agenda e disponibilidade com flexibilidade",
  "Emita laudos de forma digital e organizada",
  "Construa sua reputacao na plataforma",
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BenefitList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.benefitsList}>
      {items.map((item) => (
        <li key={item} className={styles.benefitItem}>
          <span className={styles.benefitIcon}>
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Conectamos clinicas veterinarias a especialistas em diagnostico por
              imagem
            </h1>
            <p className={styles.heroSubtitle}>
              Encontre especialistas qualificados, agende exames e receba laudos
              de forma rapida e segura.
            </p>
            <div className={styles.heroActions}>
              <Link to="/cadastro/clinica" className={styles.btnPrimaryLarge}>
                Cadastrar minha clinica
              </Link>
              <Link
                to="/cadastro/especialista"
                className={styles.btnOutlineLarge}
              >
                Sou especialista
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="como-funciona">
        <Container>
          <h2 className={styles.sectionTitle}>Como funciona</h2>
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* For Clinics Section */}
      <section className={styles.forClinics} id="para-clinicas">
        <Container>
          <div className={styles.audienceContent}>
            <h2 className={styles.audienceTitle}>
              Simplifique o acesso a exames de imagem
            </h2>
            <BenefitList items={CLINIC_BENEFITS} />
            <Link to="/cadastro/clinica" className={styles.btnPrimaryLarge}>
              Cadastrar minha clinica
            </Link>
          </div>
        </Container>
      </section>

      {/* For Specialists Section */}
      <section className={styles.forSpecialists} id="para-especialistas">
        <Container>
          <div className={styles.audienceContent}>
            <h2 className={styles.audienceTitle}>
              Amplie sua atuacao profissional
            </h2>
            <BenefitList items={SPECIALIST_BENEFITS} />
            <Link
              to="/cadastro/especialista"
              className={styles.btnPrimaryLarge}
            >
              Cadastrar como especialista
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <Container>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Pronto para comecar?</h2>
            <p className={styles.ctaSubtitle}>
              Cadastre-se gratuitamente e comece a usar a Vetra.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/cadastro/clinica" className={styles.btnPrimaryLarge}>
                Sou clinica
              </Link>
              <Link
                to="/cadastro/especialista"
                className={styles.btnOutlineLarge}
              >
                Sou especialista
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
