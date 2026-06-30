import type { Metadata } from "next";
import Hero from "../components/Hero";
import { ImageTextSection } from "../components/ImageTextSection";

export const metadata: Metadata = {
  title: "Empresa",
};

function Empresa() {
  return (
    <>
      <Hero title="Empresa" image="/img/hero/maxintsystems-9.jpg" />
      <div className="w-4/5 mx-auto mt-20">
        <h2 className="uppercase">Max Integration Security Systems</h2>
        <p className="text-justify">
          Es una empresa ecuatoriana especializada en el diseño, suministro e
          implementación de soluciones integrales de seguridad electrónica para
          hogares, empresas, industrias e instituciones. Desde nuestros inicios
          hemos trabajado con el compromiso de brindar tecnología confiable,
          innovación y un servicio de excelencia, respaldados por un equipo
          técnico altamente capacitado y en constante actualización. A lo largo
          de nuestra trayectoria, hemos desarrollado proyectos que incorporan
          sistemas de videovigilancia, control de acceso, biometría, alarmas,
          redes, cableado estructurado e infraestructura tecnológica, ofreciendo
          soluciones personalizadas que se adaptan a las necesidades específicas
          de cada cliente. La evolución constante de la tecnología impulsa a Max
          Integration Security Systems a mantenerse a la vanguardia,
          incorporando equipos y plataformas de fabricantes reconocidos a nivel
          mundial para garantizar altos estándares de calidad, seguridad y
          rendimiento. Nuestro objetivo es proporcionar herramientas que
          permitan proteger personas, bienes e información, contribuyendo al
          crecimiento y la tranquilidad de nuestros clientes. Nuestro compromiso
          es construir relaciones de confianza a largo plazo, ofreciendo
          asesoría especializada, productos de calidad, instalación profesional,
          garantía y soporte técnico oportuno. Cada proyecto representa una
          oportunidad para demostrar nuestra dedicación a la excelencia y
          consolidarnos como un aliado estratégico en soluciones de seguridad y
          tecnología en el Ecuador.
        </p>
      </div>
      <ImageTextSection
        id="empresa-mision"
        title="Misión"
        imageSrc="/img/hero/maxintsystems-10.jpg"
        imagePosition="left"
        content={
          <>
            <p className="text-justify">
              Brindar soluciones integrales de seguridad electrónica y
              tecnología que protejan a personas, hogares, empresas e
              instituciones, mediante la implementación de equipos de alta
              calidad, innovación constante y un servicio profesional que genere
              confianza, tranquilidad y valor para nuestros clientes.
            </p>
          </>
        }
      />
      <ImageTextSection
        id="empresa-vision"
        title="Vision"
        imageSrc="/img/hero/maxintsystems-9.jpg"
        imagePosition="right"
        content={
          <>
            <p className="text-justify">
              Ser una empresa líder en soluciones de seguridad electrónica y
              tecnología en el Ecuador, reconocida por la calidad de nuestros
              servicios, la innovación de nuestras soluciones y el compromiso
              con la satisfacción de nuestros clientes, contribuyendo al
              desarrollo de entornos más seguros e inteligentes.
            </p>
          </>
        }
      />
      <ImageTextSection
        id="empresa-valores"
        title="Nuestros valores"
        imageSrc="/img/hero/maxintsystems-8.jpg"
        imagePosition="left"
        content={
          <>
            <ul className="text-justify">
              <li>
                <strong>Compromiso</strong> — Cumplimos cada proyecto con
                responsabilidad y profesionalismo.
              </li>
              <li>
                <strong>Confianza</strong> — Construimos relaciones
                transparentes y duraderas con nuestros clientes.
              </li>
              <li>
                <strong>Innovación</strong> — Incorporamos tecnología de última
                generación para ofrecer soluciones eficientes.
              </li>
              <li>
                <strong>Calidad</strong> — Trabajamos con marcas reconocidas y
                altos estándares de instalación.
              </li>
              <li>
                <strong>Servicio</strong> — La satisfacción del cliente es el
                centro de cada decisión.
              </li>
              <li>
                <strong>Excelencia</strong> — Mejoramos continuamente para
                ofrecer resultados superiores.
              </li>
            </ul>
          </>
        }
      />
    </>
  );
}

export default Empresa;
