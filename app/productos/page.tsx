import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Productos",
};

function Productos() {
  return (
    <>
      <Hero title="Productos" image="/img/hero/maxintsystems-7.jpg" />
      Productos
    </>
  );
}

export default Productos;
