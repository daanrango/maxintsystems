import Image from "next/image";
import type { ReactNode } from "react";
import { basePath } from "@/lib/basePath";

type ImageTextSectionProps = {
  id?: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  content: ReactNode;
};

export function ImageTextSection({
  id,
  title,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  content,
}: ImageTextSectionProps) {
  const imageLeft = imagePosition === "left";

  return (
    <section id={id} className="py-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={imageLeft ? "md:order-2" : ""}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed opacity-80">
            {content}
          </div>
        </div>
        <div className={imageLeft ? "md:order-1" : ""}>
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl">
            <Image
              src={basePath + imageSrc}
              alt={imageAlt ?? title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
