import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import styles from "./HomePage.module.css";

/* ========================================
   Step Data
   ======================================== */

const STEPS = [
  {
    number: 1,
    title: "Cadastre sua clinica ou perfil",
    description:
      "Crie sua conta gratuitamente e aguarde a aprovacao da plataforma.",
    icon: "clipboard",
  },
  {
    number: 2,
    title: "Encontre especialistas",
    description:
      "Busque por especialistas disponiveis na sua regiao e especialidade.",
    icon: "search",
  },
  {
    number: 3,
    title: "Agende o atendimento",
    description:
      "Escolha o melhor horario e confirme o agendamento com poucos cliques.",
    icon: "calendar",
  },
  {
    number: 4,
    title: "Receba o laudo",
    description:
      "O especialista realiza o exame e emite o laudo diagnostico diretamente na plataforma.",
    icon: "file-text",
  },
] as const;

/* ========================================
   Benefits Data
   ======================================== */

const CLINIC_BENEFITS = [
  {
    text: "Encontre especialistas qualificados na sua regiao",
    icon: "search",
  },
  {
    text: "Acompanhe o status dos exames em tempo real",
    icon: "activity",
  },
  {
    text: "Receba laudos digitais diretamente na plataforma",
    icon: "file-text",
  },
  {
    text: "Gerencie pacientes e solicitacoes de forma centralizada",
    icon: "layout",
  },
] as const;

const SPECIALIST_BENEFITS = [
  {
    text: "Receba solicitacoes de clinicas na sua area de cobertura",
    icon: "bell",
  },
  {
    text: "Gerencie sua agenda e disponibilidade com flexibilidade",
    icon: "calendar",
  },
  {
    text: "Emita laudos de forma digital e organizada",
    icon: "file-text",
  },
  {
    text: "Construa sua reputacao na plataforma",
    icon: "star",
  },
] as const;

/* ========================================
   Pricing Features Data
   ======================================== */

const PRICING_FEATURES = [
  {
    title: "Pague por laudo",
    description:
      "A cobranca acontece apenas quando o especialista emite o laudo. Sem exame, sem custo.",
    icon: "file-check",
  },
  {
    title: "Sem mensalidade",
    description:
      "Nao existe assinatura nem taxa fixa. Voce paga somente pelo que usar.",
    icon: "wallet",
  },
  {
    title: "Pagamento via PIX",
    description:
      "Cobrado automaticamente via PIX apos a emissao do laudo. Rapido, seguro e sem burocracia.",
    icon: "zap",
  },
] as const;

/* ========================================
   Stats Data
   ======================================== */

const STATS = [
  { value: "100+", label: "Clinicas", icon: "building" },
  { value: "50+", label: "Especialistas", icon: "users" },
  { value: "1.000+", label: "Laudos emitidos", icon: "file-check" },
  { value: "15+", label: "Cidades atendidas", icon: "map-pin" },
] as const;

/* ========================================
   SVG Icon Components (Lucide-style)
   ======================================== */

function Icon({ name }: { name: string }) {
  const props = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "clipboard":
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      );
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "file-text":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case "activity":
      return (
        <svg {...props}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "layout":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <line x1="8" y1="6" x2="8" y2="6" />
          <line x1="12" y1="6" x2="12" y2="6" />
          <line x1="16" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="8" y2="10" />
          <line x1="12" y1="10" x2="12" y2="10" />
          <line x1="16" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="8" y2="14" />
          <line x1="12" y1="14" x2="12" y2="14" />
          <line x1="16" y1="14" x2="16" y2="14" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "file-check":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...props}>
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
        </svg>
      );
    case "zap":
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "receipt":
      return (
        <svg {...props}>
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 17.5v-11" />
        </svg>
      );
    default:
      return null;
  }
}

/* ========================================
   Benefit List Component
   ======================================== */

