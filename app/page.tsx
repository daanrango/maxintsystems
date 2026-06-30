import type { Metadata } from "next";
import Hero from "./components/Hero";
import { ImageTextSection } from "./components/ImageTextSection";

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
      <ImageTextSection
        id="empresa"
        title="Seguridad para Empresas"
        imageSrc="/img/hero/maxintsystems-3.jpg"
        imagePosition="left"
        content={
          <>
            <p>
              Diseñamos soluciones integrales para empresas de cualquier tamaño.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Cámaras IP</li>
              <li>Biometría</li>
              <li>Control de acceso</li>
              <li>Alarmas</li>
            </ul>

            <p>
              Descubre todos nuestros{" "}
              <a
                href="/servicios"
                className="font-semibold text-yellow-500 hover:underline"
              >
                servicios
              </a>
              .
            </p>
          </>
        }
      />
      <ImageTextSection
        id="hogares"
        title="Seguridad para Hogares"
        imageSrc="/img/hero/maxintsystems-4.jpg"
        imagePosition="right"
        content={
          <>
            <p>
              Diseñamos soluciones integrales para hogares de cualquier tamaño.
            </p>

            <ul className="pl-6 space-y-2">
              <li>Cámaras IP</li>
              <li>Biometría</li>
              <li>Control de acceso</li>
              <li>Alarmas</li>
            </ul>

            <p>
              Descubre todos nuestros{" "}
              <a
                href="/servicios"
                className="font-semibold text-yellow-500 hover:underline"
              >
                servicios
              </a>
              .
            </p>
          </>
        }
      />
    </>
  );
}
