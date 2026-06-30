import type { Metadata } from "next";
import { Bell, Camera, Check, Fingerprint, Zap } from "lucide-react";
import Hero from "./components/Hero";
import { ImageTextSection } from "./components/ImageTextSection";
import { FeatureCardsSection } from "./components/FeatureCardsSection";

export const metadata: Metadata = {
  title: "Home | MAXINTSYSTEMS",
};

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Cámaras de seguridad",
      link: "/servicios/camaras-de-seguridad",
      description:
        "Instalación de sistemas CCTV e IP para hogares, negocios y empresas.",
      icon: Camera,
    },
    {
      id: 2,
      title: "Control de acceso",
      link: "/servicios/control-de-acceso",
      description:
        "Soluciones con tarjetas, claves, biometría y acceso inteligente.",
      icon: Fingerprint,
    },
    {
      id: 3,
      title: "Alarmas inteligentes",
      link: "/servicios/alarmas-inteligentes",
      description:
        "Sistemas de alarma para proteger tu propiedad en tiempo real.",
      icon: Bell,
    },
    {
      id: 4,
      title: "Instalaciones eléctricas",
      description:
        "Instalaciones seguras, mantenimiento y soporte técnico especializado.",
      icon: Zap,
    },
  ];

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
              Protegemos empresas, oficinas e industrias con soluciones de
              seguridad diseñadas según las necesidades de cada espacio.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Videovigilancia con cámaras IP y CCTV</li>
              <li>Control de acceso biométrico y por credenciales</li>
              <li>Sistemas de alarmas y monitoreo preventivo</li>
              <li>Instalación técnica, mantenimiento y soporte</li>
            </ul>

            <p>
              Implementamos tecnología confiable para ayudarte a cuidar tus
              activos, tu personal y tus operaciones diarias.
            </p>

            <p>
              Conoce más sobre nuestros <a href="/servicios">servicios</a>.
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
              Convierte tu hogar en un espacio más seguro con soluciones
              tecnológicas que te permiten proteger a tu familia y mantener el
              control de tu propiedad desde cualquier lugar.
            </p>

            <ul className="pl-6 space-y-2">
              <li>Cámaras de seguridad con acceso remoto desde tu celular</li>
              <li>Sistemas de alarmas para prevención y respuesta inmediata</li>
              <li>Videoporteros y control inteligente de accesos</li>
              <li>Instalación profesional y soporte técnico especializado</li>
            </ul>

            <p>
              Diseñamos cada proyecto de acuerdo con las características de tu
              hogar, utilizando equipos de alta calidad para brindarte mayor
              tranquilidad y protección todos los días.
            </p>

            <p>
              Descubre todas nuestras soluciones para el hogar en la sección de{" "}
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
      <FeatureCardsSection title="Nuestros servicios" items={services} />
    </>
  );
}
