"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getProducts, type Product } from "@/lib/products";
import { basePath } from "@/lib/basePath";

export default function ProductosClient() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white py-20">
      <section className="w-4/5 mx-auto">
        <p className="text-[#e8a820] uppercase tracking-widest text-sm">
          Catálogo
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-3">
          Nuestros productos
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Soluciones en seguridad, integración tecnológica y sistemas para
          hogares, empresas e instituciones.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-[#141618] border border-[#1e2228] rounded-2xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={basePath + product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                {product.category && (
                  <span className="text-[#e8a820] text-sm">
                    {product.category}
                  </span>
                )}

                <h2 className="text-2xl font-semibold mt-2">{product.name}</h2>

                <p className="text-gray-400 mt-3">{product.description}</p>

                {product.price && (
                  <p className="text-white font-bold mt-4">${product.price}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
