import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Empresa",
};

function Empresa() {
  return (
    <>
      <Hero title="Empresa" image="/img/hero/maxintsystems-9.jpg" />
      Empresa
    </>
  );
}

export default Empresa;