function BenefitList({
  items,
}: {
  items: readonly { text: string; icon: string }[];
}) {
  return (
    <ul className={styles.benefitsList}>
      {items.map((item) => (
        <li key={item.text} className={styles.benefitItem}>
          <span className={styles.benefitIcon}>
            <Icon name={item.icon} />
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

/* ========================================
   HomePage Component
   ======================================== */

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className={styles.heroBadge}>
                Plataforma para veterinarios
              </span>
              <h1 className={styles.heroTitle}>
                Conectamos clinicas veterinarias a{" "}
                <span className={styles.heroHighlight}>
                  especialistas em diagnostico por imagem
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                Encontre especialistas qualificados, agende exames e receba
                laudos de forma rapida e segura. Tudo em uma unica plataforma
                pensada para o dia a dia da clinica veterinaria.
              </p>
              <div className={styles.heroActions}>
                <Link to="/cadastro/clinica" className={styles.btnPrimaryLarge}>
                  Cadastrar minha clinica <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  to="/cadastro/especialista"
                  className={styles.btnOutlineLarge}
                >
                  Sou especialista <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <img
                src="/images/hero-vet.jpg"
                alt="Veterinaria realizando exame de imagem em clinica moderna"
                className={styles.heroImage}
                width={1200}
                height={800}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} id="como-funciona">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Como funciona</h2>
            <p className={styles.sectionSubtitle}>
              Em quatro passos simples, sua clinica acessa diagnostico por imagem
              de qualidade.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepIconCircle} aria-hidden="true">
                  <Icon name={step.icon} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Social Proof / Stats Section */}
      <section className={styles.stats}>
        <Container>
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statIcon} aria-hidden="true">
                  <Icon name={stat.icon} />
                </div>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* For Clinics Section */}
      <section className={styles.forClinics} id="para-clinicas">
        <Container>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceImageWrapper}>
              <img
                src="/images/vet-ultrasound.jpg"
                alt="Veterinario realizando ultrassom em animal de estimacao"
                className={styles.audienceImage}
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <div className={styles.audienceContent}>
              <h2 className={styles.audienceTitle}>
                Simplifique o acesso a exames de imagem
              </h2>
              <p className={styles.audienceDescription}>
                Encontre e conecte-se com os melhores especialistas em
                diagnostico por imagem da sua regiao. Gerencie tudo de forma
                centralizada.
              </p>
              <BenefitList items={CLINIC_BENEFITS} />
              <Link to="/cadastro/clinica" className={styles.btnPrimaryLarge}>
                Cadastrar minha clinica <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* For Specialists Section */}
      <section className={styles.forSpecialists} id="para-especialistas">
        <Container>
          <div
            className={`${styles.audienceGrid} ${styles.audienceGridReversed}`}
          >
            <div className={styles.audienceContent}>
              <h2 className={styles.audienceTitle}>
                Amplie sua atuacao profissional
              </h2>
              <p className={styles.audienceDescription}>
                Conecte-se com clinicas que precisam da sua expertise. Gerencie
                sua agenda e construa sua reputacao como especialista.
              </p>
              <BenefitList items={SPECIALIST_BENEFITS} />
              <Link
                to="/cadastro/especialista"
                className={styles.btnPrimaryLarge}
              >
                Cadastrar como especialista{" "}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className={styles.audienceImageWrapper}>
              <img
                src="/images/vet-specialist.jpg"
                alt="Especialista veterinario analisando imagens diagnosticas"
                className={styles.audienceImage}
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing} id="cobranca">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Cobranca simples e transparente
            </h2>
            <p className={styles.sectionSubtitle}>
              A Vetra utiliza o modelo <strong>taxa por laudo</strong>. A clinica
              so e cobrada quando o especialista emite o laudo diagnostico.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {PRICING_FEATURES.map((feature) => (
              <div key={feature.title} className={styles.pricingCard}>
                <div className={styles.pricingIconCircle} aria-hidden="true">
                  <Icon name={feature.icon} />
                </div>
                <h3 className={styles.pricingCardTitle}>{feature.title}</h3>
                <p className={styles.pricingCardDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.pricingNote}>
            <div className={styles.pricingNoteIcon} aria-hidden="true">
              <Icon name="receipt" />
            </div>
            <div>
              <p className={styles.pricingNoteTitle}>Como funciona o valor?</p>
              <p className={styles.pricingNoteText}>
                O preco de cada exame e definido pela plataforma com base no tipo de
                exame. A Vetra retém uma pequena taxa de servico e o restante e
                repassado ao especialista. Tudo detalhado na sua area de billing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <Container>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Pronto para comecar?</h2>
            <p className={styles.ctaSubtitle}>
              Cadastre-se gratuitamente e comece a usar a Vetra hoje mesmo.
              Junte-se a centenas de profissionais que ja confiam na plataforma.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/cadastro/clinica" className={styles.btnLightLarge}>
                Sou clinica <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/cadastro/especialista"
                className={styles.btnOutlineLight}
              >
                Sou especialista <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
