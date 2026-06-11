import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterChoicePage } from "../pages/RegisterChoicePage";
import { RegisterClinicPage } from "../pages/RegisterClinicPage";
import { RegisterSpecialistPage } from "../pages/RegisterSpecialistPage";
import { RegistrationSuccessPage } from "../pages/RegistrationSuccessPage";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function AppRoutes() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<RegisterChoicePage />} />
          <Route path="/cadastro/clinica" element={<RegisterClinicPage />} />
          <Route
            path="/cadastro/especialista"
            element={<RegisterSpecialistPage />}
          />
          <Route
            path="/cadastro/sucesso"
            element={<RegistrationSuccessPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
