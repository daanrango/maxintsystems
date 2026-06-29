import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Servicios",
};

function Servicios() {
  return (
    <>
      <Hero title="Servicios" image="/img/hero/maxintsystems-6.jpg" />
      Servicios
    </>
  );
}

export default Servicios;
