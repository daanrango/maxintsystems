import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Home | MAXINTSYSTEMS",
};

export default function Home() {
  return (
    <>
      <Hero
        title="MAX INTEGRATION SECURITY SYSTEMS"
        description="Tu seguridad, nuestra prioridad. Soluciones personalizadas para hogares y empresas financieras."
        image="/img/hero/maxintsystems-2.jpg"
      />
      <p>heloo wolrd</p>
    </>
  );
}
