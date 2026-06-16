import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { Container } from "../components/layout/Container";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import { useToast } from "../components/ui/Toast";
import { registerSpecialist } from "../api/register";
import { BRAZILIAN_STATES } from "../constants/states";
import styles from "./RegisterSpecialistPage.module.css";

const SPECIALTIES = [
  {
    value: "ABDOMINAL_ULTRASOUND",
    label: "Ultrassonografia Abdominal",
  },
  {
    value: "GESTATIONAL_ULTRASOUND",
    label: "Ultrassonografia Gestacional",
  },
  {
    value: "MUSCULOSKELETAL_ULTRASOUND",
    label: "Ultrassonografia Musculoesquelética",
  },
] as const;

const specialistSchema = z.object({
  name: z
    .string()
    .min(1, "Nome completo é obrigatório.")
    .max(255, "Nome deve ter no máximo 255 caracteres."),
  email: z
    .string()
    .min(1, "E-mail é obrigatório.")
    .email("E-mail inválido."),
  phone: z.string().optional(),
  crmv: z
    .string()
    .min(1, "CRMV é obrigatório.")
    .max(20, "CRMV deve ter no máximo 20 caracteres."),
  crmvState: z.string().min(1, "Estado do CRMV é obrigatório."),
  specialty: z.string().min(1, "Especialidade é obrigatória."),
  baseCity: z.string().optional(),
  baseState: z.string().optional(),
  maxTravelRadiusKm: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\d+$/.test(val),
      "Informe um número válido.",
    )
    .refine(
      (val) => !val || Number(val) >= 1,
      "Raio mínimo é 1 km.",
    ),
  hasOwnEquipment: z.string().min(1, "Este campo é obrigatório."),
  bio: z.string().optional(),
  password: z
    .string()
    .min(1, "Senha é obrigatória."),
    // TODO: habilitar validação de senha forte
    // .min(8, "Senha deve ter no mínimo 8 caracteres.")
    // .regex(/[A-Z]/, "Senha deve conter ao menos uma letra maiúscula.")
    // .regex(/[a-z]/, "Senha deve conter ao menos uma letra minúscula.")
    // .regex(/[0-9]/, "Senha deve conter ao menos um número.")
    // .regex(/[^A-Za-z0-9]/, "Senha deve conter ao menos um caractere especial.")
  confirmPassword: z
    .string()
    .min(1, "Confirmação de senha é obrigatória."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem.",
  path: ["confirmPassword"],
});

type SpecialistFormData = z.infer<typeof specialistSchema>;

export function RegisterSpecialistPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpecialistFormData>({
    resolver: zodResolver(specialistSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      crmv: "",
      crmvState: "",
      specialty: "",
      baseCity: "",
      baseState: "",
      maxTravelRadiusKm: "",
      hasOwnEquipment: "",
      bio: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: SpecialistFormData) {
    setIsSubmitting(true);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        crmv: data.crmv,
        crmvState: data.crmvState,
        specialty: data.specialty,
        baseCity: data.baseCity || undefined,
        baseState: data.baseState || undefined,
        maxTravelRadiusKm: data.maxTravelRadiusKm ? Number(data.maxTravelRadiusKm) : undefined,
        hasOwnEquipment: data.hasOwnEquipment === "yes",
        bio: data.bio || undefined,
        password: data.password,
      };
      await registerSpecialist(payload);
      navigate("/cadastro/sucesso?tipo=especialista");
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response?.status === 409) {
        showToast(
          "Já existe um especialista cadastrado com este CRMV.",
          "error",
        );
      } else if (
        isAxiosError(error) &&
        error.response?.data?.message
      ) {
        showToast(error.response.data.message, "error");
      } else if (error instanceof z.ZodError) {
        showToast(
          "Verifique os campos do formulário e tente novamente.",
          "error",
        );
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
            <h1 className={styles.title}>Cadastro de Especialista</h1>
            <p className={styles.subtitle}>
              Preencha seus dados profissionais para solicitar acesso à
              plataforma.
            </p>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Input
              label="Nome completo *"
              placeholder="Seu nome completo"
              error={errors.name?.message}
              {...register("name")}
            />

            <Input
              label="E-mail *"
              type="email"
              placeholder="seuemail@exemplo.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Telefone"
              type="tel"
              placeholder="(11) 99999-9999"
              error={errors.phone?.message}
              {...register("phone")}
            />

            <div className={styles.row}>
              <Input
                label="CRMV *"
                placeholder="12345"
                error={errors.crmv?.message}
                {...register("crmv")}
              />

              <Select
                label="Estado do CRMV *"
                error={errors.crmvState?.message}
                {...register("crmvState")}
              >
                <option value="">Selecione</option>
                {BRAZILIAN_STATES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </Select>
            </div>

            <Select
              label="Especialidade *"
              error={errors.specialty?.message}
              {...register("specialty")}
            >
              <option value="">Selecione a especialidade</option>
              {SPECIALTIES.map((sp) => (
                <option key={sp.value} value={sp.value}>
                  {sp.label}
                </option>
              ))}
            </Select>

            <div className={styles.row}>
              <Input
                label="Cidade base"
                placeholder="São Paulo"
                error={errors.baseCity?.message}
                {...register("baseCity")}
              />

              <Select
                label="Estado base"
                error={errors.baseState?.message}
                {...register("baseState")}
              >
                <option value="">Selecione</option>
                {BRAZILIAN_STATES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </Select>
            </div>

            <Input
              label="Raio máximo de deslocamento (km)"
              type="number"
              placeholder="Ex: 50"
              min={1}
              error={errors.maxTravelRadiusKm?.message}
              {...register("maxTravelRadiusKm")}
            />

            <Select
              label="Possui equipamento próprio *"
              error={errors.hasOwnEquipment?.message}
              {...register("hasOwnEquipment")}
            >
              <option value="">Selecione</option>
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </Select>

            <Textarea
              label="Bio / Sobre você"
              placeholder="Conte um pouco sobre sua experiência e formação..."
              rows={4}
              error={errors.bio?.message}
              {...register("bio")}
            />

            <Input
              label="Senha *"
              type="password"
              placeholder="Crie uma senha"
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

            <div className={styles.actions}>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isSubmitting}
              >
                Cadastrar como especialista
              </Button>
            </div>
          </form>

          <p className={styles.switchLink}>
            É clínica?{" "}
            <Link to="/cadastro/clinica" className={styles.link}>
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
