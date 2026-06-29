import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Galeria",
};

function Galeria() {
  return (
    <>
      <Hero title="Galeria" image="/img/hero/maxintsystems-8.jpg" />
      Galeria
    </>
  );
}

export default Galeria;
