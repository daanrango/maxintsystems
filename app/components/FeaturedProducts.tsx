"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getFeaturedProducts, type Product } from "@/lib/products";
import { basePath } from "@/lib/basePath";
import { MessageCircle } from "lucide-react";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const whatsappNumber = "593998127022";

  useEffect(() => {
    getFeaturedProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="featured-products py-20 mt-20">
        <div className="w-4/5 mx-auto">
          <span className="feature-span uppercase tracking-widest text-sm">
            Destacados
          </span>

          <h2 className="feature-title text-4xl md:text-5xl font-bold mt-3">
            Productos destacados
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="feature-products-card overflow-hidden animate-pulse"
              >
                <div className="h-60 bg-[#1e2228]" />
                <div className="p-6">
                  <div className="h-4 w-32 bg-[#1e2228] rounded mb-4" />
                  <div className="h-6 w-full bg-[#1e2228] rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="featured-products py-20 mt-20">
      <div className="w-4/5 mx-auto">
        <span className="feature-span uppercase tracking-widest text-sm">
          Destacados
        </span>
        <h2 className="feature-title text-4xl md:text-5xl font-bold mt-3">
          Productos destacados
        </h2>
        <p className="mt-4">
          Equipos seleccionados para proyectos de seguridad, control y
          monitoreo.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {products.map((product) => {
            const message = encodeURIComponent(
              `Hola MAXINTSYSTEMS estoy interesado en el producto ${product.name}. Me gustaría recibir una cotización.`,
            );
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
            return (
              <article
                key={product.id}
                className="feature-products-card overflow-hidden flex flex-col"
              >
                <div className="relative h-60">
                  <Image
                    src={basePath + product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  {product.category && (
                    <span className="w-max feature-span-card text-lg uppercase mb-5">
                      {product.category}
                    </span>
                  )}
                  <h4 className="feature-product-title text-2xl font-semibold mt-2">
                    {product.name}
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="feature-products-link mt-auto inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Cotizar por WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
