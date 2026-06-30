import Image from "next/image";
import { basePath } from "@/lib/basePath";

type HeroProps = {
  title: string;
  description?: string;
  image?: string;
};

export default function Hero({ title, description, image }: HeroProps) {
  return (
    <section className="hero relative overflow-hidden flex items-center justify-center">
      {image && (
        <Image
          src={basePath + image}
          alt={title}
          fill
          priority
          className="img-fluid img-hero position-absolute top-0 w-100 h-100"
        />
      )}

      <div className="hero-content text-center px-3">
        <h1 className="hero-title uppercase m-0 hero-title-gsap">{title}</h1>
        {description && (
          <p className="hero-description m-0 mt-3 hero-description-gsap">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
