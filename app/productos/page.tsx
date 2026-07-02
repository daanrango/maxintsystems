import type { Metadata } from "next";
import Hero from "../components/Hero";
import ProductosClient from "./ProductosClient";

export const metadata: Metadata = {
  title: "Productos",
};

export default function Productos() {
  return (
    <>
      <Hero title="Productos" image="/img/hero/maxintsystems-7.jpg" />
      <ProductosClient />
    </>
  );
}
