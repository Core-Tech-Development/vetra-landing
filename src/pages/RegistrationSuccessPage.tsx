import { Link, useSearchParams } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import styles from "./RegistrationSuccessPage.module.css";

function CheckCircleIcon() {
  return (
    <svg
      className={styles.icon}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="38" stroke="#1F6F5B" strokeWidth="3" />
      <circle cx="40" cy="40" r="32" fill="#EEF5F1" />
      <path
        d="M28 40l8 8 16-16"
        stroke="#1F6F5B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RegistrationSuccessPage() {
  const [searchParams] = useSearchParams();
  const tipo = searchParams.get("tipo") ?? "clinica";

  const tipoLabel = tipo === "especialista" ? "especialista" : "clinica";

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.content}>
          <CheckCircleIcon />

          <h1 className={styles.title}>Cadastro realizado com sucesso!</h1>

          <p className={styles.message}>
            Seu cadastro de {tipoLabel} foi recebido e esta em analise. Voce
            recebera um e-mail quando sua conta for aprovada.
          </p>

          <Link to="/" className={styles.buttonLink}>
            <Button variant="primary" size="lg">
              Voltar para a pagina inicial
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
