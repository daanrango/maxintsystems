import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type FeatureCard = {
  id: number;
  title: string;
  description: string;
  link?: string;
  icon: LucideIcon;
};

type FeatureCardsSectionProps = {
  title: string;
  items: FeatureCard[];
};

export function FeatureCardsSection({
  title,
  items,
}: FeatureCardsSectionProps) {
  return (
    <section id="featureCards" className="pt-20">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <Link className="feature-link" href="/servicios">
            Conoce todos los servicios
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="feature-card border border-slate-300 rounded-xl p-5 bg-white"
              >
                <Link href={item.link || "/servicios"} className="block h-full">
                  <div className="feature-icon w-15 h-15 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={36} strokeWidth={1.8} />
                  </div>

                  <h4 className="feature-title font-bold mb-4">{item.title}</h4>

                  <p className="text-slate-600">{item.description}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
