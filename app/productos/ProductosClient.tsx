"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { getProducts, type Product } from "@/lib/products";
import { basePath } from "@/lib/basePath";

export default function ProductosClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = products
      .map((product) => product.category)
      .filter(Boolean) as string[];

    return ["Todos", ...Array.from(new Set(uniqueCategories))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "Todos" || product.category === category;

      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.category?.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

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

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-[#1e2228] bg-[#141618] px-6 py-4 text-white outline-none placeholder:text-gray-500 focus:border-[#e8a820]"
          />

          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  category === item
                    ? "bg-[#e8a820] text-black"
                    : "bg-[#141618] text-gray-300 border border-[#1e2228] hover:border-[#e8a820]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-400 mt-12">No se encontraron productos.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {filteredProducts.map((product) => (
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

                  <h2 className="text-2xl font-semibold mt-2">
                    {product.name}
                  </h2>

                  <p className="text-gray-400 mt-3">{product.description}</p>

                  {product.price && (
                    <p className="text-white font-bold mt-4">
                      ${product.price}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
