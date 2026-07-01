import type { Metadata } from "next";
import Hero from "../components/Hero";
import { ImageTextSection } from "../components/ImageTextSection";
import {
  Bell,
  Cable,
  Camera,
  Fingerprint,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
};

function Servicios() {
  const services = [
    {
      id: 1,
      title: "Videovigilancia CCTV e IP",
      link: "/servicios/camaras-de-seguridad",
      description:
        "Instalación de cámaras de seguridad para monitoreo local y remoto.",
      icon: Camera,
    },
    {
      id: 2,
      title: "Control de acceso",
      link: "/servicios/control-de-acceso",
      description:
        "Sistemas con biometría, tarjetas, claves y permisos personalizados.",
      icon: Fingerprint,
    },
    {
      id: 3,
      title: "Alarmas inteligentes",
      link: "/servicios/alarmas-inteligentes",
      description:
        "Protección preventiva con sensores, sirenas y alertas en tiempo real.",
      icon: Bell,
    },
    {
      id: 4,
      title: "Cableado estructurado",
      link: "/servicios/cableado-estructurado",
      description:
        "Infraestructura ordenada para redes, cámaras, datos y comunicaciones.",
      icon: Cable,
    },
    {
      id: 5,
      title: "Seguridad integral",
      link: "/servicios/seguridad-integral",
      description:
        "Diseño de soluciones completas para hogares, empresas e industrias.",
      icon: ShieldCheck,
    },
    {
      id: 6,
      title: "Mantenimiento técnico",
      link: "/servicios/mantenimiento",
      description:
        "Revisión, soporte y optimización de sistemas de seguridad instalados.",
      icon: Wrench,
    },
  ];
  return (
    <>
      <Hero title="Servicios" image="/img/hero/maxintsystems-6.jpg" />
      <ImageTextSection
        id="asesoria"
        title="Asesoría, instalación y soporte"
        imageSrc="/img/hero/maxintsystems-6.jpg"
        imagePosition="left"
        content={
          <>
            <p>
              No solo instalamos equipos: analizamos tus necesidades, revisamos
              el espacio y diseñamos una solución adecuada para tu nivel de
              seguridad, presupuesto y tipo de propiedad.
            </p>

            <ul className="pl-6 space-y-2">
              <li>Evaluación técnica del sitio</li>
              <li>Recomendación de equipos según el proyecto</li>
              <li>Instalación profesional y configuración</li>
              <li>Capacitación básica de uso</li>
              <li>Soporte y mantenimiento posterior</li>
            </ul>
          </>
        }
      />

      <ImageTextSection
        id="proceso"
        title="Nuestro proceso de trabajo"
        imageSrc="/img/hero/maxintsystems-7.jpg"
        imagePosition="right"
        content={
          <>
            <p>
              Trabajamos con un proceso claro para garantizar instalaciones
              ordenadas, funcionales y pensadas para durar.
            </p>

            <ul className="pl-6 space-y-2">
              <li>Escuchamos tu necesidad y objetivos de seguridad</li>
              <li>Realizamos una revisión técnica del espacio</li>
              <li>Diseñamos la solución más adecuada</li>
              <li>Instalamos, configuramos y probamos los equipos</li>
              <li>Entregamos el sistema funcionando y listo para usar</li>
            </ul>
          </>
        }
      />

      <ImageTextSection
        id="contacto-servicios"
        title="¿Necesitas una solución personalizada?"
        imageSrc="/img/hero/maxintsystems-8.jpg"
        imagePosition="left"
        content={
          <>
            <p>
              Cada hogar, empresa o local comercial tiene necesidades
              diferentes. Por eso diseñamos soluciones a medida, combinando
              cámaras, alarmas, control de acceso e infraestructura tecnológica.
            </p>

            <p>
              Cuéntanos qué necesitas proteger y te ayudamos a elegir la mejor
              alternativa.
            </p>

            <p>
              <a
                href="/contacto"
                className="font-semibold text-yellow-500 hover:underline"
              >
                Solicitar asesoría
              </a>
            </p>
          </>
        }
      />
    </>
  );
}

export default Servicios;
