import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { Container } from "../components/layout/Container";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";
import { useToast } from "../components/ui/Toast";
import { registerClinic } from "../api/register";
import { BRAZILIAN_STATES } from "../constants/states";
import styles from "./RegisterClinicPage.module.css";

const clinicSchema = z.object({
  name: z
    .string()
    .min(1, "Nome da clinica e obrigatorio.")
    .max(255, "Nome deve ter no maximo 255 caracteres."),
  document: z
    .string()
    .min(1, "CNPJ e obrigatorio.")
    .max(20, "CNPJ deve ter no maximo 20 caracteres.")
    .regex(
      /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/,
      "CNPJ invalido. Use o formato XX.XXX.XXX/XXXX-XX ou somente digitos.",
    ),
  email: z
    .string()
    .min(1, "E-mail e obrigatorio.")
    .email("E-mail invalido."),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  password: z
    .string()
    .min(1, "Senha e obrigatoria."),
    // TODO: habilitar validacao de senha forte
    // .min(8, "Senha deve ter no minimo 8 caracteres.")
    // .regex(/[A-Z]/, "Senha deve conter ao menos uma letra maiuscula.")
    // .regex(/[a-z]/, "Senha deve conter ao menos uma letra minuscula.")
    // .regex(/[0-9]/, "Senha deve conter ao menos um numero.")
    // .regex(/[^A-Za-z0-9]/, "Senha deve conter ao menos um caractere especial.")
  confirmPassword: z
    .string()
    .min(1, "Confirmacao de senha e obrigatoria."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas nao coincidem.",
  path: ["confirmPassword"],
});

type ClinicFormData = z.infer<typeof clinicSchema>;

export function RegisterClinicPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClinicFormData>({
    resolver: zodResolver(clinicSchema),
    defaultValues: {
      name: "",
      document: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: ClinicFormData) {
    setIsSubmitting(true);
    try {
      const payload = {
        name: data.name,
        document: data.document,
        email: data.email,
        phone: data.phone || undefined,
        address: data.address || undefined,
        city: data.city || undefined,
        state: data.state || undefined,
        password: data.password,
      };
      await registerClinic(payload);
      navigate("/cadastro/sucesso?tipo=clinica");
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response?.status === 409) {
        showToast(
          "Ja existe uma clinica cadastrada com este CNPJ.",
          "error",
        );
      } else if (
        isAxiosError(error) &&
        error.response?.data?.message
      ) {
        showToast(error.response.data.message, "error");
      } else {
        showToast(
          "Ocorreu um erro ao cadastrar. Tente novamente.",
          "error",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Cadastro de Clinica</h1>
            <p className={styles.subtitle}>
              Preencha os dados da sua clinica para solicitar acesso a
              plataforma.
            </p>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Input
              label="Nome da clinica *"
              placeholder="Ex: Clinica Vet Amigo"
              error={errors.name?.message}
              {...register("name")}
            />

            <Input
              label="CNPJ *"
              placeholder="XX.XXX.XXX/XXXX-XX"
              error={errors.document?.message}
              {...register("document")}
            />

            <Input
              label="E-mail *"
              type="email"
              placeholder="contato@clinica.com.br"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Senha *"
              type="password"
              placeholder="Escolha uma senha"
              error={errors.password?.message}
              {...register("password")}
            />

            <Input
              label="Confirmar senha *"
              type="password"
              placeholder="Repita a senha"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <Input
              label="Telefone"
              type="tel"
              placeholder="(11) 99999-9999"
              error={errors.phone?.message}
              {...register("phone")}
            />

            <Input
              label="Endereco"
              placeholder="Rua, numero, bairro"
              error={errors.address?.message}
              {...register("address")}
            />

            <div className={styles.row}>
              <Input
                label="Cidade"
                placeholder="Sao Paulo"
                error={errors.city?.message}
                {...register("city")}
              />

              <Select
                label="Estado"
                error={errors.state?.message}
                {...register("state")}
              >
                <option value="">Selecione</option>
                {BRAZILIAN_STATES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </Select>
            </div>

            <div className={styles.actions}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isSubmitting}
              >
                Cadastrar clinica
              </Button>
            </div>
          </form>

          <p className={styles.switchLink}>
            E especialista?{" "}
            <Link to="/cadastro/especialista" className={styles.link}>
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
