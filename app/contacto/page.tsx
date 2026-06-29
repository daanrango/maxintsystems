import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Contacto",
};

function Contacto() {
  return (
    <>
      <Hero title="Contacto" image="/img/hero/maxintsystems-10.jpg" />
      Contacto
    </>
  );
}

export default Contacto;
