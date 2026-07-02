import type { Metadata } from "next";
import { Bell, Camera, Fingerprint, Zap } from "lucide-react";
import Hero from "./components/Hero";
import { ImageTextSection } from "./components/ImageTextSection";
import { FeatureCardsSection } from "./components/FeatureCardsSection";
import { GallerySection } from "./components/GallerySection";
import Image from "next/image";
import { basePath } from "@/lib/basePath";
import { Carousel } from "./components/Carousel";
import FeaturedProducts from "./components/FeaturedProducts";

export const metadata: Metadata = {
  title: "Home | MAXINTSYSTEMS",
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(3000);
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

  const galleryImages = [
    {
      id: 1,
      src: "/img/hero/maxintsystems-1.jpg",
      alt: "Instalación de cámaras de seguridad",
      title: "Videovigilancia",
    },
    {
      id: 2,
      src: "/img/hero/maxintsystems-2.jpg",
      alt: "Control de acceso",
      title: "Control de acceso",
    },
    {
      id: 3,
      src: "/img/hero/maxintsystems-3.jpg",
      alt: "Seguridad empresarial",
      title: "Empresas",
    },
    {
      id: 4,
      src: "/img/hero/maxintsystems-4.jpg",
      alt: "Seguridad para hogares",
      title: "Hogares",
    },
    {
      id: 5,
      src: "/img/hero/maxintsystems-5.jpg",
      alt: "Seguridad para hogares",
      title: "Hogares",
    },
    {
      id: 6,
      src: "/img/hero/maxintsystems-6.jpg",
      alt: "Seguridad para hogares",
      title: "Hogares",
    },
    {
      id: 7,
      src: "/img/hero/maxintsystems-7.jpg",
      alt: "Seguridad para hogares",
      title: "Hogares",
    },
    {
      id: 8,
      src: "/img/hero/maxintsystems-8.jpg",
      alt: "Seguridad para hogares",
      title: "Hogares",
    },
  ];

  const clients = [
    {
      id: 1,
      content: (
        <Image
          src={`${basePath}/img/clients/cliente-1.png`}
          alt="Cliente 1"
          width={180}
          height={90}
          className="carousel-client-logo"
        />
      ),
    },
    {
      id: 2,
      content: (
        <Image
          src={`${basePath}/img/clients/cliente-2.png`}
          alt="Cliente 2"
          width={180}
          height={90}
          className="carousel-client-logo"
        />
      ),
    },
    {
      id: 3,
      content: (
        <Image
          src={`${basePath}/img/clients/cliente-3.png`}
          alt="Cliente 2"
          width={180}
          height={90}
          className="carousel-client-logo"
        />
      ),
    },
    {
      id: 4,
      content: (
        <Image
          src={`${basePath}/img/clients/cliente-4.png`}
          alt="Cliente 2"
          width={180}
          height={90}
          className="carousel-client-logo"
        />
      ),
    },
    {
      id: 5,
      content: (
        <Image
          src={`${basePath}/img/clients/cliente-5.png`}
          alt="Cliente 2"
          width={180}
          height={90}
          className="carousel-client-logo"
        />
      ),
    },
    {
      id: 6,
      content: (
        <Image
          src={`${basePath}/img/clients/cliente-6.png`}
          alt="Cliente 2"
          width={180}
          height={90}
          className="carousel-client-logo"
        />
      ),
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
      <FeaturedProducts />
      <FeatureCardsSection title="Nuestros servicios" items={services} />
      <GallerySection
        title="Galería"
        description="Conoce algunos de nuestros trabajos, instalaciones y soluciones implementadas."
        images={galleryImages}
      />
      <Carousel
        title="Nuestros clientes"
        description="Empresas que confían en nuestras soluciones de seguridad."
        items={clients}
        slidesPerView={5}
        spaceBetween={5}
        autoplay
        delay={3000}
      />
    </>
  );
}
